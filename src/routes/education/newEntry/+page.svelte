<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../../../components/Button.svelte";
  import OutlineButton from "../../../components/OutlineButton.svelte";
  import Section from "../../../components/Section.svelte";
  import SectionHeader from "../../../components/SectionHeader.svelte";
  import TextInput from "../../../components/TextInput.svelte";
  import { resumeData } from "../../../stores/cvstore";

  let uni = '';
  let degree = '';
  let startYear = '';
  let gradYear = '';

  let sectionTitle = 'New Education Entry';
  let isStillStudying = false;

  $: {
    if (uni.length > 0) {
      sectionTitle = uni;
    } else {
      sectionTitle = 'New Education Entry';
    }
  };

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
    goto('/education');
  };

  function resetValues() {
    uni = '';
    degree = '';
    startYear = '';
    gradYear = '';
  };

  function getRandomId() {
    return Math.floor(Math.random() * 10000);
  };

  function toggleStillStudying() {
    if (isStillStudying) {
      isStillStudying = false;
      gradYear = '';
    } else {
      isStillStudying = true;
      gradYear = 'Present'
    }
  };

</script>


<svelte:head>
	<title>Add Education Entry | Résumatiq</title>
	<meta name="description" content="Blazingly fast resume creator" />
</svelte:head>
<Section>
  <SectionHeader
    bind:title={sectionTitle}
    desc={`Ok, show me what you got`} 
  />
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
    <div class="grid grid-cols-[5fr_3fr] md:grid-cols-[3fr_1fr] items-end gap-2">
      <TextInput
        label='Year Graduated'
        placeholder='2016'
        bind:value={gradYear}
        disabled={isStillStudying}
        required 
      />
      {#if isStillStudying}
        <Button variant='accent' onClick={toggleStillStudying}>Still studying</Button>
      {:else}
        <OutlineButton variant='accent' onClick={toggleStillStudying}>Still studying</OutlineButton>
      {/if}
    </div>
    <div class="mt-6">
      <Button type='submit'>Done</Button>
    </div>
  </form>
</Section>