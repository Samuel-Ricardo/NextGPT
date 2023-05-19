import { IError } from "@Types"
import { Message } from "../entity"
import {
  AlredyAnsweredMessageError,
  MessageFromBotError,
} from "@/config/errors"

export class IsInValidMessageUseCase {
  execute(message: Message): IError | undefined {
    if (message.has_answered) return new AlredyAnsweredMessageError()
    if (message.is_from_bot) return new MessageFromBotError()
  }
}
