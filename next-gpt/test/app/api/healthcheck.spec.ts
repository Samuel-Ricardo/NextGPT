/*
 * @jest-environment ./prisma/prisma-environment-jest
 */

import "isomorphic-fetch"
import { RESPONSE, ROUTES } from "@/config"

describe("healthcheck", () => {
  it("API should be ok", async () => {
    const response = await fetch(ROUTES.HEALTH_CHECK)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toStrictEqual(RESPONSE.HEALTH_CHECK)
  })
})
