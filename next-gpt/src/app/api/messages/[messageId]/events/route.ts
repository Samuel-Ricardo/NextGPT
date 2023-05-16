import { messageFactory } from "@modules/message/factory"
import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { lyfeCycleFactory } from "@/app/modules/user/factory/life_cycle"

export async function GET(
  request: NextRequest,
  { params }: { params: { messageId: string } }
) {
  const transform = new TransformStream()
  const writter = transform.writable.getWriter()

  const token = await getToken({ req: request })
  const messageController = messageFactory()
  const chat = await messageController.selectByIdWithChat(params.messageId)

  // userservice.isUserAble(...) => authcheck notfound use case

  const isValid = await lyfeCycleFactory().isValid(
    { user_id: chat.user_id, token },
    transform,
    writter
  )
  if (isValid.status !== 200) return NextResponse.json(isValid)

  messageController.stream({ transform, writter, id: params.messageId })

  //select message by id

  //if message has answered exit error

  //if message is from bot exit error

  // create & connect with chat service grpc client

  // listen data stream (data)

  // if on end not message received exit error

  /* on end => create message
   * add message to chat
   * update answered => true
   * exit => success + message
   */

  // return response => stream

  return NextResponse.json({ ok: true })
}

/*
 * fun response
 */

/*
 * fun write stream
 * */
