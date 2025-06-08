<script lang="ts">
	import '../app.css';

	import Layout from '$lib/components/Layout.svelte';

	export let data: {
		title: string;
		description: string;
	};
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="utf-8" />
</svelte:head>

<Layout>
	<slot />
</Layout>
