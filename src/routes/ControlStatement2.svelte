<script>
    let name = 'Fruits' ;
    let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango']

    function deleteFruit(){
        fruits = fruits.slice(1)
    }
</script>

<main>
    <h1> Hello {name}</h1>
    <ul>
        {#each fruits as fruit}
            <li>{fruit}</li>
        {/each}
    </ul>
    <button on:click={deleteFruit}>
        Eat it
    </button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;		
		margin: 0 auto;
	}
    ul{
        padding-inline-start: 0px;
        list-style-type: none;
    }
</style>

