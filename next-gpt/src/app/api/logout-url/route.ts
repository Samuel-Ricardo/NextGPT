import { MissingRedirectParamsError } from "@/config/errors"
import { NextRequest, NextResponse } from "next/server"
import { REDIRECT_URL } from "@/config/const"

export async function GET(request: NextRequest) {
  const redirect = request.nextUrl.searchParams.get("redirect")

  if (!redirect) return NextResponse.json(new MissingRedirectParamsError())

  return NextResponse.json({ url: REDIRECT_URL(redirect) })
}

export const dynamic = "force-dynamic"
