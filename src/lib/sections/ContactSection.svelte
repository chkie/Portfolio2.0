<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import { getText } from '$lib/i18n/getText';

	const headline = getText('contact', 'headline');
	const description = getText('contact', 'description');
	const button = getText('contact', 'button');
</script>

<div class="bg-white">
       <SectionWrapper className="py-24 text-center">
               <h2 class="text-3xl font-bold text-fg">{$headline}</h2>
               <p class="mt-4 text-muted">{$description}</p>
               <button class="mt-6 rounded-lg bg-accent px-6 py-3 text-white transition-transform hover:scale-105 hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-accent">
                       {$button}
               </button>
       </SectionWrapper>
</div>
