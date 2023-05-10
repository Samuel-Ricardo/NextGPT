import { chatFactory } from "@modules/chat/factory"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()

  const created = await (await chatFactory()).create({ message: body.message })

  return NextResponse.json({ chat: created })
}
