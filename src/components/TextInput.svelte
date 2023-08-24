<script lang="ts">
  export  let value: string = '';
  export let label: string;
  export let required: boolean = false;
  export let placeholder: string = '';
  export let disabled: boolean = false;
</script>

<div class="w-full">
  <label for={label} class="block mb-2 text-sm font-medium text-neutral-800 dark:text-white">{label}</label>
  <input 
    bind:value={value}
    type="text" 
    id={label}
    disabled={disabled} 
    class={`
      bg-gray-50 
      border border-gray-300 
      text-neutral-900 
      text-sm 
      rounded-lg 
      focus:ring-purple-500 
      focus:border-purple-500 
      focus-visible:outline-0
      block 
      w-full 
      p-3.5
      ${disabled && 'bg-gray-200 cursor-not-allowed'} 
      `} 
    placeholder={placeholder} 
    required={required}
  >
</div>