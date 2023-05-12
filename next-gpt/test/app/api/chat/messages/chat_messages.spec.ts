/*
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { CHAT, CHAT_MESSAGES } from "@/config/routes"
import "isomorphic-fetch"

describe("ROUTES | CHAT_MESSAGES => /api/chat/[chatId]/messages", () => {
  it(" Should return empty array when no messages | GET | /api/chat/[chatId]/messages ", async () => {
    const response = await fetch(CHAT_MESSAGES("0"))
    const data = await response.json()

    console.log({ data })

    expect(response.status).toBe(200)
    expect(data).toBeInstanceOf(Object)
    expect(data).toHaveProperty("messages")
    expect(data.messages).toBeInstanceOf(Array)
  })

  it(" Should select all messages from a chat | GET | /api/chat/[chatId]/messages ", async () => {
    const response = await fetch(CHAT_MESSAGES("1"))
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toBeInstanceOf(Object)
    expect(data).toHaveProperty("messages")
    expect(data.messages).toBeInstanceOf(Array)
  })
})
