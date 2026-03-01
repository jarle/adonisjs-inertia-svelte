import { createInertiaApp, type ResolvedComponent } from '@inertiajs/svelte'
import { mount } from 'svelte'
import './css/app.css'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: async (name) => {
    const pages = import.meta.glob('./pages/**/*.svelte')
    const page = pages[`./pages/${name}.svelte`]

    if (!page) {
      throw new Error(`Unknown Inertia page: ${name}`)
    }

    return page() as Promise<ResolvedComponent>
  },
  setup: ({ el, App, props }) => {
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
