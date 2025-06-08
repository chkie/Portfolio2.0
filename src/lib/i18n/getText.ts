import { get } from 'svelte/store';
import { lang, type Language } from '$lib/stores/lang';
import { texts } from './text';

export function getText<
	Section extends keyof typeof texts,
	Key extends keyof (typeof texts)[Section]['de']
>(section: Section, key: Key): string {
	const currentLang = get(lang) as Language;

	const sectionTexts = texts[section];
	const localized = sectionTexts[currentLang as keyof typeof sectionTexts];
	const fallback = sectionTexts['de'];

	const value =
		localized?.[key as keyof typeof localized] ?? fallback?.[key as keyof typeof fallback] ?? '';

	return value as string;
}
