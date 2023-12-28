import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1920,

  e2e: {
    supportFile: false,
    baseUrl: 'http://localhost:3000',
  },
})
