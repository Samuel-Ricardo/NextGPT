import { Middleware } from "@Types"

export const BASE: Middleware = async (req, res, next) => {
  console.log("PEDRO")

  return { break: false }
}
