<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import Button from "../../components/Button.svelte";
  import Section from "../../components/Section.svelte";
  import SectionHeader from "../../components/SectionHeader.svelte";
  import { resumeData, type IResumeWork } from "../../stores/cvstore";
  import { isModalShown, redirectRoute } from "../../stores/redirectModalStore";

  let sortedEntries: IResumeWork[] = [];

  $: {
    sortedEntries = $resumeData.work.sort((a, b) => parseInt(a.startYear) - parseInt(b.startYear));
  }

  function handleRemoveEntry(_id: number) {
    const filteredWork = $resumeData.work.filter(el => el.id !== _id);
    const data = {
      ...$resumeData,
      work: filteredWork
    };
    resumeData.update(() => data);
  };

  onMount(() => {
    if ($resumeData.personal.firstName === '') {
      isModalShown.update(() => true);
    } else if ($resumeData.education.length < 1) {
      redirectRoute.update(() => 'education');
      isModalShown.update(() => true);
    }
  });
</script>

<svelte:head>
	<title>Work | Résumatiq</title>
	<meta name="description" content="Blazingly fast resume creator" />
</svelte:head>
<Section>
  <SectionHeader
    title='Work'
    desc={`Very impressive, ${$resumeData.personal.firstName}, could you tell me about your work experience, too?`} 
  />
  <div class="flex flex-col gap-3">
    {#each sortedEntries as entry}
      <div class="w-full h-28 px-6 py-3 border-[1px] border-neutral-300 rounded-lg flex items-center justify-between">
        <div>
          <p class="text-xl text-neutral-700">{entry.title}</p>
          <p class="text-sm font-bold text-neutral-700">{entry.company}</p>
          <div class="mt-2">
            <p class="text-neutral-700">{entry.startYear} - {entry.endYear}</p>
          </div>
        </div>
        <button on:click={() => handleRemoveEntry(entry.id)} class="h-10 w-10 rounded-full border-[1px] border-neutral-400 hover:bg-neutral-600 hover:text-white hover:border-neutral-600 transition-colors">&#10005;</button>
      </div>
    {/each}
    <button
    on:click={() => goto('/work/newEntry')}
    class="
      w-full h-28 
      px-6 py-4 
      border-[1px] border-dashed border-purple-400
      rounded-lg
      text-purple-600
      hover:font-medium
      transition-all
    ">
      + Add entry
    </button>
    {#if $resumeData.work.length > 0}
      <div class="mt-6">
        <Button onClick={() => goto('/resume')}>Continue</Button>
      </div>
    {/if}
  </div> 
  
</Section>