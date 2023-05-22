import { ENV } from "@/config"
import keycloakProvider from "next-auth/providers/keycloak"

export const authConfig = {
  providers: [
    keycloakProvider({
      clientId: ENV.KEYCLOAK.CLIENT.ID() as string,
      clientSecret: ENV.KEYCLOAK.CLIENT.SECRET() as string,
      issuer: ENV.KEYCLOAK.ISSUER(),
    }),
  ],
}
