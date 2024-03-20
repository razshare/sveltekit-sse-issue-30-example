<script>
  import { source } from 'sveltekit-sse';

  /**
   * @type {?import('svelte/store').Readable<string>}
   */
  let time;

  function start() {
    time = source('/events').select('time');
  }
</script>

{#if !time}
  <button on:click={start}>
    <span>What time is it?</span>
  </button>
{:else}
  {$time}
{/if}
