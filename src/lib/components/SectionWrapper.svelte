<script lang="ts">
	export let className = '';
</script>

<section class={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 ${className}`}>
	<slot />
</section>
