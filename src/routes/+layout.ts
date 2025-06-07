import { lang } from '$lib/stores/lang';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	const supported = ['de', 'en'];
	const current = supported.includes(params.lang ?? '') ? params.lang : 'de';
	lang.set(current as 'de' | 'en');
	return {};
};
