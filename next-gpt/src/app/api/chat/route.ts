import { prisma } from "@prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const created = await prisma.chat.create({
    data: {
      messages: {
        create: {
          content: body.message,
        },
      },
    },
    select: {
      id: true,
      messages: true,
    },
  })

  return NextResponse.json({ chat: created })
}
