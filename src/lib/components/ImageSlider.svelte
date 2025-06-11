<script lang="ts">
	import { onMount } from 'svelte';
	import KeenSlider from 'keen-slider';
	import 'keen-slider/keen-slider.min.css';

	let slider: any;
	let interval: ReturnType<typeof setInterval>;

	const images = [
		{
			src: '/images/hero1.jpg',
			alt: 'Abstrakte Darstellung von Datenübertragung zwischen zwei digitalen Würfelstrukturen auf blauem Hintergrund'
		},
		{
			src: '/images/hero2.jpg',
			alt: 'Finger eines Geschäftsmanns berührt ein digitales Interface mit Code-Symbol und vernetzten Datenpunkten auf Weltkarte'
		},
		{
			src: '/images/hero3.jpg',
			alt: 'Futuristische Visualisierung von Webentwicklung mit Laptop, Smartphone und bunten Code- und Interface-Elementen im Neonstil'
		}
	];

	onMount(() => {
		slider = new KeenSlider('#slider', {
			loop: true,
			slides: { perView: 1 },
			created() {
				startAutoplay();
			}
		});
	});

	function startAutoplay() {
		interval = setInterval(() => {
			slider.next();
		}, 4000);
	}

	function stopAutoplay() {
		clearInterval(interval);
	}
</script>

<!-- Wrapper mit group für Hover-Verhalten -->
<div
	role="group"
	class="group relative w-full"
	on:mouseenter={stopAutoplay}
	on:mouseleave={startAutoplay}
>
	<!-- Slider-Bereich -->
	<div id="slider" class="keen-slider">
		{#each images as img}
			<div class="keen-slider__slide w-full">
				<img
					src={img.src}
					alt={img.alt}
					loading="lazy"
					class="max-h-[90vh] w-full object-cover sm:max-h-[85vh] md:max-h-[75vh]"
				/>
			</div>
		{/each}
	</div>

	<!-- Pfeil-Navigation: sauber getrennt vom Textblock -->
	<div
		class="pointer-events-none absolute top-1/2 left-0 z-20 flex w-full -translate-y-1/2 justify-between px-4"
	>
		<button
			class="pointer-events-auto rounded-full bg-black/80 px-3 py-2 text-xl text-white hover:bg-black"
			on:click={() => slider.prev()}
		>
			&larr;
		</button>
		<button
			class="pointer-events-auto rounded-full bg-black/80 px-3 py-2 text-xl text-white hover:bg-black"
			on:click={() => slider.next()}
		>
			&rarr;
		</button>
	</div>

	<!-- Pagination Punkte -->
	<div class="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
		{#each images as _, i}
			<div
				class="h-2 w-2 rounded-full bg-white/60"
				class:opacity-100={slider?.track.details.rel === i}
			></div>
		{/each}
	</div>
</div>
