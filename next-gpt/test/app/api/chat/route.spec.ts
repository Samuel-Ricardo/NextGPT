/*
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { ROUTES } from "@/config"
import { Chat } from "@prisma/client"
import "isomorphic-fetch"

describe("[API] - route: /chat", () => {
  it("[POST] - /chat", async () => {
    const response = await fetch(ROUTES.CHAT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      },
      body: JSON.stringify({ message: "Hello World" }),
    })

    const created: { chat: Chat } = await response.json()

    console.log({ created })

    expect(response.status).toBe(200)
    //    expect(created.chat).toHaveProperty("id")
  })
})
