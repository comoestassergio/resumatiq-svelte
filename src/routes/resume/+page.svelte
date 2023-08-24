<script lang='ts'>
  import Section from "../../components/Section.svelte";
  import SectionHeader from "../../components/SectionHeader.svelte";
  import { resumeData } from "../../stores/cvstore";

  let fullName = `${$resumeData.personal.firstName} ${$resumeData.personal.lastName}`;

</script>



<svelte:head>
	<title>My Resume | Résumatiq</title>
	<meta name="description" content="Blazingly fast resume creator" />
</svelte:head>
<Section>
  <SectionHeader
    bind:title={fullName}
    bind:desc={$resumeData.work[$resumeData.work.length -1].title}
  />
  <!-- PERSONAL -->
  <div class="flex items-center flex-wrap gap-3">
    <span>{$resumeData.personal.location}</span>
    <span>{$resumeData.personal.email}</span>
    <span>{$resumeData.personal.phone}</span>
    {#if $resumeData.personal.website && $resumeData.personal.website.length > 0}
      <span>{$resumeData.personal.website}</span>
    {/if}
  </div>
  <!-- WORK -->
  <div class="flex flex-col gap-3 mt-6">
    <h3 class="text-2xl font-medium">Work Experience</h3>
    <div class="flex flex-wrap items-center gap-3">
      {#each $resumeData.work as entry }
        <div class="flex flex-col border-[1px] border-neutral-300 rounded-lg px-4 py-3 w-full">
          <div class="flex items-center justify-between">
            <h4 class="text-xl font-medium">{entry.title}</h4>
            <p class="text-neutral-700 text-sm">{entry.startYear} - {entry.endYear}</p>
          </div>
          <p class="text-neutral-700">{entry.company}</p>
        </div>
      {/each}
    </div>
  </div>
  <!-- EDUCATION -->
  <div class="flex flex-col gap-3 mt-6">
    <h3 class="text-2xl font-medium">Education</h3>
    <div class="flex flex-wrap items-center gap-3">
      {#each $resumeData.education as entry }
        <div class="flex flex-col gap border-[1px] border-neutral-300 rounded-lg px-4 py-3 w-full">
          <div class="flex items-center justify-between">
            <h4 class="text-xl font-medium">{entry.degree}</h4>
            <p class="text-neutral-700 text-sm">{entry.startYear} - {entry.gradYear}</p>
          </div> 
          <p class="text-neutral-700">{entry.university}</p>
        </div>
      {/each}
    </div>
  </div>
</Section>