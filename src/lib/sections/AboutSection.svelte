<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import { getText } from '$lib/i18n/getText';

	const headline = getText('about', 'headline');
	const text = getText('about', 'text');
</script>

<div class="bg-white">
       <SectionWrapper className="py-24 md:grid md:grid-cols-2 md:items-center md:gap-8">
               <div class="mx-auto mb-8 h-40 w-40 rounded-full bg-gradient-to-tr from-highlight to-accent/40 md:mb-0" />
               <div class="text-center md:text-left">
                       <h2 class="text-3xl font-bold text-fg">{$headline}</h2>
                       <p class="mt-4 text-lg text-muted">{$text}</p>
               </div>
       </SectionWrapper>
</div>
