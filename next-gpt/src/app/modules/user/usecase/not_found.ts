import { response, writeStream } from "@/utils/server"
import { Chat } from "@modules/chat/entity"
import { JWT } from "next-auth/jwt"

export class UserNotFoundUseCase {
  execute({
    writter,
    chat,
    token,
  }: {
    writter: WritableStreamDefaultWriter
    chat: Chat
    token: JWT
  }) {
    if (chat.user_id !== token.sub) {
      setTimeout(async () => {
        writeStream(writter, "error", "Unauthenticated")
        await writter.close()
      }, 100)

      return true
    }

    return false
  }
}
