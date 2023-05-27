"use client"

import { FormEvent, useEffect, useLayoutEffect, useState } from "react"

import { useRouter } from "next/router"
import styles from "../page.module.css"
import { useSearchParams } from "next/navigation"

import useSWR from "swr"
import useSWRSubscription from "swr/subscription"
import { Chat } from "@modules/chat/entity"
import { Message } from "@modules/message/entity"
import { CHAT_MESSAGES, MESSAGES_EVENTS } from "@/config/routes"
import { ELEMETNS } from "@/config/const"
import {
  AxiosChatGateway,
  AxiosMessageGateway,
  AxiosUserGateway,
} from "@gateway"
import { signOut } from "next-auth/react"
import { ChatSidebar, MessagesRender, TypeBar } from "../components/chat"

export default function ChatScreen() {
  const chatGateway = new AxiosChatGateway()
  const messageGateway = new AxiosMessageGateway()
  const userGateway = new AxiosUserGateway()

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
        const form = document.querySelector(
          `#${ELEMETNS.ID.FORM}`
        ) as HTMLFormElement
        const submitButton = document.querySelector(
          `#${ELEMETNS.ID.SUBMIT}`
        ) as HTMLButtonElement

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
      `#${ELEMETNS.ID.TEXT_AREA}`
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

}
