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
  <title>Create account</title>
</svelte:head>

<form class="panel form-shell stack" method="POST" action="/signup">
  <div>
    <p class="eyebrow">Account</p>
    <h1>Create account</h1>
    <p class="muted">This keeps auth on the server and lets Inertia handle page transitions.</p>
  </div>

  {#if flash?.error}
    <p class="notice">{flash.error}</p>
  {/if}

  <input type="hidden" name="_csrf" value={csrfToken} />

  <label class="field">
    <span>Full name</span>
    <input type="text" name="fullName" autocomplete="name" required />
    {#if errors.fullName}
      <span class="field-error">{errors.fullName}</span>
    {/if}
  </label>

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
      autocomplete="new-password"
      required
    />
    {#if errors.password}
      <span class="field-error">{errors.password}</span>
    {/if}
  </label>

  <button class="button" type="submit">Create account</button>
  <a class="button secondary" href="/login">Already have an account?</a>
</form>
