<script lang="ts">
  import PageShell from '../components/layout/PageShell.svelte'
  import Alert from '../components/ui/Alert.svelte'
  import Button from '../components/ui/Button.svelte'
  import Card from '../components/ui/Card.svelte'

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

<PageShell>
  <section class="hero-card">
    <div class="hero-copy">
      <p class="eyebrow">AdonisJS + Inertia + Svelte</p>
      <h1>Ship a server-first app with a frontend system that does not collapse.</h1>
      <p class="lede">
        This starter keeps routing, auth, and rendering on the Adonis side while
        giving Svelte a small, scalable styling foundation instead of a global
        class dump.
      </p>
    </div>

    <div class="u-cluster" style="--cluster-gap: var(--space-3)">
      {#if user}
        <form method="POST" action="/logout">
          <input type="hidden" name="_csrf" value={csrfToken} />
          <Button type="submit" size="lg">Log out</Button>
        </form>
      {:else}
        <Button href="/signup" size="lg">Create account</Button>
        <Button href="/login" variant="secondary" size="lg">Log in</Button>
      {/if}
    </div>

    {#if flash?.error}
      <Alert>{flash.error}</Alert>
    {/if}

    <div class="feature-grid">
      <Card>
        <div class="feature-card">
          <p class="eyebrow eyebrow-muted">Foundation</p>
          <h2>Layered global CSS, not a global kitchen sink.</h2>
          <p class="supporting">
            Tokens, reset, base rules, and theme hooks live in the foundation.
            Components and pages own their own visuals.
          </p>
        </div>
      </Card>

      <Card>
        <div class="feature-card">
          <p class="eyebrow eyebrow-muted">Primitives</p>
          <h2>Reusable UI stays in Svelte.</h2>
          <p class="supporting">
            Buttons, fields, inputs, alerts, and shells are real components. They
            read from tokens and avoid fragile class composition.
          </p>
        </div>
      </Card>

      <Card>
        <div class="feature-card">
          <p class="eyebrow eyebrow-muted">Theming</p>
          <h2>Light and dark mode are built into the baseline.</h2>
          <p class="supporting">
            The starter respects `prefers-color-scheme`, supports manual overrides,
            and uses modern CSS color functions for cleaner surfaces and states.
          </p>
        </div>
      </Card>
    </div>

    <Card as="section">
      <div class="meta-card">
        <div class="meta-grid">
          <div class="meta-block">
            <p class="eyebrow eyebrow-muted">Shared props</p>
            <p class="supporting">
              Auth state, flash messages, validation errors, and CSRF token are
              available on every page.
            </p>
          </div>

          <div class="meta-block">
            <p class="eyebrow eyebrow-muted">Where to start</p>
            <p class="supporting">
              Replace these demo pages, keep the foundation small, and grow the
              component layer only when a pattern proves reusable.
            </p>
          </div>
        </div>
      </div>
    </Card>
  </section>
</PageShell>

<style>
  .hero-card {
    display: grid;
    gap: var(--space-5);
  }

  .hero-copy {
    display: grid;
    gap: var(--space-4);
  }

  .eyebrow {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    gap: 0.45rem;
    padding: 0.45rem 0.75rem;
    border: 1px solid color-mix(in oklab, var(--accent) 22%, var(--border));
    border-radius: var(--radius-round);
    background: color-mix(in oklab, var(--accent) 10%, var(--surface));
    color: color-mix(in oklab, var(--accent-strong) 70%, var(--ink));
    font-size: var(--step--1);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .eyebrow-muted {
    background: color-mix(in oklab, var(--surface) 84%, transparent);
    border-color: var(--border);
    color: var(--ink-soft);
  }

  .lede {
    font-size: var(--step-1);
    color: var(--ink-soft);
    max-width: 58ch;
  }

  .feature-grid {
    display: grid;
    gap: var(--space-4);
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }

  .feature-card {
    display: grid;
    gap: var(--space-3);
    align-content: start;
  }

  .feature-card :global(h2) {
    margin-top: 0.15rem;
  }

  .supporting {
    color: var(--ink-soft);
    line-height: 1.65;
  }

  .meta-card {
    padding: var(--space-4);
  }

  .meta-grid {
    display: grid;
    gap: var(--space-4);
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }

  .meta-block {
    display: grid;
    gap: var(--space-3);
    align-content: start;
  }
</style>
