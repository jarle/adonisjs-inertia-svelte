<script lang="ts">
  export let label = ''
  export let error: string | undefined = undefined
  export let hint: string | undefined = undefined
</script>

<label class="field">
  <span class="label">{label}</span>
  <slot />
  {#if hint}
    <span class="hint">{hint}</span>
  {/if}
  {#if error}
    <span class="error">{error}</span>
  {/if}
</label>

<style>
  .field {
    display: grid;
    gap: 0.55rem;
  }

  .label {
    font-size: var(--step--1);
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .hint {
    color: var(--ink-soft);
    font-size: var(--step--1);
  }

  .error {
    color: var(--danger);
    font-size: var(--step--1);
  }
</style>
