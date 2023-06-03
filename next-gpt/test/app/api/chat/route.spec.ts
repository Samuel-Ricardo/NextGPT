/*
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { ROUTES } from "@/config"
import { headers } from "@/config/const"
// import { GENERATE_TOKEN_DATA } from "@/config/const"
// import { Chat } from "@prisma/client"
// import axios from "axios"
import "isomorphic-fetch"

describe("[API] - route: /chat", () => {
  it("[POST] - /chat | Should connect successfully and return created chat", async () => {
    const CSRF = await (await fetch(ROUTES.BASE + "/auth/csrf")).json()

    const response = await fetch(ROUTES.CHAT, {
      method: "POST",
      headers,
      body: JSON.stringify({ message: "Hello World" }),
    })

    //console.log({AAAAAA: await axios.post("/api/auth/signin/keycloak")})
    //const response = await axios.post(ROUTES.CHAT, { message: "Hello World" })

    const created = await response.json()

    console.log({ created })

    expect(response.status).toBe(200)
    //expect(created.error.statusCode).toBe(401)

    expect(created).toHaveProperty("chat")
    expect(created.chat).toHaveProperty("id")
  })

  it("[GET] - /chat | Should get all chats from logged user", async () => {
    const response = await fetch(ROUTES.CHAT, { headers })
    const data = await response.json()

    expect(response.status).toBe(200)

    expect(data).toHaveProperty("chat")
    expect(data.chat).not.toBeNull()
    expect(data.chat).toBeDefined()

    expect(data.chat.length).not.toBeNaN()
    expect(data.chat.length).toBeGreaterThan(-1)
    expect(data.chat.length).not.toBeLessThan(0)

    if (data.chat.length > 0) expect(data.chat[0]).toHaveProperty("id")
  })
})
