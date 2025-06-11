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

<footer class="bg-fg py-8 text-center text-sm text-white">
	<p>{$copyright}</p>
       <div class="mt-4 flex justify-center gap-6">
               {#each $links as label (label)}
                       <a href={linkMap[label]} class="text-highlight hover:text-accent transition-colors">{label}</a>
               {/each}
       </div>
</footer>
