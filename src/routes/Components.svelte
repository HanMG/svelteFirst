<script>
import Fruits from './Fruits.svelte'

    let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango']
</script>

<main>
<Fruits {fruits}/>
<!-- <h2>
    Fruits
</h2>
<ul>
    {#each fruits as fruit}
        <li>{fruit}</li>
    {/each}
</ul> -->

<Fruits {fruits} reverse />
<!-- 전개 연산자를 이용하여 복사 -->
<!-- <h2>
    Fruits reverse
</h2>
<ul>
    {#each [...fruits].reverse() as fruit}
        <li>{fruit}</li>
    {/each}
</ul> -->

<Fruits {fruits} slice = "-2" />
<!-- <h2>
    Fruits slice -2
</h2>
<ul>
    {#each fruits.slice(-2) as fruit}
        <li>{fruit}</li>
    {/each}
</ul>-->

<Fruits {fruits} slice = "0, 3" />
</main>
