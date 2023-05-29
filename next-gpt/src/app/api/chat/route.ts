import { ICreateChatBody } from "@Types/api/chat"
import { AUTH, AUTH_ROUTE } from "@/middlewarePack"
import { chatFactory } from "@modules/chat/factory"
import { NextRequest, NextResponse } from "next/server"
export const POST = AUTH_ROUTE(async (request: NextRequest, token) => {
  const body = (await request.json()) as ICreateChatBody

  const created = await (
    await chatFactory()
  ).create({ user_id: token.sub!, message: body.message })

  return NextResponse.json({ chat: created })
})

export async function GET(request: NextRequest) {
  const auth = await AUTH(request)
  if (auth.break) return auth.result

  return NextResponse.json({
    chat: await (await chatFactory()).selectAll({ user_id: auth.result.sub }),
  })
}
