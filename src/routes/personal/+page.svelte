<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "../../components/Button.svelte";
  import Section from "../../components/Section.svelte";
  import SectionHeader from "../../components/SectionHeader.svelte";
  import TextInput from "../../components/TextInput.svelte";
  import { resumeData } from "../../stores/cvstore";

  let firstName = $resumeData.personal.firstName;
  let lastName = $resumeData.personal.lastName;
  let email = $resumeData.personal.email;
  let phone = $resumeData.personal.phone;
  let website = $resumeData.personal.website;
  let location = $resumeData.personal.location;

  function handleSubmit(e: Event) {
    e.preventDefault();
    const storeData = $resumeData;
    const data = {
      ...storeData,
      personal: {
        firstName,
        lastName,
        email,
        location,
        phone,
        website
      }
    };
    resumeData.update(() => data);
    goto('/education');
  };
</script>

<svelte:head>
	<title>Personal | Resumatiq</title>
	<meta name="description" content="Blazingly fast resume creator" />
</svelte:head>
<Section>
  <SectionHeader
    title='Personal Information'
    desc="Let's get the basics down first" 
  />
  <form on:submit={handleSubmit} class="flex flex-col gap-3">
    <div class="flex flex-col items-center gap-4 md:flex-row">
      <TextInput
        bind:value={firstName}
        label='First Name'
        placeholder='John'
        required
      />
      <TextInput
        bind:value={lastName}
        label='Last Name'
        placeholder='Doe'
        required 
      />
    </div>
    <div class="flex flex-col items-center gap-4 md:flex-row">
      <TextInput
        bind:value={email}
        label='Email'
        placeholder='example@mail.com'
        required
      />
      <TextInput
        bind:value={phone}
        label='Phone'
        placeholder='+1 111 111 11 11'
        required 
      />
    </div>
    <div class="flex flex-col items-center gap-4 md:flex-row">
      <TextInput
        bind:value={website}
        label='Website (opt.)'
        placeholder='personalwebsite.co'
      />
      <TextInput
        bind:value={location}
        label='Location'
        placeholder='Berlin, Germany'
        required 
      />
    </div>
    <div class="mt-6">
      <Button type='submit'>
        Continue
      </Button>
    </div>
  </form>  
</Section>
