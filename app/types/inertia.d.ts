import '@adonisjs/inertia/types'

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'auth/login': {}
    'auth/signup': {}
    'errors/not_found': {}
    'errors/server_error': {}
    home: {}
  }
}
