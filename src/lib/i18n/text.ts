import { heroTexts } from './texts/hero';
import { aboutTexts } from './texts/about';
import { layoutTexts } from './texts/layout';
import { servicesTexts } from './texts/services';
import { projectsTexts } from './texts/projects';
import { contactTexts } from './texts/contact';
import { footerTexts } from './texts/footer';
import { impressumTexts } from './texts/impressum';
import { datenschutzTexts } from './texts/datenschutz';

export const texts = {
	hero: heroTexts,
	about: aboutTexts,
	layout: layoutTexts,
	services: servicesTexts,
	projects: projectsTexts,
	contact: contactTexts,
	footer: footerTexts,
	impressum: impressumTexts,
       datenschutz: datenschutzTexts
} as const;
