import "isomorphic-fetch"
import { ENV, RESPONSE } from "@/config"

describe("healthcheck", () => {
  it("API should be ok", async () => {
    const response = await fetch(`${ENV.API.URL}api/healthcheck`)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toStrictEqual(RESPONSE.HEALTH_CHECK)
  })
})
