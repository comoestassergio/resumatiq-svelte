<script lang="ts">
  import Button from "../components/Button.svelte";
  import OutlineButton from "../components/OutlineButton.svelte";
</script>

<svelte:head>
	<title>Resumatiq</title>
	<meta name="description" content="Blazingly fast resume creator" />
</svelte:head>

<div class="flex flex-col gap-1 items-center justify-center w-full max-w-sm">
	<h1 class="text-3xl font-medium">Resumatiq</h1>
	<p class="text-neutral-600">Creating resumes made as simple as never before</p>
	<div class="flex flex-col gap-2 mt-6 w-full">
		<Button link={{url: '/personal'}}>
			Create new
		</Button>
		<OutlineButton onClick={() => {}}>
			Open last created
		</OutlineButton>
	</div>
</div>
