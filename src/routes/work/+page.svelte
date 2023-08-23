<script>
  import Button from "../../components/Button.svelte";
  import Section from "../../components/Section.svelte";
  import SectionHeader from "../../components/SectionHeader.svelte";
  import TextInput from "../../components/TextInput.svelte";
  import { resumeData } from "../../stores/cvstore";

  let title = '';
  let company = '';
  let startYear = '';
  let endYear = '';
  let accountability = '';

</script>

<svelte:head>
	<title>Education | Resumatiq</title>
	<meta name="description" content="Blazingly fast resume creator" />
</svelte:head>
<Section>
  <SectionHeader
    title='Work'
    desc={`Very impressive, ${$resumeData.personal.firstName}, could you tell me about your work experience, too?`} 
  />
  <form class="flex flex-col gap-3">
    <TextInput
      label='Position'
      placeholder='CEO of All'
      bind:value={title}
      required 
    />
    <TextInput
      label='Company'
      placeholder='Microsoft'
      bind:value={company}
      required 
    />
    <TextInput
      label='Year Started'
      placeholder='2014'
      bind:value={startYear}
      required 
    />
    <TextInput
      label='Year Resigned'
      placeholder='2016'
      bind:value={endYear}
      required 
    />
    <Button>Add</Button>
  </form>
</Section>