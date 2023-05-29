import { messages } from "../message/converter"
import { IChatConverterDTO } from "./DTO"
import { Chat } from "./entity"

export function chat(data: IChatConverterDTO): Chat {
  return Chat.from({
    id: data.id,
    user_id: data.user_id!,
    messages: data.messages ? messages(data.messages) : [],
    remote_chat_id: data.remote_chat_id,
    created_at: data.created_at!,
  })
}
