<script lang="ts">
  export let type: 'button' | 'submit' = 'button';
  export let onClick: () => void;
  export let stretch: boolean = false;
  export let variant: 'primary' | 'secondary' | 'accent' | 'danger' = 'primary';
</script>

<button
  type={type}
  on:click={onClick}
  class={`
  py-3.5 px-5 
  text-sm 
  font-medium 
  text-neutral-900 
  focus:outline-none 
  bg-white 
  rounded-lg 
  border 
  border-gray-200 
  hover:bg-gray-100
  ${variant === 'primary' && 'hover:text-purple-600'} 
  ${variant === 'secondary' && 'hover:text-pink-500'}
  ${variant === 'accent' && 'hover:text-amber-500'}
  ${variant === 'danger' && 'hover:text-rose-500'}
  focus:z-10 
  focus:ring-4 
  focus:ring-gray-200
  ${stretch? 'w-full' : ''}
  `}
>
  <slot />
</button>