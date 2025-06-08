<script lang="ts">
	import { getText } from '$lib/i18n/getText';
	const copyright = getText('footer', 'copyright');
	const links = getText('footer', 'links');
</script>

<footer class="bg-gray-900 py-8 text-center text-sm text-white">
	<p>{$copyright}</p>
	<div class="mt-4 flex justify-center gap-6">
		{#each $links as label}
			<a href="impressum" class="hover:underline">{label}</a>
		{/each}
	</div>
</footer>
