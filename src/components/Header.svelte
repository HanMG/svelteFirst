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
    <a 
      href="/4"
      use:link
      use:active>
      4. 컴포넌트
    </a>
    <a 
      href="/5"
      use:link
      use:active>
      5. 스토어
    </a>
    <a 
      href="/6"
      use:link
      use:active>
      6. Todo
    </a>
  </header>
  
  <style>
    :global(header a.active) {
      font-weight: bold;
      text-decoration: underline;
    }

    a {
      border: 5px solid skyblue;
      padding: 5px;
      line-height: 45px;
    }
    
  </style>