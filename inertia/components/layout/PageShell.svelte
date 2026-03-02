<script lang="ts">
  export let width: 'normal' | 'narrow' = 'normal'
</script>

<div class="page-shell" data-width={width}>
  <slot />
</div>

<style>
  .page-shell {
    width: min(var(--measure), calc(100vw - 2rem));
    margin-inline: auto;
    padding-block: var(--space-8);
  }

  .page-shell[data-width='narrow'] {
    width: min(var(--measure-narrow), calc(100vw - 2rem));
  }

  @media (max-width: 40rem) {
    .page-shell {
      padding-block: var(--space-6);
    }
  }
</style>
