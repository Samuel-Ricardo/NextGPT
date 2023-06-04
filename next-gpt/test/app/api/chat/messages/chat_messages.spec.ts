/*
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { CHAT, CHAT_MESSAGES } from "@config/routes"
import { headers } from "@config/const"
import "isomorphic-fetch"
import { Chat } from "@modules/chat/entity"

describe("ROUTES | CHAT_MESSAGES => /api/chat/[chatId]/messages", () => {
  it(" Should select all messages from a chat | GET | /api/chat/[chatId]/messages ", async () => {
    const chat = (await (await fetch(CHAT, { headers })).json()).chat[0]

    const response = await fetch(CHAT_MESSAGES(chat.id!), { headers })
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toBeInstanceOf(Object)
    expect(data).toHaveProperty("messages")
    expect(data.messages).toBeInstanceOf(Array)

    for (const message of data.messages) {
      expect(message).toHaveProperty("id")
    }
  })

  it(" Should append message to chat and return the message || POST | /api/chat/[chatId]/messages ", async () => {
    const chat = (await (await fetch(CHAT, { headers })).json()).chat[0]

    const response = await fetch(CHAT_MESSAGES(chat.id!), {
      method: "POST",
      body: JSON.stringify({
        message: "Hello World! :D",
      }),
      headers,
    })

    const data = await response.json()

    console.log({ data })

    expect(response.status).toBe(200)

    expect(data).toBeInstanceOf(Object)
    expect(data).toHaveProperty("message")

    expect(data.message).toHaveProperty("id")
    expect(data.message).toHaveProperty("chat_id")
    expect(data.message.content).toBe("Hello World! :D")
  })

  it(" Should return error 500 when no chat found [ POST ] /api/chat/[chatId]/messages ", async () => {
    const response = await fetch(CHAT_MESSAGES("1"), {
      method: "POST",
      body: JSON.stringify({
        message: "Hello World",
      }),
      headers,
    })

    expect(response.status).toBe(500)

    /*
    const data = await response.json()
    console.log({ data })
  */
  })

  it("Should connect successfully but return unauthenticated", async () => {
    const response = await fetch(CHAT_MESSAGES("1"))
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.error).toEqual({ statusCode: 401 })
  })
})

// E2E
// describe("Create chat and append messages", () => {})
