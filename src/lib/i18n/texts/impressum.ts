export const impressumTexts = {
	de: {
		headline: 'Impressum',
		content: `Angaben gemäß § 5 TMG:

Max Mustermann  
Musterstraße 1  
12345 Musterstadt  
Deutschland

E-Mail: kontakt@example.com`
	},
	en: {
		headline: 'Legal Notice',
		content: `Information according to § 5 TMG:

Max Mustermann  
Musterstraße 1  
12345 Musterstadt  
Germany

Email: kontakt@example.com`
	}
} as const;

export type ImpressumTexts = typeof impressumTexts;
