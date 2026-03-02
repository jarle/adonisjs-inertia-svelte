import { authBrowserClient } from '@adonisjs/auth/plugins/browser_client'
import ace from '@adonisjs/core/services/ace'
import { assert } from '@japa/assert'
import app from '@adonisjs/core/services/app'
import server from '@adonisjs/core/services/server'
import type { Config } from '@japa/runner/types'
import { browserClient } from '@japa/browser-client'
import { pluginAdonisJS } from '@japa/plugin-adonisjs'
import { sessionBrowserClient } from '@adonisjs/session/plugins/browser_client'
import testUtils from '@adonisjs/core/services/test_utils'
import fs from 'node:fs/promises'

/**
 * This file is imported by the "bin/test.ts" entrypoint file
 */

/**
 * Configure Japa plugins in the plugins array.
 * Learn more - https://japa.dev/docs/runner-config#plugins-optional
 */
export const plugins: Config['plugins'] = [
  assert(),
  pluginAdonisJS(app),
  browserClient({
    runInSuites: ['browser'],
  }),
  sessionBrowserClient(app),
  authBrowserClient(app),
]

/**
 * Configure lifecycle function to run before and after all the
 * tests.
 *
 * The setup functions are executed before all the tests
 * The teardown functions are executed after all the tests
 */
export const runnerHooks: Required<Pick<Config, 'setup' | 'teardown'>> = {
  setup: [
    async () => {
      await ace.exec('migration:run', ['--disable-locks'])
      await fs.rm('tmp/browser', { recursive: true, force: true })
    },
  ],
  teardown: [],
}

/**
 * Configure suites by tapping into the test suite instance.
 * Learn more - https://japa.dev/docs/test-suites#lifecycle-hooks
 */
export const configureSuite: Config['configureSuite'] = (suite) => {
  if (['browser', 'functional', 'e2e'].includes(suite.name)) {
    return suite.setup(() => {
      const testServer = testUtils.httpServer()
      server.use([
        () => import('@adonisjs/static/static_middleware'),
        () => import('@adonisjs/vite/vite_middleware'),
      ])

      return testServer.start()
    })
  }

  if (suite.name === 'browser') {
    suite.setup(() => testUtils.db().withGlobalTransaction())
  }
}
