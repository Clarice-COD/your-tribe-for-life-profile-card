<script>
    export let data;
    const { mymembers }=data;

    // Check data load
    console.log(mymembers);
  </script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<!-- test -->
 {#each mymembers as mymember}
    <p>{mymember.name}</p>
 {/each}