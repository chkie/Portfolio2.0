<script lang="ts">
	import { getText } from '$lib/i18n/getText';
	import type { FooterLink } from '$lib/i18n/texts/footer';

	const copyright = getText('footer', 'copyright');
	const links = getText('footer', 'links');

	const linkMap: Record<FooterLink, string> = {
		Impressum: '/impressum',
		Datenschutz: '/datenschutz',
		'Legal Notice': '/impressum',
		'Privacy Policy': '/datenschutz'
	};
</script>

<footer class="bg-gray-900 py-8 text-center text-sm text-white">
	<p>{$copyright}</p>
	<div class="mt-4 flex justify-center gap-6">
		{#each $links as label (label)}
			<a href={linkMap[label]} class="hover:underline">{label}</a>
		{/each}
	</div>
</footer>
