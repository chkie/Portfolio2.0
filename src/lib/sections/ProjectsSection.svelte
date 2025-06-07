<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
</script>

<SectionWrapper className="py-24">
	<h2 class="text-fg text-center text-3xl font-bold sm:text-4xl md:text-5xl">
		lorem ipsum projekte
	</h2>
	<p class="text-muted mx-auto mt-4 max-w-2xl text-center text-lg">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
	</p>

	<div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
		<!-- Projekt 1 -->
		<div class="border-border overflow-hidden rounded-2xl border bg-white shadow-sm">
			<div class="bg-muted h-48"></div>
			<!-- Platzhalter für Vorschaubild -->
			<div class="p-6">
				<h3 class="text-fg text-xl font-semibold">Projektname A</h3>
				<p class="text-muted mt-2 text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
				</p>
			</div>
		</div>

		<!-- Projekt 2 -->
		<div class="border-border overflow-hidden rounded-2xl border bg-white shadow-sm">
			<div class="bg-muted h-48"></div>
			<div class="p-6">
				<h3 class="text-fg text-xl font-semibold">Projektname B</h3>
				<p class="text-muted mt-2 text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
				</p>
			</div>
		</div>

		<!-- Projekt 3 -->
		<div class="border-border overflow-hidden rounded-2xl border bg-white shadow-sm">
			<div class="bg-muted h-48"></div>
			<div class="p-6">
				<h3 class="text-fg text-xl font-semibold">Projektname C</h3>
				<p class="text-muted mt-2 text-sm">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
				</p>
			</div>
		</div>
	</div>
</SectionWrapper>
