<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
</script>

<SectionWrapper className="py-24 text-center">
	<h2 class="text-fg text-3xl font-bold sm:text-4xl md:text-5xl">Kontakt aufnehmen</h2>
	<p class="text-muted mx-auto mt-4 max-w-xl text-lg">
		Hast du ein Projekt oder brauchst Unterstützung im Frontend? Schreib mir eine kurze Nachricht –
		ich melde mich schnellstmöglich zurück.
	</p>

	<div class="mt-10 space-y-4">
		<a
			href="mailto:deine@mailadresse.de"
			class="bg-accent inline-block rounded-xl px-6 py-3 text-white transition hover:opacity-90"
		>
			Jetzt Projekt anfragen
		</a>
		<p class="text-muted text-sm">Oder direkt per Mail: deine@mailadresse.de</p>
	</div>
</SectionWrapper>
