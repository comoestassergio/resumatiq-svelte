<script lang="ts">
  import { page } from "$app/stores";
  import OutlineButton from "./OutlineButton.svelte";
</script>


<header class="flex items-center justify-between px-10 py-3 fixed top-0 left-0 right-0 w-full">
  {#if $page.url.pathname !== '/'}
  <a href="/">
    <h3 class="text-lg font-bold">Resumatiq</h3>
  </a>
  {:else}
  <div></div>
  {/if}
  <OutlineButton type='button' onClick={() => {}}>Log In</OutlineButton>
</header>