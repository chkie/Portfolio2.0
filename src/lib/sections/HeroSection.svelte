<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import { getText } from '$lib/i18n/getText';

	const headline = getText('hero', 'headline');
	const subline = getText('hero', 'subline');
	const cta = getText('hero', 'cta');
</script>

<div class="relative overflow-hidden bg-white">
	<SectionWrapper className="py-24 text-center">
		<h1 class="text-hero-headline text-4xl font-bold sm:text-5xl md:text-6xl">
			{$headline}
		</h1>
		<p class="text-hero-subline mx-auto mt-6 max-w-xl text-lg">
			{$subline}
		</p>
		<div class="mt-10">
			<a
				href="#contact"
				class="bg-accent hover:bg-accent/90 inline-block rounded-xl px-6 py-3 text-white transition-colors"
			>
				{$cta}
			</a>
		</div>
	</SectionWrapper>
</div>
