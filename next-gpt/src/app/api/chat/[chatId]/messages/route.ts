import { chatFactory } from "@modules/chat/factory"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  _request: NextRequest,
  { params }: { params: { chatId: string } }
) {
  const factory = await chatFactory()
  const chat = await factory.select({ chat_id: params.chatId })

  return new NextResponse(JSON.stringify(chat))
}
