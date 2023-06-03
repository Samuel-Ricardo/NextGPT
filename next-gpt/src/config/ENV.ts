export const ENV = {
  ...process.env,
  PORT: () => process.env.PORT || 3000,
  API: {
    URL: () => process.env.API_URL || "http://localhost:3000/",
    AUTH_TOKEN: () => process.env.AUTH_TOKEN as string,
  },
  GRCP: {
    AUTHORIZATION: () => process.env.GRCP_AUTHORIZATION || "123456",
    SERVICE: {
      URL: () => process.env.GRCP_SERVICE_URL || "localhost:50052",
    },
  },
  NEXT_AUTH: {
    SECRET: () => process.env.NEXTAUTH_SECRET || "123",
  },
  KEYCLOAK: {
    CLIENT: {
      ID: () => process.env.KEYCLOAK_CLIENT_ID,
      SECRET: () => process.env.KEYCLOAK_CLIENT_SECRET,
    },
    ISSUER: () =>
      process.env.KEYCLOAK_ISSUER || "http://localhost:9000/realms/master",
  },
  DOCKER: {
    API: {
      URL: () => process.env.DOCKER_API_URL || "http://app:3000/",
    },
    GRCP: {
      SERVICE: {
        URL: () => process.env.GRCP_SERVICE_URL || "host.docker.internal:50052",
      },
    },
    KEYCLOAK: {
      ISSUER: () =>
        process.env.DOCKER_KEYCLOAK_ISSUER ||
        "http://host.docker.internal:9000/realms/master",
    },
  },
}
