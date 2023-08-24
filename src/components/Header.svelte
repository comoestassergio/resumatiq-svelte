<script lang="ts">
  import { page } from "$app/stores";
  import OutlineButton from "./OutlineButton.svelte";
</script>


<header class="px-10 py-3 fixed top-0 left-0 right-0 w-full print:hidden">
  <div class="max-w-[1280px] w-full flex items-center justify-between mx-auto">
    {#if $page.url.pathname !== '/'}
      <a href="/">
        <h3 class="text-lg font-bold">Résumatiq</h3>
      </a>
    {:else}
      <div></div>
    {/if}
    <OutlineButton type='button' onClick={() => {}}>Log In</OutlineButton>
  </div>
</header>