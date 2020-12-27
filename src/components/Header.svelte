<script>
    import { link } from 'svelte-spa-router'
    import active from 'svelte-spa-router/active'
  </script>
  
  <header>
    <a 
      href="/"
      use:link
      use:active>
      Home
    </a>
    <a 
      href="/1"
      use:link
      use:active>
      1. 선언적렌더링
    </a>
    <a 
      href="/2-1"
      use:link
      use:active>
      2-1. 조건문
    </a>
    <a 
      href="/2-2"
      use:link
      use:active>
      2-2. 반복문
    </a>
    <a 
      href="/3-1"
      use:link
      use:active>
      3-1. 이벤트 헨들링
    </a>
    <a 
      href="/3-2"
      use:link
      use:active>
      3-2. 이벤트 헨들링
    </a>
  </header>
  
  <style>
    :global(header a.active) {
      font-weight: bold;
      text-decoration: underline;
    }
  </style>