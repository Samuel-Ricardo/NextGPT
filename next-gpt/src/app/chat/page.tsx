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

  
}
