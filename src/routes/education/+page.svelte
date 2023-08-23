<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import Button from "../../components/Button.svelte";
  import Section from "../../components/Section.svelte";
  import SectionHeader from "../../components/SectionHeader.svelte";
  import TextInput from "../../components/TextInput.svelte";
  import { resumeData } from "../../stores/cvstore";
  import { isModalShown } from "../../stores/redirectModalStore";

  let isAddEntryMode = false;

  let uni = '';
  let degree = '';
  let startYear = '';
  let gradYear = '';

  function handleAddEntry(e: Event) {
    e.preventDefault();
    const data = {
      ...$resumeData,
      education: $resumeData.education.concat({
        id: getRandomId(),
        university: uni,
        degree,
        startYear,
        gradYear
      })
    };
    resumeData.update(() => data);
    resetValues();
    isAddEntryMode = false;
  };

  function resetValues() {
    uni = '';
    degree = '';
    startYear = '';
    gradYear = '';
  };

  function getRandomId() {
    return Math.floor(Math.random() * 10000);
  }

  function handleRemoveEntry(_id: number) {
    const filteredEducation = $resumeData.education.filter(el => el.id !== _id);
    const data = {
      ...$resumeData,
      education: filteredEducation
    };
    resumeData.update(() => data);
  };

  onMount(() => {
    if ($resumeData.personal.firstName === '') {
      isModalShown.update(() => true);
    };
  })
</script>

<svelte:head>
	<title>Education | Resumatiq</title>
	<meta name="description" content="Blazingly fast resume creator" />
</svelte:head>
<Section>
  <SectionHeader
    title='Education'
    desc={`Alright ${$resumeData.personal.firstName}, time to flex your knowledge`} 
  />
  {#if isAddEntryMode}
    <form 
      on:submit={handleAddEntry} 
      class="flex flex-col gap-3"
    >
      <TextInput
        label='University'
        bind:value={uni}
        placeholder='Oxford'
        required 
      />
      <TextInput
        label='Degree'
        bind:value={degree}
        placeholder='Master Of Arts'
        required 
      />
      <TextInput
        label='Year Started'
        bind:value={startYear}
        placeholder='2010'
        required 
      />
      <TextInput
        label='Year Graduated'
        bind:value={gradYear}
        placeholder='2014'
        required 
      />
      <div class="mt-6">
        <Button type='submit'>Add</Button>
      </div>
    </form>
  {:else}
    <div class="flex flex-col gap-3">
      {#each $resumeData.education as entry}
        <div class="w-full h-28 px-6 py-3 border-[1px] border-neutral-300 rounded-lg flex items-center justify-between">
          <div>
            <p class="text-xl text-neutral-700">{entry.degree}</p>
            <p class="text-sm font-bold text-neutral-700">{entry.university}</p>
            <div class="mt-2">
              <p class="text-neutral-700">{entry.startYear} - {entry.gradYear}</p>
            </div>
          </div>
          <button on:click={() => handleRemoveEntry(entry.id)} class="h-10 w-10 rounded-full border-[1px] border-neutral-400 hover:bg-neutral-600 hover:text-white hover:border-neutral-600 transition-colors">&#10005;</button>
        </div>
      {/each}
      <button
      on:click={() => isAddEntryMode = true}
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
      {#if $resumeData.education.length > 0}
        <Button onClick={() => goto('/work')}>Continue</Button>
      {/if}
    </div>  
  {/if}
</Section>