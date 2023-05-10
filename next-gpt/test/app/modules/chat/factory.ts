import { ChatController } from "@modules/chat/controller"
import { chatFactory } from "@modules/chat/factory"

describe("Chat Factory", () => {
  it("Should create a Chat controller instance", (_) => {
    expect(chatFactory()).toBeInstanceOf(ChatController)
  })
})
