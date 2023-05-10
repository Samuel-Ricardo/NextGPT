import { IMessage } from "@/app/modules/message/model"
import { VALID_IMESSAGE_WITHOUT_CHAT, VALID_MESSAGE_DATA } from "@/config/const"
import { message, messages } from "@modules/message/converter"

describe("Message Converter", () => {
  it("should convert message data to Message Interface", () => {
    expect(message(VALID_MESSAGE_DATA)).toStrictEqual(
      VALID_IMESSAGE_WITHOUT_CHAT
    )
  })

  it("should convert message data to a array of Message Interface", () => {
    expect(messages([VALID_MESSAGE_DATA])).toStrictEqual([
      VALID_IMESSAGE_WITHOUT_CHAT,
    ])
  })
})
