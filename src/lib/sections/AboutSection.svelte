<script lang="ts">
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
</script>

<SectionWrapper className="py-24">
	<div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
		<!-- Textbereich -->
		<div>
			<h2 class="text-fg text-3xl font-bold sm:text-4xl md:text-5xl">lorem ipsum über mich</h2>
			<p class="text-muted mt-6 text-lg leading-relaxed">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et
				dapibus lacus. Lorem ipsum dolor sit amet.
			</p>
			<p class="text-muted mt-4 text-base leading-relaxed">
				Integer feugiat, orci nec commodo ultricies, augue dui cursus erat, at tincidunt lorem lacus
				at nulla. Aenean euismod semper justo.
			</p>
			<div class="mt-8">
				<a
					href="#contact"
					class="bg-accent inline-block rounded-xl px-6 py-3 text-white transition hover:opacity-90"
				>
					Jetzt Kontakt aufnehmen
				</a>
			</div>
		</div>

		<!-- Bild oder Platzhalter -->
		<div class="flex justify-center">
			<div class="bg-muted aspect-[4/3] w-full max-w-md rounded-2xl"></div>
		</div>
	</div>
</SectionWrapper>
