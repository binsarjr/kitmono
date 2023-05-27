<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<!-- if you use tailwind directly use a class . the css won't be generated immediately when building the library using sveltekit (use webpack+svelte if you want it like vite+svelte or rollup+svelte) -->
<button on:click="{handleClick}"> 
  clicks: {count}
</button>

<style>
  button {
    /* sveltekit will convert to css when running: pnpm build */
    @apply px-4 py-2 rounded bg-blue-500 text-white;
  }
</style>