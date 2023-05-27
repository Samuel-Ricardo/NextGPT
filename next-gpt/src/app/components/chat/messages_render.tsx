import { ELEMETNS } from "@config/const"
import { IMessagesRenderProps } from "@Types"
import { ChatItem } from "."
import { ChatItemError } from "../error"

export function MessagesRender({
  messages,
  loadingMessage,
  errorLoadingMessage,
}: IMessagesRenderProps) {
  return (
    <ul
      id={ELEMETNS.ID.CHATTING}
      className="h-screen overflow-y-auto bg-gray-800"
    >
      {messages.map((message, key) => (
        <ChatItem
          key={key}
          content={message.content}
          is_from_bot={message.is_from_bot}
        />
      ))}

      {loadingMessage && (
        <ChatItem content={loadingMessage} is_from_bot={true} loading={true} />
      )}

      {errorLoadingMessage && (
        <ChatItemError>{errorLoadingMessage}</ChatItemError>
      )}

      <li className="h-36 bg-gray-800"></li>
    </ul>
  )
}
