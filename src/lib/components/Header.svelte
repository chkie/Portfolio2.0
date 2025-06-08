<script lang="ts">
	import { page } from '$app/stores';

	import { lang } from '$lib/stores/lang';
	import { getText } from '$lib/i18n/getText';

	const navigation = getText('layout', 'navigation');
	const setLang = (value: 'de' | 'en') => lang.set(value);
</script>

<header class="border-border w-full border-b bg-white">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a href="/" class="text-fg hover:text-accent text-xl font-semibold transition-colors">
				MeinPortfolio
			</a>

			<!-- Navigation -->
			<nav class="hidden space-x-6 md:flex">
				{#if $navigation}
					<a
						href="/"
						class={`text-muted hover:text-fg transition-colors ${
							$page.url.pathname === '/' ? 'text-fg font-semibold' : ''
						}`}
					>
						{$navigation[0]}
					</a>
					<a
						href="/about"
						class={`text-muted hover:text-fg transition-colors ${
							$page.url.pathname === '/about' ? 'text-fg font-semibold' : ''
						}`}
					>
						{$navigation[1]}
					</a>
					<a
						href="/projects"
						class={`text-muted hover:text-fg transition-colors ${
							$page.url.pathname === '/projects' ? 'text-fg font-semibold' : ''
						}`}
					>
						{$navigation[2]}
					</a>
					<a
						href="/services"
						class={`text-muted hover:text-fg transition-colors ${
							$page.url.pathname === '/services' ? 'text-fg font-semibold' : ''
						}`}
					>
						{$navigation[3]}
					</a>
					<a
						href="/contact"
						class={`text-muted hover:text-fg transition-colors ${
							$page.url.pathname === '/contact' ? 'text-fg font-semibold' : ''
						}`}
					>
						{$navigation[4]}
					</a>
				{/if}
			</nav>

			<!-- Language Switch -->
			<div class="flex items-center space-x-3">
				<button
					on:click={() => setLang('de')}
					class="text-muted hover:text-fg text-sm transition-colors"
				>
					DE
				</button>
				<span class="text-muted">|</span>
				<button
					on:click={() => setLang('en')}
					class="text-muted hover:text-fg text-sm transition-colors"
				>
					EN
				</button>
			</div>
		</div>
	</div>
</header>
