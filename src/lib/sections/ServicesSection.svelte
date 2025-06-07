<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
</script>

<SectionWrapper className="py-24">
	<h2 class="text-fg text-center text-3xl font-bold sm:text-4xl md:text-5xl">
		lorem ipsum services
	</h2>
	<p class="text-muted mx-auto mt-4 max-w-2xl text-center text-lg">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
	</p>

	<div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
		<!-- Service 1 -->
		<div class="border-border rounded-2xl border bg-white p-6 shadow-sm">
			<h3 class="text-fg text-xl font-semibold">Shopify Theme-Anpassung</h3>
			<p class="text-muted mt-2 text-sm">
				Performance-optimierte Shopify-Anpassungen für Design und Funktionalität ohne Overhead.
			</p>
		</div>

		<!-- Service 2 -->
		<div class="border-border rounded-2xl border bg-white p-6 shadow-sm">
			<h3 class="text-fg text-xl font-semibold">SvelteKit Landingpages</h3>
			<p class="text-muted mt-2 text-sm">
				Schnelle, moderne Onepager und Microsites mit Fokus auf Ladezeit, UX und Klarheit.
			</p>
		</div>

		<!-- Service 3 -->
		<div class="border-border rounded-2xl border bg-white p-6 shadow-sm">
			<h3 class="text-fg text-xl font-semibold">Frontend-Bausteine & Prototyping</h3>
			<p class="text-muted mt-2 text-sm">
				Tailwind-kompatible UI-Komponenten oder interaktive Prototypen für agile Teams.
			</p>
		</div>
	</div>
</SectionWrapper>
