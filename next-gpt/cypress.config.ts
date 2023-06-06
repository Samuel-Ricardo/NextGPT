import { defineConfig } from "cypress"

export default defineConfig({
  viewportWidth: 720,
  viewportHeight: 1280,
  video: true,
  screenshotOnRunFailure: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  downloadsFolder: "cypress/downloads",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
