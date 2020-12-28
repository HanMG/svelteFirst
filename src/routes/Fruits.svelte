<!-- Components컴포넌트에서 사용할 Fruit 컴포넌트 -->
<script>
    // Props
    export let fruits
    export let reverse
    export let slice

    let computedFruits = []
    let name = ''

    if (reverse){
        computedFruits = [...fruits].reverse()
        name = 'Reverse'
    }else if(slice){
        // slice => '-2', '0, 3'
        // slice.split(',') => ['-2'], ['0', '3']
        // slice 값을 , 를 기준으로 자르고 전개연산자로 복사하여 사용
        computedFruits = fruits.slice(...slice.split(','))
        //name = 'Slice ' + slice
        name = `Slice ${slice}`
    }
    else{
        computedFruits = fruits
    }
</script>

<h2>
    Fruits {name}
</h2>
<ul>
    {#each computedFruits as fruit}
        <li>{fruit}</li>
    {/each}
</ul>
