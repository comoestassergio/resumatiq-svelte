<script lang="ts">
    import { goto } from "$app/navigation";
    import Button from "../components/Button.svelte";
    import OutlineButton from "../components/OutlineButton.svelte";
    import { resumeData } from "../stores/cvstore";
</script>

<svelte:head>
	<title>Résumatiq</title>
	<meta name="description" content="Blazingly fast resume creator" />
</svelte:head>

<div class="flex flex-col gap-1 items-center justify-center w-full max-w-sm px-10">
	<h1 class="text-5xl font-bold mb-3">Résumatiq</h1>
	<p class="text-neutral-600 text-center">Creating resumes made as simple as ever</p>
	<div class="flex flex-col gap-2 mt-6 w-full">
		<Button onClick={() => goto('/personal')}>
			Create new
		</Button>
		{#if $resumeData.work.length > 0}
			<OutlineButton onClick={() => goto('/resume')}>
				Open last created
			</OutlineButton>
		{/if}
	</div>
</div>
