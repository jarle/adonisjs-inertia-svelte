import { test } from '@japa/runner'
import { captureScreenshot } from './utils.js'

const suite = 'smoketest'

test('can see landing screen', async ({ visit }) => {
  const page = await visit('/')

  await page.waitForLoadState('networkidle')
  await page.assertPath('/')
  await page.assertTitle('Home')
  await captureScreenshot(page, suite, 'can see landing screen', '01-home')
  await page.assertTextContains('body', 'Ship a server-first app with a frontend system that does not collapse.')
})
