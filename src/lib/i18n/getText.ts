// src/lib/i18n/getText.ts
import { derived, type Readable } from 'svelte/store';
import { texts } from './text';
import { lang } from '$lib/stores/lang';

type Texts = typeof texts;
type Section = keyof Texts;
type Key<S extends Section> = keyof Texts[S]['de'];

export function getText<S extends Section, K extends Key<S>>(
	section: S,
	key: K
): Readable<Texts[S]['de'][K]> {
	return derived(lang, ($lang) => {
		const sectionTexts = texts[section];
		const localized = sectionTexts[$lang];
		const fallback = sectionTexts['de'];
		return (localized?.[key] ?? fallback?.[key]) as Texts[S]['de'][K];
	});
}
