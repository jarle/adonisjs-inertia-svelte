import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte'
import { mount } from 'svelte'
import './styles/index.css'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'
const pages = import.meta.glob<ResolvedComponent>('./pages/**/*.svelte')
type SetupOptions = Parameters<NonNullable<Parameters<typeof createInertiaApp>[0]['setup']>>[0]

createInertiaApp({
  title: (title: string) => (title ? `${title} - ${appName}` : appName),
  resolve: async (name: string) => {
    const page = pages[`./pages/${name}.svelte`]

    if (!page) {
      throw new Error(`Unknown Inertia page: ${name}`)
    }

    return page()
  },
  setup: ({
    el,
    App,
    props,
  }: SetupOptions) => {
    if (!el) {
      throw new Error('Missing Inertia app root element')
    }

    mount(App, {
      target: el,
      props,
    })
  },
  progress: {
    color: '#1f2937',
  },
})
