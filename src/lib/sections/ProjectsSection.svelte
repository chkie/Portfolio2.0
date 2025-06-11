<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import { getText } from '$lib/i18n/getText';
	import type { ProjectItem } from '$lib/i18n/texts/projects';
	import type { Readable } from 'svelte/store';

	const headline = getText('projects', 'headline');
	const items: Readable<ProjectItem[]> = getText('projects', 'items');
</script>

<div class="bg-gray-100">
       <SectionWrapper className="py-24 text-center">
               <h2 class="text-3xl font-bold text-fg">{$headline}</h2>

               <div class="mt-8 grid gap-8 md:grid-cols-2">
			{#each $items as item (item.title)}
                               <div class="rounded-xl bg-white p-6 text-left shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
					<h3 class="text-xl font-semibold text-gray-800">{item.title}</h3>
					<p class="mt-2 text-gray-600">{item.description}</p>
				</div>
			{/each}
		</div>
	</SectionWrapper>
</div>
