import { derived, writable } from "svelte/store";

export interface IResume {
  personal: IResumePersonal
  education: IResumeEducation[]
  work: IResumeWork[],
  state: IResumeState,
}

export interface IResumePersonal {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  website?: string
}

export interface IResumeEducation {
  id: number
  university: string
  degree: string
  startYear: string
  gradYear: string
}

export interface IResumeWork {
  id: number
  title: string
  company: string
  startYear: string
  endYear: string | 'present'
  accountabilities: string[]
}

export interface IResumeState {
  status: 'not-started' | 'in-progress' | 'done'
  currentStage?: 'personal' | 'education' | 'work' | 'resume' | undefined,
  previousStage?: 'personal' | 'education' | 'work' | 'resume' | undefined
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
  work: [],
  state: {
    status: 'not-started'
  }
});

export const localResumeData = derived(
  resumeData,
  ($resumeData, set) => {
    const localData = JSON.parse(localStorage.getItem('resumatiq.cv')!);
    localStorage.setItem('resumatiq.cv', JSON.stringify($resumeData));
  }
);
