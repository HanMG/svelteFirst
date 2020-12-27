<script>
    let text = ''
</script>

<h1>
    {text}
</h1>

<input type="text" 
        value={text}
        on:input={(e) => {text = e.target.value}} />
 
<!-- 위와 동일 -->
<input type="text" 
        bind:value={text}
        on:input={(e) => {text = e.target.value}} />        


<button on:click={() => {text = 'HMG'}}>
    Click
</button>