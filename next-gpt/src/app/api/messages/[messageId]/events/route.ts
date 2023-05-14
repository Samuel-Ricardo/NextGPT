import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { messageId: string } }
) {
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
