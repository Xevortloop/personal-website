<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="theme-color" content="#f3f6f7" />

	<meta property="og:type" content="website" />
	<meta property="og:image" content="/logo.png" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:image" content="/logo.png" />

	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

{@render children()}
