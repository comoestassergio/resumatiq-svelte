<script lang="ts">
  interface ButtonLink {
    url: string,
    target?: '_blank' | '_self',
  }
  export let type: 'button' | 'submit' = 'button';
  export let onClick: (() => void) | undefined = undefined;
  export let link: ButtonLink | undefined = undefined;
</script>

{#if link == undefined}
<button
  type={type}
  on:click={onClick}
  class="
  text-white 
  bg-purple-600 
  hover:bg-purple-700 
  focus:ring-4 
  focus:ring-fuchsia-300 
  font-medium 
  rounded-lg 
  text-sm 
  px-5 
  py-3.5 
  focus:outline-none
  w-full
  transition-colors
  ">
  <slot />
</button>
{:else}
<a
  href={link.url}
  target={link.target ?? '_self'}
  class="
  text-center
  text-white 
  bg-purple-600 
  hover:bg-purple-700 
  focus:ring-4 
  focus:ring-fuchsia-300 
  font-medium 
  rounded-lg 
  text-sm 
  px-5 
  py-3.5 
  focus:outline-none
  w-full
  transition-colors
  "
>
  <slot />
</a>
{/if}