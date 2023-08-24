<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../../../components/Button.svelte";
  import OutlineButton from "../../../components/OutlineButton.svelte";
  import Section from "../../../components/Section.svelte";
  import SectionHeader from "../../../components/SectionHeader.svelte";
  import TextInput from "../../../components/TextInput.svelte";
  import { resumeData } from "../../../stores/cvstore";

  let company = '';
  let position = '';
  let startYear = '';
  let endYear = '';
  let accountabilities = new Array<string>();

  let sectionTitle = 'New Work Entry';
  let isStillWorking = false;

  $: {
    if (company.length > 0) {
      sectionTitle = company;
    } else {
      sectionTitle = 'New Work Entry';
    }
  };

  function handleAddEntry(e: Event) {
    e.preventDefault();
    const data = {
      ...$resumeData,
      work: $resumeData.work.concat({
        id: getRandomId(),
        company: company,
        title: position,
        startYear,
        endYear,
        accountabilities
      })
    };
    resumeData.update(() => data);
    resetValues();
    goto('/work');
  };

  function resetValues() {
    company = '';
    position = '';
    startYear = '';
    endYear = '';
  };

  function getRandomId() {
    return Math.floor(Math.random() * 10000);
  };

  function toggleStillWorking() {
    if (isStillWorking) {
      isStillWorking = false;
      endYear = '';
    } else {
      isStillWorking = true;
      endYear = 'Present'
    }
  };

</script>


<svelte:head>
	<title>Add Work Entry | Résumatiq</title>
	<meta name="description" content="Blazingly fast resume creator" />
</svelte:head>
<Section>
  <SectionHeader
    bind:title={sectionTitle}
    desc={`Can't wait to be impressed once more`} 
  />
  <form 
    on:submit={handleAddEntry} 
    class="flex flex-col gap-3"
  >
    <TextInput
      label='Company'
      bind:value={company}
      placeholder='Microsoft'
      required 
    />
    <TextInput
      label='Position'
      bind:value={position}
      placeholder='Product Manager'
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
        label='Year Resigned'
        placeholder='2016'
        bind:value={endYear}
        disabled={isStillWorking}
        required 
      />
      {#if isStillWorking}
        <Button variant='accent' onClick={toggleStillWorking}>Still working</Button>
      {:else}
        <OutlineButton variant='accent' onClick={toggleStillWorking}>Still working</OutlineButton>
      {/if}
    </div>
    <div class="mt-6">
      <Button type='submit'>Done</Button>
    </div>
  </form>
</Section>