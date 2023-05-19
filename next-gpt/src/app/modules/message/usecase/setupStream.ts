import { ChatServiceClientFactory } from "@/grpc/chat/client"
import { ISetupStreamDTO } from "../DTO"
import { writeStream } from "@/utils/server"

export class SetupMessageStreamUseCase {
  execute({ message, user_id, chat_id, writter }: ISetupStreamDTO) {
    const grpService = ChatServiceClientFactory.create()
    const stream = grpService.chatStream({ message, user_id, chat_id })

    stream.on("error", async (err) => {
      console.log(err)
      writeStream(writter, "error", err)
      await writter.close()
    })

    return stream
  }
}
