import { writable } from "svelte/store";

interface IResume {
  personal: IResumePersonal
  education: IResumeEducation[]
  work: IResumeWork[]
}

interface IResumePersonal {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  website?: string
}

interface IResumeEducation {
  id: number
  university: string
  degree: string
  startYear: string
  gradYear: string
}

interface IResumeWork {
  id: number
  title: string
  company: string
  startYear: string
  endYear: string | 'present'
  accountabilities: string[]
}

export let resumeData = writable<IResume>({
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phone: '',
  },
  education: [],
  work: []
});