<script lang="ts">
  export let margin: string = '';
  export let dashed: boolean = false;
</script>

<div class={`w-full border-[1px] ${margin} ${dashed ? 'border-dashed' : ''}`}></div>