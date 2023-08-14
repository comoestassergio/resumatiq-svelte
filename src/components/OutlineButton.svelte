<script lang="ts">
  export let type: 'button' | 'submit' = 'button';
  export let onClick: () => void;
</script>

<button
  type={type}
  on:click={onClick}
  class="
  py-2.5 px-5 
  text-sm 
  font-medium 
  text-neutral-900 
  focus:outline-none 
  bg-white 
  rounded-lg 
  border 
  border-gray-200 
  hover:bg-gray-100 
  hover:text-purple-600 
  focus:z-10 
  focus:ring-4 
  focus:ring-gray-200
  w-full
  "
>
  <slot />
</button>