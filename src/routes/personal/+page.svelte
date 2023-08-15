<script lang="ts">
  import Button from "../../components/Button.svelte";
  import Section from "../../components/Section.svelte";
  import SectionHeader from "../../components/SectionHeader.svelte";
  import TextInput from "../../components/TextInput.svelte";

  let firstName = '';
  let lastName = '';
  let email = '';
  let phone = '';
  let website = '';
  let location = '';

  function handleSubmit(e: Event) {
    e.preventDefault();
    alert('submit');
  }
</script>

<Section>
  <SectionHeader
    title='Personal Information'
    desc="Let's write down some basics first" 
  />
  <form on:submit={handleSubmit} class="flex flex-col gap-3">
    <div class="flex flex-col items-center gap-4 md:flex-row">
      <TextInput
        value={firstName}
        label='First Name'
        placeholder='John'
        required
      />
      <TextInput
        value={lastName}
        label='Last Name'
        placeholder='Doe'
        required 
      />
    </div>
    <div class="flex flex-col items-center gap-4 md:flex-row">
      <TextInput
        value={email}
        label='Email'
        placeholder='example@mail.com'
        required
      />
      <TextInput
        value={phone}
        label='Phone'
        placeholder='+1 111 111 11 11'
        required 
      />
    </div>
    <div class="flex flex-col items-center gap-4 md:flex-row">
      <TextInput
        value={website}
        label='Website (opt.)'
        placeholder='personalwebsite.co'
      />
      <TextInput
        value={location}
        label='Location'
        placeholder='Berlin, Germany'
        required 
      />
    </div>
    <div class="mt-6">
      <Button link={{url: '/education'}}>
        Continue
      </Button>
    </div>
  </form>  
</Section>
