<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import { texts } from '$lib/i18n/text';
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';

	// automatische Reaktivität durch $lang
	$: t = texts.hero[$lang];
</script>

<div class="relative overflow-hidden bg-white">
	<SectionWrapper className="py-24 text-center">
		<h1 class="text-hero-headline text-4xl font-bold sm:text-5xl md:text-6xl">
			{t.headline}
		</h1>
		<p class="text-hero-subline mx-auto mt-6 max-w-xl text-lg">
			{t.subline}
		</p>
		<div class="mt-10">
			<a
				href="#contact"
				class="bg-accent hover:bg-accent/90 inline-block rounded-xl px-6 py-3 text-white transition-colors"
			>
				{t.cta}
			</a>
		</div>
	</SectionWrapper>
</div>
