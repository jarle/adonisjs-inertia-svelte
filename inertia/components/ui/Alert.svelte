<script lang="ts">
  export let tone: 'danger' | 'info' = 'danger'
</script>

<div class="alert" data-tone={tone} role={tone === 'danger' ? 'alert' : 'status'}>
  <slot />
</div>

<style>
  .alert {
    padding: 1rem 1.1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-1);
    background: color-mix(in oklab, var(--surface) 85%, transparent);
    color: var(--ink);
  }

  .alert[data-tone='danger'] {
    border-color: color-mix(in oklab, var(--danger) 25%, var(--border));
    background: var(--danger-surface);
    color: color-mix(in oklab, var(--danger) 60%, var(--ink));
  }
</style>
