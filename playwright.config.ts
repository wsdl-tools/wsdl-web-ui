import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173/wsdl-web-ui/',
    headless: true,
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173/wsdl-web-ui/',
    reuseExistingServer: !process.env.CI,
    timeout: 15_000,
  },
})
