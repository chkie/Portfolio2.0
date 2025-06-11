<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import { getText } from '$lib/i18n/getText';

	const headline = getText('services', 'headline');
	const items = getText('services', 'items');
</script>

<div class="bg-white">
	<SectionWrapper className="py-24 text-center">
		<h2 class="text-3xl font-bold text-gray-900">{$headline}</h2>
		<ul class="mt-6 space-y-3 text-lg text-gray-700">
			{#each $items as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</SectionWrapper>
</div>
