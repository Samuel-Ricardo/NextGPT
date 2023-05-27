import { ChatServiceClient as GPRCChatServiceClient } from "../rpc/pb/ChatService"
import { ENV } from "@/config"
import { Metadata } from "@grpc/grpc-js"
import { chatClient } from "../client"

export class ChatServiceClient {
  private autorization = ENV.GRCP.AUTHORIZATION()

  constructor(private chatClient: GPRCChatServiceClient) {}

  chatStream(data: { chat_id?: string; user_id?: string; message: string }) {
    const metadata = new Metadata()

    metadata.set("authorization", this.autorization)

    data.user_id = data.user_id ? data.user_id : "123"

    const stream = this.chatClient.chatStream(
      {
        chatId: data.chat_id!,
        userId: data.user_id,
        userMessage: data.message,
      },
      metadata
    )

    stream.on("data", (data) => {
      console.log({ CHAT_STREAM: data })
    })

    stream.on("error", (err) => {
      console.log({ CHAT_STREAM_ERROR: err })
    })

    stream.on("end", () => {
      console.log("END CHAT STREAM")
    })

    return stream
  }
}

export class ChatServiceClientFactory {
  static create() {
    return new ChatServiceClient(chatClient)
  }
}
