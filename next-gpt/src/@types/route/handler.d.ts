import { JWT } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export type Config = { params: any }

export type RouteHandler = (
  req: NextRequest,
  token: JWT,
  config: Config
) => Promise<Response> | Response
