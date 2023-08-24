<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { localResumeData } from "../stores/cvstore";
  import { isModalShown, redirectRoute } from "../stores/redirectModalStore";
  import Button from "./Button.svelte";
  
  export let title: string = "Couldn't load data";
  export let msg: string = `It seems you haven't filled out some data on one of the previous pages. You'll be redirected after clicking the button below.`;

  function handleCloseModal() {
    isModalShown.update(() => false);
    goto(`/${$redirectRoute}`);
  };

  onMount(() => {
    localResumeData.subscribe(() => console.log('subscribed'));
  })
  
</script>

{#if $isModalShown}
  <div
    role="dialog" 
    class="fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10"
  >
    <div class="max-w-[500px] mx-4 bg-white rounded-lg p-6 flex flex-col items-center justify-center z-20">
      <div class="flex flex-col gap-1">
        <h3 class="text-xl font-medium">{title}</h3>
        {#if msg.length > 0}
        <p class="text-md text-neutral-600">{msg}</p>
        {/if}
      </div>
      <div class="w-full mt-6 self-end md:w-32">
        <Button onClick={handleCloseModal}>Got it</Button>
      </div>
    </div>
  </div>
{/if}