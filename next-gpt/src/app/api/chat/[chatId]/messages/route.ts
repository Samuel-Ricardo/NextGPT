import { chatFactory } from "@modules/chat/factory"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  _request: NextRequest,
  { params }: { params: { chatId: string } }
) {
  const factory = await chatFactory()
  const message = await factory.select({ chat_id: params.chatId })

  return new NextResponse(JSON.stringify({ message }))
}

export async function POST(
  request: NextRequest,
  { params }: { params: { chatId: string } }
) {
  const body = await request.json()

  const factory = await chatFactory()
  const message = await factory.append({
    chat_id: params.chatId,
    message: body.message,
  })

  return NextResponse.json({ message })
}
