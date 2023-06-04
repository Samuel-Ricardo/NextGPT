/*
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { headers } from "@config/const"
import { CHAT, MESSAGES_EVENTS } from "@/config/routes"
import { Chat } from "@modules/chat/entity"
import "isomorphic-fetch"

describe("[API] - Message Events", () => {
  let chat: Chat

  it("Should start a chat", async () => {
    const response = await fetch(`${CHAT}`, {
      method: "POST",
      body: JSON.stringify({ message: "Hello World" }),
      headers,
    })

    const result = (await response.json()).chat

    expect(response.status).toBe(200)
    expect(result).toHaveProperty("id")

    chat = result
  })

  it("Should connect sucssessfully", async () => {
    const id = chat.messages![chat.messages!.length - 1].id

    const response = await fetch(`${MESSAGES_EVENTS(id!)}`, { headers })

    expect(response.status).toBe(200)
  })
})
