/*
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { ROUTES } from "@/config"
import { Chat } from "@prisma/client"
import "isomorphic-fetch"

describe("[API] - route: /chat", () => {
  it("POST /chat", async () => {
    const response = await fetch(ROUTES.CHAT, {
      method: "POST",
      body: JSON.stringify({ message: "Hello World" }),
    })

    const created: { chat: Chat } = await response.json()

    console.log({ created })

    expect(response.status).toBe(200)
    expect(created.chat).toHaveProperty("id")
  })
})
