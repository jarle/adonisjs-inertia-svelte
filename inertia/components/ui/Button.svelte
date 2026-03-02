<script lang="ts">
  export let href: string | undefined = undefined
  export let type: 'button' | 'submit' | 'reset' = 'button'
  export let variant: 'primary' | 'secondary' | 'ghost' = 'primary'
  export let size: 'md' | 'lg' = 'md'
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  class="button"
  data-size={size}
  data-variant={variant}
  {...$$restProps}
  {...(href ? { href } : { type })}
>
  <slot />
</svelte:element>

<style>
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    min-height: 2.9rem;
    padding-inline: 1.05rem;
    border: 1px solid transparent;
    border-radius: var(--radius-round);
    font-weight: 600;
    text-decoration: none;
    letter-spacing: -0.01em;
    box-shadow: var(--shadow-sm);
  }

  .button[data-size='lg'] {
    min-height: 3.25rem;
    padding-inline: 1.25rem;
  }

  .button[data-variant='primary'] {
    background: linear-gradient(
      180deg,
      var(--accent) 0%,
      color-mix(in oklab, var(--accent-strong) 82%, black) 100%
    );
    color: var(--accent-ink);
  }

  .button[data-variant='primary']:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  .button[data-variant='secondary'] {
    border-color: var(--border);
    background: color-mix(in oklab, var(--surface) 85%, transparent);
    color: var(--ink);
  }

  .button[data-variant='secondary']:hover {
    border-color: var(--border-strong);
    background: color-mix(in oklab, var(--surface-strong) 88%, transparent);
  }

  .button[data-variant='ghost'] {
    background: transparent;
    box-shadow: none;
    color: var(--ink-soft);
  }

  .button[data-variant='ghost']:hover {
    color: var(--ink);
    background: color-mix(in oklab, var(--surface) 60%, transparent);
  }
</style>
