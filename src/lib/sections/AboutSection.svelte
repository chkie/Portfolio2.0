<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import { getText } from '$lib/i18n/getText';

	const headline = getText('about', 'headline');
	const text = getText('about', 'text');
</script>

<div class="bg-gray-50">
	<SectionWrapper className="py-24 text-center">
		<h2 class="text-3xl font-bold text-gray-900">{$headline}</h2>
		<p class="mt-4 text-lg text-gray-600">{$text}</p>
	</SectionWrapper>
</div>
