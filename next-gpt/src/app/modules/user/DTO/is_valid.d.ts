import { JWT } from "next-auth/jwt"

export interface IsValidUserDTO {
  user_id: string
  token: JWT | null
}
