export type ProjectItem = {
	title: string;
	description: string;
};

export const projectsTexts = {
	de: {
		headline: 'Projekte',
		items: [
			{ title: 'Projekt A', description: 'Beschreibung A' },
			{ title: 'Projekt B', description: 'Beschreibung B' }
		]
	},
	en: {
		headline: 'Projects',
		items: [
			{ title: 'Project A', description: 'Description A' },
			{ title: 'Project B', description: 'Description B' }
		]
	}
} as const;

export type ProjectsTexts = typeof projectsTexts;
