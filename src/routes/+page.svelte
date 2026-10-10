<script lang="ts">
	import { onMount } from 'svelte';
	import { content, contact } from '$lib/config.js';

	type Lang = 'en' | 'id';
	let lang = $state<Lang>('en');
	const c = $derived(content[lang]);
	const ui = $derived(c.ui);
	const hero = $derived(c.hero);
	const about = $derived(c.about);
	const roles = $derived(c.roles);
	const work = $derived(c.work);
	const principles = $derived(c.principles);
	const stats = $derived(c.stats);
	const experience = $derived(c.experience);
	const education = $derived(c.education);
	const year = new Date().getFullYear();

	let menuOpen = $state(false);
	let theme = $state<'light' | 'dark'>('light');

	onMount(() => {
		document.addEventListener('click', handleAnchorClick);
		theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
		// bahasa: pilihan tersimpan > bahasa browser (id -> Indonesia)
		let saved: string | null = null;
		try {
			saved = localStorage.getItem('xev-lang');
		} catch {
			/* storage diblokir */
		}
		if (saved === 'en' || saved === 'id') lang = saved;
		else if (navigator.language.toLowerCase().startsWith('id')) lang = 'id';
	});

	$effect(() => {
		document.documentElement.lang = lang;
	});

	function setLang(l: Lang) {
		lang = l;
		try {
			localStorage.setItem('xev-lang', l);
		} catch {
			/* abaikan */
		}
	}

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0d1013' : '#f3f6f7');
		try {
			localStorage.setItem('xev-theme', theme);
		} catch {
			/* storage diblokir: tema tetap berlaku sampai reload */
		}
	}
	let copied = $state(false);

	async function copyDiscord() {
		try {
			await navigator.clipboard.writeText(contact.discord);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			/* clipboard tidak tersedia: username tetap terlihat di tombol */
		}
	}

	const NAV = $derived([
		{ href: '#about', label: ui.nav.about },
		{ href: '#journey', label: ui.nav.journey },
		{ href: '#roles', label: ui.nav.roles },
		{ href: '#work', label: ui.nav.work },
		{ href: '#contact', label: ui.nav.contact }
	]);

	// Isi "terminal" di hero, dirangkai dari config.
	type TermLine = { cmd?: string; out?: string; href?: string; ok?: boolean };
	const TERM: TermLine[] = $derived.by(() => {
		const now = experience[0];
		const pad = Math.max(...roles.map((r) => r.node.length)) + 1;
		return [
			{ cmd: 'whoami' },
			{ out: `xev · ${now.role.toLowerCase()} @ ${now.org}` },
			{ cmd: 'cat stack.txt' },
			...roles.map((r) => ({ out: `${r.node.toLowerCase().padEnd(pad)}→ ${r.short}`, href: '#role-' + r.id })),
			{ cmd: 'uptime' },
			{ out: ui.termTagline, ok: true }
		];
	});

	// Link menu (#bagian) scroll halus tanpa menambah #hash ke URL.
	function handleAnchorClick(e: MouseEvent) {
		if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		const a = (e.target as Element | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
		if (!a) return;
		const id = a.getAttribute('href')!.slice(1);
		const target = id === 'top' || id === '' ? document.body : document.getElementById(id);
		if (!target) return;
		e.preventDefault();
		const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (target === document.body) window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
		else target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
		if (location.hash) history.replaceState(null, '', location.pathname + location.search);
	}
</script>

{#snippet icon(name: string)}
	<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		{#if name === 'fivem'}
			<rect x="3" y="7" width="18" height="11" rx="4" /><path d="M8 11v3M6.5 12.5h3M15.5 12h.01M17.5 13.5h.01" />
		{:else if name === 'web'}
			<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
		{:else if name === 'infra'}
			<rect x="4" y="4" width="16" height="6" rx="1.5" /><rect x="4" y="14" width="16" height="6" rx="1.5" /><path d="M8 7h.01M8 17h.01" />
		{:else if name === 'bots'}
			<rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 4v4M9.5 13h.01M14.5 13h.01M9.5 16h5" />
		{:else if name === 'arrow'}
			<path d="M5 12h14M13 6l6 6-6 6" />
		{:else if name === 'ext'}
			<path d="M7 17 17 7M9 7h8v8" />
		{:else if name === 'check'}
			<path d="m5 12.5 4.5 4.5L19 7.5" />
		{:else if name === 'mail'}
			<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" />
		{:else if name === 'discord'}
			<path d="M8 7.5c2.6-.9 5.4-.9 8 0M7.5 16.5c2.9 1 6.1 1 9 0M8.6 7.3 7 5.5c-1.4.4-2.6 1-3.6 1.8C2 11 1.6 14.6 2 18.2c1.3 1 2.7 1.7 4.3 2.2l1.2-2M15.4 7.3 17 5.5c1.4.4 2.6 1 3.6 1.8 1.4 3.7 1.8 7.3 1.4 10.9-1.3 1-2.7 1.7-4.3 2.2l-1.2-2" /><circle cx="9" cy="13" r="1.2" /><circle cx="15" cy="13" r="1.2" />
		{:else if name === 'sun'}
			<circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
		{:else if name === 'moon'}
			<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
		{:else if name === 'github'}
			<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
		{/if}
	</svg>
{/snippet}

<svelte:head>
	<title>{c.seo.title}</title>
	<meta name="description" content={c.seo.description} />
	<meta property="og:title" content={c.seo.title} />
	<meta property="og:description" content={c.seo.description} />
	<meta name="twitter:title" content={c.seo.title} />
	<meta name="twitter:description" content={c.seo.description} />
</svelte:head>

<!-- ================= NAV ================= -->
<header class="nav">
	<div class="container nav-inner">
		<a href="#top" class="brand" aria-label="Xev, back to top">
			<span class="brand-logo"><img src="/logo.png" alt="" width="34" height="34" /></span>
			<span class="brand-name">xev<span class="caret">_</span></span>
		</a>
		<nav class="links" aria-label="Main">
			{#each NAV as l}<a href={l.href}>{l.label}</a>{/each}
		</nav>
		<div class="lang" role="group" aria-label="Language">
			<button class:on={lang === 'id'} aria-pressed={lang === 'id'} onclick={() => setLang('id')}>ID</button>
			<button class:on={lang === 'en'} aria-pressed={lang === 'en'} onclick={() => setLang('en')}>EN</button>
		</div>
		<button class="theme-btn" onclick={toggleTheme} aria-label={theme === 'dark' ? ui.themeLight : ui.themeDark} title={theme === 'dark' ? ui.themeLight : ui.themeDark}>
			{@render icon(theme === 'dark' ? 'sun' : 'moon')}
		</button>
		<a class="btn btn-ink nav-cta" href="#contact">{ui.nav.cta}</a>
		<button class="burger" aria-label="Menu" aria-expanded={menuOpen} onclick={() => (menuOpen = !menuOpen)}>
			<span></span><span></span>
		</button>
	</div>
	{#if menuOpen}
		<nav class="mobile container" aria-label="Mobile">
			{#each NAV as l}<a href={l.href} onclick={() => (menuOpen = false)}>{l.label}</a>{/each}
		</nav>
	{/if}
</header>

<main id="top">
	<!-- ================= HERO ================= -->
	<section class="hero">
		<div class="container hero-grid">
			<div>
				<span class="label">{ui.heroLabel}</span>
				<h1>
					<span>{hero.lines[0]}</span>
					<span class="h1-2"><span class="mark">{hero.lines[1]}</span></span>
				</h1>
				<p class="lead">{hero.intro}</p>
				<div class="hero-actions">
					<a class="btn btn-cyan" href="#work">{ui.seeWork} {@render icon('arrow')}</a>
					<a class="btn" href="#contact">{ui.talk}</a>
				</div>
				<ul class="badges">
					{#each hero.badges as b}<li class="chip">{b}</li>{/each}
				</ul>
			</div>

			<div class="term" role="img" aria-label="Terminal: whoami, stack and uptime">
				<div class="term-bar">
					<span class="tdot r"></span><span class="tdot y"></span><span class="tdot g"></span>
					<span class="term-title">xev@server: ~</span>
				</div>
				<div class="term-body">
					{#each TERM as line}
						{#if line.cmd}
							<div class="tl"><span class="prompt">$</span> {line.cmd}</div>
						{:else if line.href}
							<a class="tl out link" href={line.href}>{line.out}</a>
						{:else}
							<div class="tl out" class:ok={line.ok}>{line.out}</div>
						{/if}
					{/each}
					<div class="tl"><span class="prompt">$</span> <span class="cursor"></span></div>
				</div>
			</div>
		</div>

		<div class="container">
			<dl class="stats">
				{#each stats as s}
					<div class="box stat"><dd>{s.value}</dd><dt>{s.label}</dt></div>
				{/each}
			</dl>
		</div>
	</section>

	<!-- ================= ABOUT ================= -->
	<section class="section" id="about">
		<div class="container about">
			<div>
				<span class="label">{about.eyebrow}</span>
				<h2 class="section-title">{about.title}</h2>
			</div>
			<div class="about-text">
				{#each about.paragraphs as p}<p>{p}</p>{/each}
				<a class="more" href="#roles">{ui.seeRoles} {@render icon('arrow')}</a>
			</div>
		</div>
	</section>

	<!-- ================= JOURNEY ================= -->
	<section class="section" id="journey">
		<div class="container">
			<span class="label">{ui.journeyLabel}</span>
			<h2 class="section-title">{ui.journeyTitle}</h2>
			<div class="journey">
				{#each [{ title: ui.experience, items: experience }, { title: ui.education, items: education }] as col}
					<div class="box jcol">
						<div class="jhead"><span class="chip">{col.title}</span></div>
						<ol>
							{#each col.items as it}
								<li>
									<div class="jtop">
										<h3>{it.role}</h3>
										{#if it.period}<span class="now">● {it.period}</span>{/if}
									</div>
									{#if it.href}
										<a class="org" href={it.href} target="_blank" rel="noopener">{it.org} {@render icon('ext')}</a>
									{:else}
										<div class="org">{it.org}</div>
									{/if}
									<p>{it.text}</p>
								</li>
							{/each}
						</ol>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ================= ROLES ================= -->
	<section class="section" id="roles">
		<div class="container">
			<span class="label">{ui.rolesLabel}</span>
			<h2 class="section-title">{ui.rolesTitle[0]} <span class="mark">{ui.rolesTitle[1]}</span></h2>
			<div class="role-grid">
				{#each roles as r, i}
					<article class="box role" id={'role-' + r.id}>
						<div class="role-top">
							<span class="role-ic">{@render icon(r.id)}</span>
							<span class="role-n">0{i + 1}</span>
						</div>
						<h3>{r.title}</h3>
						<p>{r.text}</p>
						<ul>
							{#each r.points as pt}<li>{@render icon('check')}{pt}</li>{/each}
						</ul>
						<a
							class="role-cta"
							href={r.cta.href}
							target={r.cta.external ? '_blank' : undefined}
							rel={r.cta.external ? 'noopener' : undefined}
						>{r.cta.label} {@render icon(r.cta.external ? 'ext' : 'arrow')}</a>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- ================= WORK ================= -->
	<section class="section" id="work">
		<div class="container">
			<span class="label">{ui.workLabel}</span>
			<h2 class="section-title">{ui.workTitle}</h2>
			<div class="work-grid">
				{#each work as w, i}
					<article class="box work" class:alt={i % 2 === 1}>
						<div class="work-head">
							<div>
								<h3>{w.name}</h3>
								<div class="kind">{w.kind}</div>
							</div>
							{#if w.note}<span class="chip">{w.note}</span>{/if}
						</div>
						<p>{w.text}</p>
						<ul>
							{#each w.points as pt}<li>{@render icon('check')}{pt}</li>{/each}
						</ul>
						<div class="tags">{#each w.tags as t}<span class="chip">{t}</span>{/each}</div>
						{#if w.links.length}
							<div class="work-links">
								{#each w.links as l}
									<a href={l.href} target="_blank" rel="noopener">{l.label} {@render icon('ext')}</a>
								{/each}
							</div>
						{/if}
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- ================= PRINCIPLES ================= -->
	<section class="section" id="principles">
		<div class="container">
			<span class="label">{ui.principlesLabel}</span>
			<h2 class="section-title">{ui.principlesTitle}</h2>
			<ol class="principles">
				{#each principles as p, i}
					<li>
						<span class="pn">{String(i + 1).padStart(2, '0')}</span>
						<div>
							<h3>{p.title}</h3>
							<p>{p.text}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- ================= CONTACT ================= -->
	<section class="section" id="contact">
		<div class="container">
			<div class="cta">
				<span class="label dark">{ui.contactLabel}</span>
				<h2>{ui.contactTitle}</h2>
				<p>{ui.contactText}</p>
				<div class="cta-actions">
					<a class="btn btn-ink" href={'mailto:' + contact.email}>{@render icon('mail')} {contact.email}</a>
					<button class="btn" onclick={copyDiscord} aria-live="polite">
						{@render icon('discord')} {copied ? ui.copied : contact.discord}
					</button>
					<a class="btn" href={contact.github} target="_blank" rel="noopener">{@render icon('github')} GitHub</a>
				</div>
				<p class="cta-foot">{ui.copyHint}</p>
			</div>
		</div>
	</section>
</main>

<footer class="footer">
	<div class="container foot">
		<span class="brand-name">xev<span class="caret">_</span></span>
		<span>{hero.lines.join(' ')}</span>
		<span class="foot-right">© {year} Xev · {ui.footer}</span>
	</div>
</footer>

<style>
	/* ---------- nav ---------- */
	.nav {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--nav-bg);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--soft-line);
	}
	.nav-inner {
		display: flex;
		align-items: center;
		gap: 24px;
		height: 68px;
	}
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
	}
	.brand-logo {
		width: 36px;
		height: 36px;
		border: var(--bw) solid var(--line);
		border-radius: 12px;
		overflow: hidden;
		background: #000;
		box-shadow: 2px 3px 0 var(--shadow-c);
	}
	.brand-logo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1.55) translateY(-6%);
	}
	.brand-name {
		font-family: var(--mono);
		font-weight: 700;
		font-size: 18px;
		color: var(--ink);
	}
	.caret {
		color: var(--cyan);
		animation: blink 1.1s steps(1) infinite;
	}
	.links {
		display: flex;
		gap: 2px;
		margin-left: auto;
	}
	.links a {
		padding: 7px 12px;
		border-radius: 6px;
		font-weight: 500;
		font-size: 15px;
		color: var(--ink-2);
	}
	.links a:hover {
		color: var(--ink);
		background: var(--cyan-soft);
	}
	.nav-cta {
		padding: 9px 16px;
		font-size: 14px;
		box-shadow: 3px 3px 0 var(--cyan);
	}
	.nav-cta:hover {
		box-shadow: 5px 5px 0 var(--cyan);
	}
	.lang {
		display: inline-flex;
		border: var(--bw) solid var(--line);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 2px 3px 0 var(--shadow-c);
	}
	.lang button {
		border: 0;
		background: var(--paper);
		color: var(--ink-3);
		font: 700 12px/1 var(--mono);
		padding: 0 10px;
		height: 36px;
		cursor: pointer;
	}
	.lang button.on {
		background: var(--ink);
		color: var(--on-ink);
	}
	.theme-btn {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		border: var(--bw) solid var(--line);
		border-radius: 12px;
		background: var(--paper);
		color: var(--ink);
		box-shadow: 2px 3px 0 var(--shadow-c);
		cursor: pointer;
		transition: transform 0.12s ease;
	}
	.theme-btn:hover {
		transform: translate(-1px, -1px);
	}
	.burger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 42px;
		height: 40px;
		padding: 0 10px;
		border: var(--bw) solid var(--line);
		border-radius: 12px;
		background: var(--paper);
		box-shadow: 2px 3px 0 var(--shadow-c);
		cursor: pointer;
	}
	.burger span {
		height: 2px;
		background: var(--ink);
	}
	.mobile {
		display: flex;
		flex-direction: column;
		padding-bottom: 12px;
	}
	.mobile a {
		padding: 12px 0;
		border-top: 1.5px solid var(--soft-line);
		font-weight: 600;
		color: var(--ink);
	}

	/* ---------- hero ---------- */
	.hero {
		padding: 80px 0 40px;
	}
	.hero-grid {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 56px;
		align-items: center;
	}
	h1 {
		margin-top: 18px;
		font-size: clamp(44px, 6.4vw, 80px);
		font-weight: 700;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.h1-2 {
		font-size: 0.62em;
		letter-spacing: -0.025em;
		line-height: 1.15;
	}
	.lead {
		margin-top: 24px;
		max-width: 520px;
		font-size: 18px;
	}
	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 30px;
	}
	.badges {
		list-style: none;
		padding: 0;
		margin: 32px 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	/* terminal */
	.term {
		background: var(--term);
		border: var(--bw) solid var(--line);
		border-radius: 18px;
		box-shadow: 8px 10px 0 var(--cyan);
		overflow: hidden;
		font-family: var(--mono);
		font-size: 14px;
	}
	.term-bar {
		display: flex;
		align-items: center;
		gap: 7px;
		padding: 11px 14px;
		background: #161b22;
		border-bottom: 1px solid #262d36;
	}
	.tdot {
		width: 11px;
		height: 11px;
		border-radius: 50%;
	}
	.tdot.r {
		background: #ff5f57;
	}
	.tdot.y {
		background: #febc2e;
	}
	.tdot.g {
		background: #28c840;
	}
	.term-title {
		margin-left: 8px;
		font-size: 12px;
		color: #7d8590;
	}
	.term-body {
		padding: 18px 20px 20px;
		color: #c9d1d9;
		line-height: 1.75;
		overflow-x: auto;
	}
	.tl {
		white-space: pre;
	}
	.prompt {
		color: #3ee8f0;
		font-weight: 700;
	}
	.out {
		display: block;
		color: #8b949e;
	}
	.out.link:hover {
		color: #fff;
	}
	.out.ok {
		color: #56d364;
	}
	.cursor {
		display: inline-block;
		width: 9px;
		height: 17px;
		background: #3ee8f0;
		vertical-align: -3px;
		animation: blink 1.1s steps(1) infinite;
	}
	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	/* stats */
	.stats {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 18px;
		margin: 64px 0 0;
	}
	.stat {
		margin: 0;
		padding: 20px 22px;
		display: flex;
		align-items: baseline;
		gap: 14px;
	}
	.stat dd {
		margin: 0;
		font-size: 38px;
		font-weight: 700;
		color: var(--ink);
		letter-spacing: -0.03em;
		line-height: 1;
	}
	.stat dt {
		font-family: var(--mono);
		font-size: 12.5px;
		color: var(--ink-3);
	}

	/* ---------- about ---------- */
	.about {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 56px;
	}
	.about-text p + p {
		margin-top: 18px;
	}
	.about-text p {
		font-size: 18px;
	}
	.more {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-top: 26px;
		font-weight: 600;
		color: var(--ink);
		border-bottom: 2px solid var(--cyan);
		padding-bottom: 2px;
	}

	/* ---------- journey ---------- */
	.journey {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
		margin-top: 40px;
	}
	.jcol {
		padding: 24px 26px 8px;
	}
	.jcol ol {
		list-style: none;
		padding: 0;
		margin: 18px 0 0;
	}
	.jcol li {
		padding: 18px 0;
		border-top: 1.5px dashed var(--soft-line);
	}
	.jtop {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		align-items: baseline;
	}
	.jtop h3 {
		font-size: 19px;
		letter-spacing: -0.015em;
	}
	.now {
		font-family: var(--mono);
		font-size: 12px;
		color: var(--ok);
		white-space: nowrap;
	}
	.org {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		margin-top: 4px;
		font-weight: 600;
		color: var(--cyan-ink);
	}
	.jcol p {
		margin-top: 6px;
		font-size: 15px;
	}

	/* ---------- roles ---------- */
	.role-grid,
	.work-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
		margin-top: 40px;
	}
	.role {
		padding: 26px;
		display: flex;
		flex-direction: column;
		transition:
			transform 0.12s ease,
			box-shadow 0.12s ease;
	}
	.role:hover {
		transform: translate(-2px, -2px);
		box-shadow: var(--shadow-lg);
	}
	.role-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.role-ic {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border: var(--bw) solid var(--line);
		border-radius: 12px;
		background: var(--cyan-soft);
		color: var(--ink);
	}
	.role-n {
		font-family: var(--mono);
		font-weight: 700;
		color: var(--soft-line);
		font-size: 28px;
	}
	.role h3 {
		margin-top: 18px;
		font-size: 22px;
	}
	.role > p {
		margin-top: 8px;
	}
	.role ul,
	.work ul {
		list-style: none;
		padding: 0;
		margin: 16px 0 22px;
		display: grid;
		gap: 8px;
		font-size: 15px;
	}
	.role li,
	.work li {
		display: flex;
		gap: 9px;
		align-items: flex-start;
	}
	.role li :global(svg),
	.work li :global(svg) {
		flex: none;
		margin-top: 3px;
		color: var(--cyan-ink);
	}
	.role-cta {
		margin-top: auto;
		align-self: flex-start;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-weight: 700;
		color: var(--ink);
		border-bottom: 2px solid var(--cyan);
	}
	.role-cta:hover {
		color: var(--cyan-ink);
		border-color: var(--cyan);
	}

	/* ---------- work ---------- */
	.work {
		padding: 28px;
	}
	.work.alt {
		background: var(--work-alt);
	}
	.work-head {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		align-items: flex-start;
	}
	.work h3 {
		font-family: var(--mono);
		font-size: 24px;
		letter-spacing: -0.02em;
	}
	.kind {
		margin-top: 4px;
		font-weight: 600;
		color: var(--cyan-ink);
	}
	.work > p {
		margin-top: 12px;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.work-links {
		display: flex;
		flex-wrap: wrap;
		gap: 18px;
		margin-top: 20px;
	}
	.work-links a {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-weight: 700;
		color: var(--ink);
		border-bottom: 2px solid var(--cyan);
	}

	/* ---------- principles ---------- */
	.principles {
		list-style: none;
		padding: 0;
		margin: 40px 0 0;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		border: var(--bw) solid var(--line);
		border-radius: var(--radius);
		background: var(--paper);
		box-shadow: var(--shadow);
		overflow: hidden;
	}
	.principles li {
		display: flex;
		gap: 18px;
		padding: 26px;
	}
	.principles li:nth-child(odd) {
		border-right: var(--bw) solid var(--line);
	}
	.principles li:nth-child(n + 3) {
		border-top: var(--bw) solid var(--line);
	}
	.pn {
		font-family: var(--mono);
		font-weight: 700;
		color: var(--cyan);
		font-size: 15px;
	}
	.principles h3 {
		font-size: 19px;
	}
	.principles p {
		margin-top: 6px;
		font-size: 15px;
	}

	/* ---------- contact ---------- */
	.cta {
		background: var(--cyan);
		border: var(--bw) solid var(--line);
		border-radius: 22px;
		box-shadow: 8px 10px 0 var(--shadow-c);
		padding: 56px 40px;
	}
	.label.dark {
		color: var(--on-cyan);
	}
	.label.dark::before {
		color: var(--on-cyan);
	}
	.cta-foot {
		color: var(--on-cyan);
	}
	.cta h2 {
		color: var(--on-cyan);
		margin-top: 12px;
		font-size: clamp(34px, 5.2vw, 60px);
		font-weight: 700;
	}
	.cta > p {
		margin-top: 14px;
		max-width: 540px;
		font-size: 18px;
		color: var(--on-cyan);
	}
	.cta-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 30px;
	}
	.cta-foot {
		margin-top: 18px !important;
		font-family: var(--mono);
		font-size: 12.5px;
	}

	/* ---------- footer ---------- */
	.footer {
		border-top: var(--bw) solid var(--line);
		background: var(--paper);
		padding: 26px 0;
	}
	.foot {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px 22px;
		font-size: 14px;
	}
	.foot-right {
		margin-left: auto;
		font-family: var(--mono);
		font-size: 12.5px;
		color: var(--ink-3);
	}

	/* ---------- responsive ---------- */
	@media (max-width: 960px) {
		.hero-grid,
		.about {
			grid-template-columns: 1fr;
			gap: 40px;
		}
	}
	@media (max-width: 820px) {
		.links,
		.nav-cta {
			display: none;
		}
		.burger {
			display: flex;
		}
		.lang {
			margin-left: auto;
		}
		.journey,
		.role-grid,
		.work-grid,
		.principles {
			grid-template-columns: 1fr;
		}
		.principles li:nth-child(odd) {
			border-right: 0;
		}
		.principles li:nth-child(n + 2) {
			border-top: var(--bw) solid var(--line);
		}
	}
	@media (max-width: 560px) {
		.hero {
			padding: 52px 0 24px;
		}
		.term {
			font-size: 12.5px;
			box-shadow: 5px 5px 0 var(--cyan);
		}
		.tl {
			white-space: pre-wrap;
			word-break: break-word;
		}
		.stats {
			grid-template-columns: 1fr;
			gap: 14px;
		}
		.role,
		.work,
		.jcol {
			padding: 22px 18px;
		}
		.cta {
			padding: 40px 20px;
			box-shadow: 5px 6px 0 var(--shadow-c);
		}
		.foot-right {
			margin-left: 0;
		}
	}
</style>
