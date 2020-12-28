import {writable} from 'svelte/store'

// 외부에서 사용하고 쓰기가능하게끔 writable을 써야함
export let storeName = writable('HMG')