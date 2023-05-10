import { ENV } from "./ENV"

const PREFIX = `${ENV.API.URL()}api`

export const HEALTH_CHECK = `${PREFIX}/healthcheck`
