<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import { getText } from '$lib/i18n/getText';

	const headline = getText('hero', 'headline');
	const subline = getText('hero', 'subline');
	const cta = getText('hero', 'cta');
</script>

<div class="relative overflow-hidden bg-gradient-to-br from-bg via-highlight to-accent/30">
       <SectionWrapper className="py-32 text-center">
               <h1 class="text-hero-headline text-5xl font-bold sm:text-6xl md:text-7xl tracking-tight">
			{$headline}
		</h1>
		<p class="text-hero-subline mx-auto mt-6 max-w-xl text-lg">
			{$subline}
		</p>
               <div class="mt-10">
                       <a
                               href="#contact"
                               class="bg-accent hover:bg-accent/90 inline-block rounded-xl px-8 py-4 text-white shadow-lg transition-transform hover:scale-105"
                       >
				{$cta}
			</a>
		</div>
	</SectionWrapper>
</div>
