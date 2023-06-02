/*
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { ROUTES } from "@/config"
// import { GENERATE_TOKEN_DATA } from "@/config/const"
// import { Chat } from "@prisma/client"
// import axios from "axios"
import "isomorphic-fetch"

describe("[API] - route: /chat", () => {
  it("[POST] - /chat | Should connect successfully but return unauthenticated error", async () => {
    const CSRF = await (await fetch(ROUTES.BASE + "/auth/csrf")).json()

    const response = await fetch(ROUTES.CHAT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `next-auth.csrf-token=${CSRF}`,
      },
      body: JSON.stringify({ message: "Hello World" }),
    })

    //console.log({AAAAAA: await axios.post("/api/auth/signin/keycloak")})
    //const response = await axios.post(ROUTES.CHAT, { message: "Hello World" })

    const created = await response.json()

    console.log({ created })

    expect(response.status).toBe(200)
    expect(created.error.statusCode).toBe(401)
  })
})
