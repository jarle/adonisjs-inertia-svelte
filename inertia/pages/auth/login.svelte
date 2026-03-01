<script lang="ts">
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

<form class="panel form-shell stack" method="POST" action="/login">
  <div>
    <p class="eyebrow">Session</p>
    <h1>Log in</h1>
    <p class="muted">Use the existing Adonis session routes.</p>
  </div>

  {#if flash?.error}
    <p class="notice">{flash.error}</p>
  {/if}

  <input type="hidden" name="_csrf" value={csrfToken} />

  <label class="field">
    <span>Email</span>
    <input type="email" name="email" autocomplete="email" required />
    {#if errors.email}
      <span class="field-error">{errors.email}</span>
    {/if}
  </label>

  <label class="field">
    <span>Password</span>
    <input
      type="password"
      name="password"
      autocomplete="current-password"
      required
    />
    {#if errors.password}
      <span class="field-error">{errors.password}</span>
    {/if}
  </label>

  <button class="button" type="submit">Log in</button>
  <a class="button secondary" href="/signup">Need an account?</a>
</form>
