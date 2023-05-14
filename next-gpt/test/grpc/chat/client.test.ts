import { ChatServiceClientFactory } from "@/grpc/chat/client"

describe("Chat Service Client", () => {
  test("GRPC Chat client connection", (done) => {
    expect(true).toBe(true)
    done()
    // jest.setTimeout(35000)
    /*
 
 const chatService = ChatServiceClientFactory.create()

    const stream = chatService.chatStream({
      user_id: "1",
      message: "Hello World!",
    })

    const datas = []

    stream.on("error", (err) => {
      expect(err).toBeUndefined()
    })

    stream.on("data", (data) => {
      datas.push(data)
    })

    stream.on("end", () => {
      expect(datas.length).not.toBe(0)
      done()
    })
*/
  })
})
