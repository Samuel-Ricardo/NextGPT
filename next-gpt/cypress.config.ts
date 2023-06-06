import { defineConfig } from "cypress"

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotOnRunFailure: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  downloadsFolder: "cypress/downloads",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    specPattern: [
      "test/app/E2E/**/*.{js,jsx,ts,tsx}",
      "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    ],
  },
})
