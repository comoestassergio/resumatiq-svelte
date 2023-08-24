<script lang="ts">
  interface ButtonLink {
    url: string,
    target?: '_blank' | '_self',
  }
  export let type: 'button' | 'submit' = 'button';
  export let onClick: (() => void) | undefined = undefined;
  export let link: ButtonLink | undefined = undefined;
  export let variant: 'primary' | 'secondary' | 'accent' | 'danger' = 'primary';
</script>

{#if link == undefined}
<button
  type={type}
  on:click={onClick}
  class={`
  flex items-center justify-center
  text-white 
  h-[3.125rem]
  ${variant === 'primary' && 'bg-purple-600 hover:bg-purple-700 focus:ring-fuchsia-300 '}
  ${variant === 'secondary' && ' bg-pink-500 hover:bg-pink-600 focus:ring-pink-300'}
  ${variant === 'accent' && ' bg-amber-400 hover:bg-amber-500 focus:ring-orange-200'}
  ${variant === 'danger' && 'bg-rose-500 hover:bg-rose-600 focus:ring-rose-300'}
  focus:ring-4 
  font-medium 
  rounded-lg 
  text-sm 
  px-5 
  py-3.5 
  focus:outline-none
  w-full
  transition-colors
  `}>
  <slot />
</button>
{:else}
<a
  href={link.url}
  target={link.target ?? '_self'}
  class={`
  flex items-center justify-center
  text-center
  text-white 
  ${variant === 'primary' && 'bg-purple-600 hover:bg-purple-700 focus:ring-fuchsia-300 '}
  ${variant === 'secondary' && ' bg-pink-500 hover:bg-pink-600 focus:ring-pink-300'}
  ${variant === 'accent' && ' bg-amber-400 hover:bg-amber-500 focus:ring-orange-200'}
  ${variant === 'danger' && 'bg-rose-500 hover:bg-rose-600 focus:ring-rose-300'}
  focus:ring-4 
  font-medium 
  rounded-lg 
  text-sm 
  px-5 
  py-3.5 
  focus:outline-none
  w-full
  transition-colors
  `}
>
  <slot />
</a>
{/if}