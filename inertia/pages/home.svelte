<script lang="ts">
  export let user:
    | {
        fullName?: string
        email?: string
      }
    | undefined
  export let flash:
    | {
        error?: string
      }
    | undefined
  export let csrfToken = ''
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="shell">
  <section class="panel hero">
    <p class="eyebrow">AdonisJS + Inertia + Svelte</p>
    <h1>Frontend bootstrap is wired up.</h1>
    <p class="lede">
      This page is rendered through Adonis controllers and mounted by Inertia in
      the Svelte client entrypoint under <code>inertia/</code>.
    </p>

    {#if flash?.error}
      <p class="notice">{flash.error}</p>
    {/if}

    <div class="actions">
      {#if user}
        <form method="POST" action="/logout">
          <input type="hidden" name="_csrf" value={csrfToken} />
          <button class="button" type="submit">Log out</button>
        </form>
      {:else}
        <a class="button" href="/signup">Create account</a>
        <a class="button secondary" href="/login">Log in</a>
      {/if}
    </div>

    <div class="card-grid">
      <article class="card">
        <h2>Page resolution</h2>
        <p class="muted">
          Inertia now resolves pages from <code>inertia/pages/**/*.svelte</code>.
        </p>
      </article>

      <article class="card">
        <h2>Shared props</h2>
        <p class="muted">
          Auth state, flash messages, validation errors, and CSRF token are
          available on every page.
        </p>
      </article>

      <article class="card">
        <h2>Next step</h2>
        <p class="muted">
          Replace these placeholders with your real Svelte pages and data flow.
        </p>
      </article>
    </div>
  </section>
</div>
