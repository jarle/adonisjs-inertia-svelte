<script lang="ts">
  export let as: 'article' | 'section' | 'div' = 'article'
  export let padded = true
</script>

<svelte:element this={as} class="card" data-padded={padded} {...$$restProps}>
  <slot />
</svelte:element>

<style>
  .card {
    border: 1px solid var(--border);
    border-radius: var(--radius-3);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--canvas-elevated) 92%, transparent) 0%,
        color-mix(in oklab, var(--surface) 94%, transparent) 100%
      );
    box-shadow: var(--shadow-lg);
    backdrop-filter: blur(18px);
  }

  .card[data-padded='true'] {
    padding: clamp(1.7rem, 1.28rem + 1.9vw, 2.75rem);
  }
</style>
