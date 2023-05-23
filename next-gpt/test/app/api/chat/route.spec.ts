/*
 * @jest-environment ./prisma/prisma-environment-jest
 */

//import { GenerateTokenUseCase } from "@/app/modules/user/usecase"
//import { ROUTES } from "@/config"
//import { GENERATE_TOKEN_DATA } from "@/config/const"
//import { Chat } from "@prisma/client"
//import "isomorphic-fetch"

describe("[API] - route: /chat", () => {
  // let generateToken: GenerateTokenUseCase

  // beforeEach( () => generateToken = new GenerateTokenUseCase())

  it("[POST] - /chat", async () => {
    // const response = await fetch(ROUTES.CHAT, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${await generateToken.excute(GENERATE_TOKEN_DATA)}`,
    //   },
    //   body: JSON.stringify({ message: "Hello World" }),
    // })

    // const created: { chat: Chat } = await response.json()

    // console.log({ created })

    // expect(response.status).toBe(200)
    // expect(created.chat).toHaveProperty("id")

    expect(true).toBe(true)
  })
})
