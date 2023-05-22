import { UnauthenticatedError } from "@config/errors"
import { Config, Middleware, RouteHandler } from "@Types"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export const AUTH_ROUTE = (handler: RouteHandler) => {
  return async (req: NextRequest, config: Config) => {
    const token = await getToken({ req })

    return token
      ? handler(req, token, config)
      : NextResponse.json({ error: new UnauthenticatedError() })
  }
}

export const AUTH: Middleware = async (req?: Request) => {
  const token = await getToken({ req: req as NextRequest })

  return token
    ? { break: false, result: token }
    : {
        break: true,
        result: NextResponse.json({ error: new UnauthenticatedError() }),
      }
}
