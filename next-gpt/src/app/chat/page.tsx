"use client"

import { FormEvent, useEffect, useLayoutEffect, useState } from "react"

import styles from "../page.module.css"
import { useSearchParams, useRouter } from "next/navigation"

import useSWR from "swr"
import useSWRSubscription from "swr/subscription"
import { Chat } from "@modules/chat/entity"
import { Message } from "@modules/message/entity"
import Image from "next/image"
import { CHAT_MESSAGES, MESSAGES_EVENTS } from "@/config/routes"
import { ELEMETNS } from "@/config/const"
import {
  AxiosChatGateway,
  AxiosMessageGateway,
  AxiosUserGateway,
} from "@gateway"
import { signOut } from "next-auth/react"
import { ChatSidebar, MessagesRender, TypeBar } from "../components/chat"
import {
  axiosMessageGatewayFactory,
  axiosUserGatewayFactory,
} from "@gateway/axios/factory"

export default function ChatScreen() {
  const chatGateway = new AxiosChatGateway()
  const messageGateway = axiosMessageGatewayFactory()
  const userGateway = axiosUserGatewayFactory()

  const route = useRouter()
  const searchParams = useSearchParams()

  const chatIdFromParams = searchParams.get("id")

  const [chatId, setChatId] = useState(chatIdFromParams)
  const [messageId, setMessageId] = useState<string | null | undefined>(null)

  const { data: chats, mutate: mutateChats } = useSWR<Chat[]>(
    "chats",
    chatGateway.fetcher,
    {
      fallbackData: [],
      revalidateOnFocus: false,
    }
  )

  const { data: messages, mutate: mutateMessages } = useSWR<Message[]>(
    chatId ? CHAT_MESSAGES(chatId) : null,
    chatGateway.fetcher,
    {
      fallbackData: [],
      revalidateOnFocus: false,
    }
  )

  const { data: messageLoading, error: messageError } = useSWRSubscription(
    chatId ? MESSAGES_EVENTS(chatId) : null,
    (path: string, { next }) => {
      console.log("[INIT] - Event Source: ", { path })

      const event = messageGateway.stream(path)

      event.addEventListener("message", (event) => {
        const newMessage = JSON.parse(event.data) as Message
        next(null, newMessage.content)
      })

      //@ts-ignore
      event.addEventListener("error", (event) => next(event.data, null))

      event.addEventListener("end", (event) => {
        const newMessage = JSON.parse(event.data) as Message

        mutateMessages((messages) => [...messages!, newMessage], false)

        next(null, null)
      })

      return () => {
        console.log("[DESTROY] - Event Source: ", { path })
        event.close()
      }
    }
  )

  useEffect(() => setChatId(chatIdFromParams), [chatIdFromParams])

  useEffect(() => {
    const textArea = document.querySelector(
      `#${ELEMETNS.ID.MESSAGE}`
    ) as HTMLTextAreaElement

    textArea.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) event.preventDefault()
    })

    textArea.addEventListener("keyup", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        const form = document.getElementById(`${ELEMETNS.ID.FORM}`) as HTMLFormElement
        const submitButton = document.getElementById(ELEMETNS.ID.SUBMIT) as HTMLButtonElement

        return form.requestSubmit(submitButton)
      }

      if (textArea.scrollHeight >= 200)
        return (textArea.style.overflowY = "scroll")

      textArea.style.overflowY = "hidden"
      textArea.style.height = "auto"
      textArea.style.height = textArea.scrollHeight + "px"
    })
  }, [])

  useLayoutEffect(() => {
    if (!messageLoading) return

    const chatting = document.querySelector(
      `#${ELEMETNS.ID.CHATTING}`
    ) as HTMLUListElement
    chatting.scrollTop = chatting.scrollHeight
  }, [messageLoading])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const textArea = event.currentTarget.querySelector(
      `#${ELEMETNS.ID.MESSAGE}`
    ) as HTMLTextAreaElement
    const message = textArea.value

    if (!chatId) {
      const newChat: Chat = (await chatGateway.create(message)).data.chat

      mutateChats([newChat, ...chats!], false)
      setChatId(newChat.id!)
      setMessageId(newChat!.messages![0].id)
    } else {
      const newMessage: Message = (
        await chatGateway.appendMessage(chatId, { message })
      ).data.message
      setMessageId(newMessage.id)
    }
    textArea.value = ""
  }

  async function logout() {
    await signOut({ redirect: false })
    const { url } = (
      await userGateway.logout(
        new URLSearchParams({ redirect: window.location.origin }) + ""
      )
    ).data
    window.location.href = url
  }

  return (
    <div className={`${styles.main}`}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className="overflow-hidden w-full h-[90vh] relative flex rounded-xl shadow-gray-900 shadow-2xl">
        <ChatSidebar
          chats={chats ?? []}
          onLogoutButtonClick={logout}
          onListItemClick={() => null}
          onNewChatButtonClick={() => null}
        />

        <div className="flex-1 flex-col relative">
          <MessagesRender
            messages={messages ?? []}
            loadingMessage={messageLoading}
            errorLoadingMessage={messageError}
          />

          <TypeBar messageLoading={messageLoading} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}
