<script>
    import { writable } from 'svelte/store'
    import Todo from './Todo.svelte'
    let title = ''
    let todos = writable([])
    let id = 0

    // 'crypto-random-string', 'uuid'등의 외부라이브러리로 id를 유니크하게 할 수도 있음
    function createTodo() {
        if( !title.trim()) {
            title = ''
            return
        }

        $todos.push({
            id,
            title
        })
        $todos = $todos
        title = ''
        id += 1
    }
</script>

<main>
<input type="text" 
        bind:value={title} 
        on:keydown={(e)=> {e.key === 'Enter' && createTodo()}}/>

<button on:click={createTodo}>
    Create Todo
</button>


{#each $todos as todo }
    <Todo {todos} {todo} />
{/each}

</main>
