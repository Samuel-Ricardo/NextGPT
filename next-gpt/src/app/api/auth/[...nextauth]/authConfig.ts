import { ENV } from "@config"
import { AuthOptions } from "next-auth"
import keycloakProvider from "next-auth/providers/keycloak"

export const authConfig: AuthOptions = {
  providers: [
    keycloakProvider({
      clientId: ENV.KEYCLOAK.CLIENT.ID() as string,
      clientSecret: ENV.KEYCLOAK.CLIENT.SECRET() as string,
      issuer: ENV.DOCKER.KEYCLOAK.ISSUER(),
    }),
  ],
  secret: ENV.NEXT_AUTH.SECRET(),
  debug: true,
}
