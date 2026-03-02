<script lang="ts">
  export let invalid = false
</script>

<input class="input" aria-invalid={invalid} {...$$restProps} />

<style>
  .input {
    min-height: 3.35rem;
    padding-inline: 1.05rem;
    padding-block: 0.9rem;
    box-shadow: inset 0 1px 0 color-mix(in oklab, white 35%, transparent);
  }

  .input:hover {
    border-color: var(--border-strong);
  }

  .input[aria-invalid='true'] {
    border-color: color-mix(in oklab, var(--danger) 45%, var(--border));
    background: color-mix(in oklab, var(--danger-surface) 45%, var(--surface));
  }
</style>
