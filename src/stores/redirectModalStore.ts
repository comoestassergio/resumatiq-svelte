import { writable } from "svelte/store";

export const isModalShown = writable(false); 
export const redirectRoute = writable('personal');