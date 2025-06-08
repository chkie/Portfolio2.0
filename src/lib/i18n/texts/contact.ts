export const contactTexts = {
	de: {
		headline: 'Kontakt',
		description: 'Du möchtest mit mir arbeiten oder hast eine Frage? Schreib mir einfach.',
		button: 'Nachricht senden'
	},
	en: {
		headline: 'Contact',
		description: 'Want to work with me or have a question? Just drop me a message.',
		button: 'Send message'
	}
} as const;

export type ContactTexts = typeof contactTexts;
