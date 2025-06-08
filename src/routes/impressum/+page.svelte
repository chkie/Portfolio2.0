<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import { getText } from '$lib/i18n/getText';

	const headline = getText('impressum', 'headline');
	const content = getText('impressum', 'content');
</script>

<SectionWrapper className="py-24 text-left max-w-prose mx-auto">
	<h1 class="mb-4 text-3xl font-bold">{$headline}</h1>
	<pre class="text-sm whitespace-pre-wrap text-gray-800">{$content}</pre>
</SectionWrapper>
