<script>
  import Button from "../../components/Button.svelte";
  import Section from "../../components/Section.svelte";
  import SectionHeader from "../../components/SectionHeader.svelte";
  import TextInput from "../../components/TextInput.svelte";

  let uni = '';
  let degree = '';
  let startYear = '';
  let gradYear = '';

</script>


<Section>
  <SectionHeader
    title='Education'
    desc='Now time to brag about your education' 
  />
  <form class="flex flex-col gap-3">
    <TextInput
      label='University'
      value={uni}
      placeholder='Oxford'
      required 
    />
    <TextInput
      label='Degree'
      value={degree}
      placeholder='Master Of Arts'
      required 
    />
    <TextInput
      label='Year Started'
      value={startYear}
      placeholder='2010'
      required 
    />
    <TextInput
      label='Year Graduated'
      value={gradYear}
      placeholder='2014'
      required 
    />
    <div class="mt-6">
      <Button type='submit'>Add</Button>
    </div>
  </form>
</Section>