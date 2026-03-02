<script lang="ts">
  import AuthShell from '../../components/layout/AuthShell.svelte'
  import Alert from '../../components/ui/Alert.svelte'
  import Button from '../../components/ui/Button.svelte'
  import Card from '../../components/ui/Card.svelte'
  import Field from '../../components/ui/Field.svelte'
  import Input from '../../components/ui/Input.svelte'

  export let errors: Record<string, string> = {}
  export let flash:
    | {
        error?: string
      }
    | undefined
  export let csrfToken = ''
</script>

<svelte:head>
  <title>Log in</title>
</svelte:head>

<AuthShell>
  <Card as="section">
    <form class="auth-form" method="POST" action="/login">
      <div class="auth-header">
        <p class="eyebrow">Session</p>
        <h1>Log in</h1>
        <p class="supporting">Use the existing Adonis session routes.</p>
      </div>

      {#if flash?.error}
        <Alert>{flash.error}</Alert>
      {/if}

      <input type="hidden" name="_csrf" value={csrfToken} />

      <Field label="Email" error={errors.email}>
        <Input
          type="email"
          name="email"
          autocomplete="email"
          required
          invalid={Boolean(errors.email)}
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <Input
          type="password"
          name="password"
          autocomplete="current-password"
          required
          invalid={Boolean(errors.password)}
        />
      </Field>

      <div class="auth-actions">
        <Button type="submit" size="lg">Log in</Button>
        <Button href="/signup" variant="secondary">Need an account?</Button>
      </div>
    </form>
  </Card>
</AuthShell>

<style>
  .auth-form {
    display: grid;
    gap: var(--space-4);
  }

  .auth-header {
    display: grid;
    gap: var(--space-2);
  }

  .eyebrow {
    display: inline-flex;
    width: fit-content;
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

  .supporting {
    color: var(--ink-soft);
    line-height: 1.65;
  }

  .auth-actions {
    display: grid;
    gap: var(--space-3);
    margin-top: var(--space-1);
  }
</style>
