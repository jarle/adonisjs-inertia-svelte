<script lang="ts">
  import PageShell from '../../components/layout/PageShell.svelte'
  import Button from '../../components/ui/Button.svelte'
  import Card from '../../components/ui/Card.svelte'
</script>

<svelte:head>
  <title>Page not found</title>
</svelte:head>

<PageShell width="narrow">
  <Card as="section">
    <div class="error-layout">
      <p class="eyebrow">404</p>
      <h1>Page not found</h1>
      <p class="supporting">The route resolved, but there is no matching page here.</p>
      <Button href="/">Back home</Button>
    </div>
  </Card>
</PageShell>

<style>
  .error-layout {
    display: grid;
    gap: var(--space-3);
  }

  .eyebrow {
    display: inline-flex;
    width: fit-content;
    padding: 0.45rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-round);
    background: color-mix(in oklab, var(--surface) 84%, transparent);
    color: var(--ink-soft);
    font-size: var(--step--1);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .supporting {
    color: var(--ink-soft);
    line-height: 1.65;
  }
</style>
