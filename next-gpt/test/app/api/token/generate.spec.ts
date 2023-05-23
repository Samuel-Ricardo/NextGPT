import { GENERATE_TOKEN } from "@/config/routes"

describe("[API] => /generate-token", () => {
  it("[POST] -> Should generate a token", async () => {
    const response = await fetch(GENERATE_TOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: "30972301-1e88-4093-bb1e-4f2050722fa8" }),
    })

    console.log({ PEDRO: await response.json() })
    expect(response.status).toBe(200)
  })
})
