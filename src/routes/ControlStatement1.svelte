<script>
    let name = 'world'
    let toggle = false
    if(toggle){

    } else {

    }    
</script>

<main>
    <button on:click={() => {toggle = !toggle}}>
        Toggle
    </button>
    {#if toggle}
        <h1>Hello {name}!</h1>
    {:else}
        <div>No name!</div>
    {/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;		
		margin: 0 auto;
	}
</style>

