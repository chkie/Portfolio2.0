<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
</script>

<SectionWrapper className="py-24">
	<h2 class="text-fg text-center text-3xl font-bold sm:text-4xl md:text-5xl">Skills</h2>
	<p class="text-muted mx-auto mt-4 max-w-2xl text-center text-lg">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
	</p>

       <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
		<!-- Tech Skills -->
               <div class="border-border rounded-2xl border bg-white p-6 shadow-sm transition-transform hover:scale-105">
			<h3 class="text-fg text-xl font-semibold">SvelteKit</h3>
			<p class="text-muted mt-2 text-sm">Modernes Webframework mit Fokus auf Performance & DX.</p>
		</div>
               <div class="border-border rounded-2xl border bg-white p-6 shadow-sm transition-transform hover:scale-105">
			<h3 class="text-fg text-xl font-semibold">Tailwind CSS</h3>
			<p class="text-muted mt-2 text-sm">
				Utility-first CSS für perfekte Kontrolle und Skalierung.
			</p>
		</div>
               <div class="border-border rounded-2xl border bg-white p-6 shadow-sm transition-transform hover:scale-105">
			<h3 class="text-fg text-xl font-semibold">Shopify (Theme)</h3>
			<p class="text-muted mt-2 text-sm">Theme-Anpassung & Performance für E-Commerce-Projekte.</p>
		</div>

		<!-- Soft Skills -->
               <div class="border-border rounded-2xl border bg-white p-6 shadow-sm transition-transform hover:scale-105">
			<h3 class="text-fg text-xl font-semibold">Technisches Denken</h3>
			<p class="text-muted mt-2 text-sm">Ich erkenne Muster, baue stabil und denke in Modulen.</p>
		</div>
               <div class="border-border rounded-2xl border bg-white p-6 shadow-sm transition-transform hover:scale-105">
			<h3 class="text-fg text-xl font-semibold">Klarheit & Struktur</h3>
			<p class="text-muted mt-2 text-sm">
				Keine Effekthascherei – der Code bleibt lesbar und wartbar.
			</p>
		</div>
               <div class="border-border rounded-2xl border bg-white p-6 shadow-sm transition-transform hover:scale-105">
			<h3 class="text-fg text-xl font-semibold">Verlässlichkeit</h3>
			<p class="text-muted mt-2 text-sm">Ich halte Timings ein und arbeite lösungsorientiert.</p>
		</div>
	</div>
</SectionWrapper>
