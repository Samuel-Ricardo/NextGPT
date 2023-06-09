import { ENV } from "./ENV"

export const BASE = `${ENV.API.URL()}api`

export const HEALTH_CHECK = `${BASE}/healthcheck`
export const CHAT = `${BASE}/chat`

export const CHAT_MESSAGES = (chatId: string) => `${CHAT}/${chatId}/messages`

export const MESSAGES_EVENTS = (messageId: string) =>
  `${BASE}/messages/${messageId}/events`

export const GENERATE_TOKEN = `${BASE}/generate-token`

export const LOGOUT_URL = (params: string) => `${BASE}/logout-url?${params}`
