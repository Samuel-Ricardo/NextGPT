import { lifeCycleFactory } from "@modules/user/factory/life_cycle"
import { AUTH_ROUTE } from "@/middleware"

export const POST = AUTH_ROUTE(async (req) => {
  const body = await req.json()

  return await lifeCycleFactory().generateToken({
    name: "admin",
    sub: body.user_id ?? "30972301-1e88-4093-bb1e-4f2050722fa8",
  })
})
