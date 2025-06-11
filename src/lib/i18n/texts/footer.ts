export const footerTexts = {
	de: {
		copyright: '© 2025 Dein Name. Alle Rechte vorbehalten.',
		links: ['Impressum', 'Datenschutz']
	},
	en: {
		copyright: '© 2025 Your Name. All rights reserved.',
		links: ['Legal Notice', 'Privacy Policy']
	}
} as const;

export type FooterTexts = typeof footerTexts;
export type FooterLink =
       (typeof footerTexts)[keyof typeof footerTexts]['links'][number];
