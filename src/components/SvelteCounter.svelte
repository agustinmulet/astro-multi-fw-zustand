<script>
  // import { onDestroy } from 'svelte';  
  import { getState, subscribe } from '../store'
  
  let unsub = subscribe((s) => bears = s.bears)
  let bears = 0

  // Adding this breaks the server
  // onDestroy(() => unsub())
  
  // Console output:
  /**
   * 11:11:10 AM [astro] update ~/astro-multi-fw-zustand/src/components/SvelteCounter.svelte
    /node_modules/.pnpm/svelte@3.49.0/node_modules/svelte/internal/index.mjs:955
            throw new Error('Function called outside component initialization');
              ^

    Error: Function called outside component initialization
        at get_current_component (/node_modules/.pnpm/svelte@3.49.0/node_modules/svelte/internal/index.mjs:955:15)
        at Module.onDestroy (/node_modules/.pnpm/svelte@3.49.0/node_modules/svelte/internal/index.mjs:968:5)
        at eval (/src/components/SvelteCounter.svelte:15:24)
        at $$render (/node_modules/.pnpm/svelte@3.49.0/node_modules/svelte/internal/index.mjs?v=18fc5e72:1772:22)
        at Object.render (/node_modules/.pnpm/svelte@3.49.0/node_modules/svelte/internal/index.mjs?v=18fc5e72:1780:26)
        at Object.renderToStaticMarkup (~/astro-multi-fw-zustand/node_modules/.pnpm/@astrojs+svelte@0.2.1_svelte@3.49.0/node_modules/@astrojs/svelte/server.js?v=18fc5e72:13:29)
        at Module.renderComponent (/node_modules/.pnpm/astro@1.0.0-beta.73/node_modules/astro/dist/runtime/server/index.js:250:59)
  */
</script>

<div id="svelte">
  <button on:click={getState().increasePopulation}>one up</button>
  <h1>{ bears } around here ...</h1>
</div>
