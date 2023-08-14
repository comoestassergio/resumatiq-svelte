<script lang="ts">
  export  let value: string = '';
  export let label: string;
  export let required: boolean = false;
  export let placeholder: string = '';
</script>

<div>
  <label for={label} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
  <input 
    bind:value={value}
    type="text" 
    id={label} 
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder={placeholder} 
    required={required}
  >
</div>