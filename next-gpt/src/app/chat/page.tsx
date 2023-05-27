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

}
