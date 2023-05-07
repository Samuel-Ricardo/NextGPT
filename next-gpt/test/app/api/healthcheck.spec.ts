import "isomorphic-fetch"
import { RESPONSE } from "@/config"

describe("healthcheck", () => {
  it("API should be ok", async () => {
    const response = await fetch("http://localhost:3000/api/healthcheck")
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toStrictEqual(RESPONSE.HEALTH_CHECK)
  })
})
