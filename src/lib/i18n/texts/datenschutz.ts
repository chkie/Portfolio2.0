export const datenschutzTexts = {
	de: {
		headline: 'Datenschutzerklärung',
		content: `Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Website speichert keine Cookies und verwendet keine Tracker.`
	},
	en: {
		headline: 'Privacy Policy',
		content: `We take the protection of your personal data very seriously. This website does not use cookies or trackers.`
	}
} as const;

export type DatenschutzTexts = typeof datenschutzTexts;
