<script lang="ts">
	import '$lib/app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Mein Portfolio</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
