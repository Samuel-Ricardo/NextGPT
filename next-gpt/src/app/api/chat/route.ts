import { chatFactory } from "@modules/chat/factory"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()

  console.log({ body })

  const created = (await chatFactory()).create({ message: body.message })

  console.log({ created })

  return NextResponse.json({ chat: created })
}
