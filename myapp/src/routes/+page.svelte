<script>
    export let data;
    const { mymembers }=data;

    // Check data load
    console.log(mymembers);

    // Route images
    import arrow from '$lib/assets/arrow.svg';
</script>

<!-- FRONT CARD -->
<header>
    <!-- Geanimeerde titel -->
    <h1 class="title">
        <span>BEHIND</span> 
        <span class="title-middle-line-wrap">
            <div class="shape" id="shape2"></div> 
            <span>THE</span> 
            <div class="shape" id="shape3"></div> 
        </span>
        <span>SCENES</span> 
    </h1>
</header>

<!-- Knop kaart flip -->
<button>
    <img alt="flip card" src={arrow} width="180" height="60" />
</button>

<!-- BACK CARD -->
<!-- test -->
 <!-- {#each mymembers as mymember}
    <p>{mymember.name}</p>
 {/each} -->