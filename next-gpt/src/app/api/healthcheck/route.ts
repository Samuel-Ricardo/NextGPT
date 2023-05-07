import { HEALTH_CHECK } from "@/config/response"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  return NextResponse.json(HEALTH_CHECK)
}
