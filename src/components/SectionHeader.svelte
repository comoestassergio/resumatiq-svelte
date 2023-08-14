<script lang="ts">
  import Divider from "./Divider.svelte";

  export let title: string;
  export let desc: string;
</script>

<div class="flex flex-col gap-2 mb-6">
  <h2 class="text-3xl font-medium">
    {title}
  </h2>
  <p class="text-neutral-600">{desc}</p>
  <Divider />
</div>