import { ChatServiceClient as GPRCChatServiceClient } from "../rpc/pb/ChatService"
import { ChatService } from "@/app/modules/chat/service"
import { ENV } from "@/config"
import { Metadata } from "@grpc/grpc-js"

export class ChatServiceClient {
  private autorization = ENV.GRCP.AUTHORIZATION()

  constructor(private chatClient: GPRCChatServiceClient) {}

  chatStream(data: {
    chat_id: string | null
    user_id: string
    message: string
  }) {
    const metadata = new Metadata()

    metadata.set("authorization", this.autorization)

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
