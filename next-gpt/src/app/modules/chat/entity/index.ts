import { IMessage } from "../../message/model"
import { IChat } from "../model"

export class Chat {
  id?: string
  user_id!: string
  remote_chat_id?: string
  created_at!: Date
  messages!: IMessage[] | null

  constructor({ id, user_id, remote_chat_id, created_at, messages }: IChat) {
    return Object.assign(this, {
      id,
      user_id,
      remote_chat_id,
      created_at,
      messages,
    })
  }

  static from({ id, user_id, remote_chat_id, created_at, messages }: IChat) {
    return new Chat({ id, user_id, remote_chat_id, created_at, messages })
  }
}
