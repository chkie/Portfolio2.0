<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { getText } from '$lib/i18n/getText';

	const navigation = getText('layout', 'navigation');
</script>

<Header {navigation} />

<main>
	<slot />
</main>

<Footer />
