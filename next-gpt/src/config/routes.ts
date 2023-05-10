import { ENV } from "./ENV"

export const BASE = `${ENV.API.URL()}api`

export const HEALTH_CHECK = `${BASE}/healthcheck`
