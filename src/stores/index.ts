import { writable } from 'svelte/store';

export const searchQuary = writable('');
export const isSearching = writable(false);
export const modeSwiched = writable(false);
export const animated = writable(true);
