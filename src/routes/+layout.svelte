<script lang="ts">
	import '../app.css';
	import { config } from '$lib/config.js';

	let { children } = $props();
</script>

<svelte:head>
	<title>{config.seo.title}</title>
	<meta name="description" content={config.seo.description} />
	<meta name="keywords" content={config.seo.keywords} />
	
	<!-- Open Graph / Social Media -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={config.seo.title} />
	<meta property="og:description" content={config.seo.description} />
	<meta property="og:image" content={config.seo.ogImage} />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={config.seo.title} />
	<meta name="twitter:description" content={config.seo.description} />
	<meta name="twitter:image" content={config.seo.ogImage} />
	
	<!-- Favicon -->
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

{@render children()}
