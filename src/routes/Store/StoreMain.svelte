<script>
    import { storeName } from './store.js'
    import Parent from './Parent.svelte'    
    let name = 'world'
    // $ 는 store 전용 예약어라고함
    $storeName = name
    // 스토어 전체보기
    // console.log(storeName)
    // 스토어 실제 내용 (auto subscribtion)
    // console.log($storeName)
</script>

<main>
<h1>Hello {name}!</h1>

<Parent />
</main>