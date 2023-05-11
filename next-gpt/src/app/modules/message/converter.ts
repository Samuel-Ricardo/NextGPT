import { IMessageData } from "@Types"
import { IMessage } from "./model"

export function message(data: IMessageData): IMessage {
  return {
    id: data.id,
    chat_id: data.chat_id,
    content: data.content ? data.content : "",
    has_answered: data.has_answered,
    is_from_bot: data.is_from_bot,
    created_at: data.created_at,
  } as IMessage
}

export function messages(data: IMessageData[]): IMessage[] {
  const messages: IMessage[] = []

  data.forEach((message_data) => messages.push(message(message_data)))

  console.log({ messages })

  return messages
}
