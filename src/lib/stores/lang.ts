import { writable } from 'svelte/store';

export type Language = 'de' | 'en';
export const lang = writable<Language>('de');
