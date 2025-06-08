export type Language = 'de' | 'en';

import { writable } from 'svelte/store';

export const lang = writable<Language>('de');
