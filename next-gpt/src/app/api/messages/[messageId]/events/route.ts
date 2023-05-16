import { messageFactory } from "@modules/message/factory"
import { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { lyfeCycleFactory } from "@modules/user/factory/life_cycle"

export async function GET(
  request: NextRequest,
  { params }: { params: { messageId: string } }
) {
  const transform = new TransformStream()
  const writter = transform.writable.getWriter()

  const token = await getToken({ req: request })
  const messageController = messageFactory()

  const chat = await messageController.selectByIdWithChat(params.messageId)

  const isValid = await lyfeCycleFactory().isValid(
    { user_id: chat.user_id, token },
    transform,
    writter
  )

  if (isValid.status !== 200) return isValid

  return messageController.stream({ transform, writter, id: params.messageId })
}
