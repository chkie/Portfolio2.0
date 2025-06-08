<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import { getText } from '$lib/i18n/getText';

	const headline = getText('contact', 'headline');
	const description = getText('contact', 'description');
	const button = getText('contact', 'button');
</script>

<div class="bg-white">
	<SectionWrapper className="py-24 text-center">
		<h2 class="text-3xl font-bold text-gray-900">{$headline}</h2>
		<p class="mt-4 text-gray-600">{$description}</p>
		<button class="mt-6 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
			{$button}
		</button>
	</SectionWrapper>
</div>
