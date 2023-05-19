import { Chat } from "@modules/chat/entity"
import { ICreateMessageDTO, IMessageStreamDTO } from "../DTO"
import { Message } from "../entity"
import {
  SelectMessageByIdUseCase,
  SelectMessageByIdWithChatUseCase,
} from "../usecase"
import { CreateMessageUseCase } from "../usecase/create"
import { writeStream } from "@/utils/server"
import { IsInValidMessageUseCase } from "../usecase/isInValid"
import { SetupMessageStreamUseCase } from "../usecase/setupStream"
import { NoMessageReceivedError } from "@/config/errors"

export class MessageService {
  constructor(
    private readonly create: CreateMessageUseCase,
    private readonly selectById: SelectMessageByIdUseCase,
    private readonly selectByIdWithChat: SelectMessageByIdWithChatUseCase,
    private readonly isInValid: IsInValidMessageUseCase,
    private readonly setupStream: SetupMessageStreamUseCase
  ) {}

  async createMessage(data: ICreateMessageDTO): Promise<Message> {
    return await this.create.execute(data)
  }

  async selectMessageById(id: string): Promise<Message> {
    return await this.selectById.execute(id)
  }

  async selectMessageByIdWithChat(id: string): Promise<Chat> {
    return await this.selectByIdWithChat.execute(id)
  }

  async messageStream({
    id,
    writter,
  }: IMessageStreamDTO): Promise<
    Error | { content: string; chatId: string } | null
  > {
    const chat = await this.selectByIdWithChat.execute(id)
    const _message = chat.messages![0]
    const invalid = this.isInValid.execute(_message)

    if (invalid) return invalid

    const stream = this.setupStream.execute({
      message: _message.content,
      writter,
      user_id: chat.user_id,
      chat_id: chat.id!,
    })

    let messageRecived: { content: string; chatId: string } | null = null

    stream.on("data", (data) => {
      messageRecived = data
      writeStream(writter, "message", data)
    })

    stream.on("end", async () => {
      console.log("End message stream!!!")

      if (!messageRecived) {
        writeStream(writter, "error", new NoMessageReceivedError())
        await writter.close()
        return
      }

      const newMessage = await this.createMessage({
        chat_id: chat.id!,
        content: messageRecived.content,
        is_from_bot: true,
        has_answered: true,

        remote_chat_id: messageRecived.chatId,
        answered_message_id: _message.chat_id,
      })

      writeStream(writter, "end", newMessage)
      await writter.close()
    })

    return messageRecived
  }
}
