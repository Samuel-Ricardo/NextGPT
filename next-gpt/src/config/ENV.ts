export const ENV = {
  ...process.env,
  PORT: () => process.env.PORT || 3000,
  API: {
    URL: () => process.env.API_URL || "http://localhost:3000/",
  },
  DOCKER: {
    API: {
      URL: () => process.env.DOCKER_API_URL || "http://app:3000/",
    },
  },
}
