import { IAppendMessagesBody } from "@/@types/api/chat/append_message"
import { AUTH_ROUTE } from "@/middlewarePack"
import { chatFactory } from "@modules/chat/factory"
import { NextRequest, NextResponse } from "next/server"

export const GET = AUTH_ROUTE(
  async (
    _request: NextRequest,
    token,
    { params }: { params: { chatId: string } }
  ) => {
    const factory = await chatFactory()
    return await factory.select({ chat_id: params.chatId, token })
  }
)

export async function POST(
  request: NextRequest,
  { params }: { params: { chatId: string } }
) {
  const body = (await request.json()) as IAppendMessagesBody
  const chat = await chatFactory()

  return NextResponse.json(
    await chat.append({
      chat_id: params.chatId,
      message: body.message,
      request,
    })
  )
}
