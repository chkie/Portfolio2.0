import { writable } from 'svelte/store'; // ⬅️ DER FEHLTE BEI DIR

export type Language = 'de' | 'en';

export const lang = writable<Language>('de');
