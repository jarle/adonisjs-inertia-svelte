<script lang="ts">
  import PageShell from './PageShell.svelte'
</script>

<PageShell width="narrow">
  <div class="auth-shell">
    <slot />
  </div>
</PageShell>

<style>
  .auth-shell {
    display: grid;
    gap: var(--space-5);
  }
</style>
