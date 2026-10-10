// Isi portfolio dalam dua bahasa (en & id). Edit teks di sini; tampilan ada di src/routes/+page.svelte.

export const contact = {
	email: 'xevortloop@gmail.com',
	discord: '@xevort_',
	github: 'https://github.com/Xevortloop'
};

const NOCTIS = 'https://noctis.id/';
const FIVEM_LISTING = 'https://servers.fivem.net/servers/detail/8r5lp3';

const en = {
	seo: {
		title: 'Xev: FiveM, Web, Infra & Bots Developer',
		description:
			'Xev is head developer at Noctis: FiveM scripts, full-stack web apps, self-hosted infrastructure and chat bots, built and run end to end.'
	},
	ui: {
		nav: { about: 'About', journey: 'Journey', roles: 'What I do', work: 'Work', contact: 'Contact', cta: "Let's talk" },
		heroLabel: '~/xev · developer',
		seeWork: 'See my work',
		talk: 'Talk to me',
		journeyLabel: 'journey',
		journeyTitle: "Where I've worked & studied",
		experience: 'experience',
		education: 'education',
		seeRoles: 'See what I do',
		rolesLabel: 'what i do',
		rolesTitle: ['Four stacks,', 'one standard'],
		workLabel: 'selected work',
		workTitle: "Things I've built & run",
		principlesLabel: 'how i work',
		principlesTitle: 'Why work with me',
		contactLabel: 'start here',
		contactTitle: 'Tell me what you need.',
		contactText: "A FiveM script, a web app, a server or a bot: send a message and I'll take it from there.",
		copied: 'Copied!',
		copyHint: 'Click the Discord button to copy the username.',
		footer: 'built & self-hosted by me',
		themeLight: 'Light theme',
		themeDark: 'Dark theme',
		termTagline: 'up 24/7 · self-hosted · no middlemen'
	},
	hero: {
		lines: ["Hi, I'm Xev.", 'I build it, then I run it.'],
		intro: 'FiveM scripts, web apps, self-hosted infrastructure and bots. I design, build and run each of them myself, end to end.',
		badges: ['Head Developer at Noctis', 'Self-hosted, end to end', 'Direct contact, no middlemen']
	},
	stats: [
		{ value: '4', label: 'Areas of work' },
		{ value: '2', label: 'Roleplay servers' },
		{ value: '24/7', label: 'Self-hosted services' }
	],
	experience: [
		{ role: 'Head Developer', org: 'PT Noctis Interactive Entertainment', period: 'Now', text: 'Scripts, resources and gameplay systems for the Noctis FiveM roleplay server.', href: NOCTIS },
		{ role: 'Developer', org: 'Nusaindah Roleplay', period: '', text: 'FiveM development for the Nusaindah roleplay community.', href: '' }
	],
	education: [
		{ role: 'Information Technology', org: 'Universitas Sanata Dharma', period: 'Now', text: 'Undergraduate studies in IT, Yogyakarta.', href: '' },
		{ role: 'Computer & Network Engineering', org: 'SMK Negeri 2 Surakarta', period: '', text: 'Vocational high school, networking major.', href: '' }
	],
	about: {
		eyebrow: 'who i am',
		title: 'Head developer at Noctis, builder at home',
		paragraphs: [
			"I'm Xev, head developer at Noctis, working on the FiveM roleplay server: scripts, resources and the systems players touch every day.",
			'Outside of that I build and self-host my own tools: a deploy platform, web dashboards and chat bots, all running on hardware I manage. Same rule everywhere: do it properly and own the details.'
		]
	},
	roles: [
		{
			id: 'fivem', node: 'FiveM', short: 'Lua & NUI',
			title: 'FiveM Developer: gameplay & scripts',
			text: 'Custom scripts, resources and gameplay mechanics for GTA V roleplay.',
			points: ['Lua scripting for server and client resources', 'NUI interfaces built with web tech', 'Tuned for performance so the city keeps running smoothly'],
			cta: { label: 'Noctis Roleplay', href: NOCTIS, external: true }
		},
		{
			id: 'web', node: 'Web', short: 'Full-stack apps',
			title: 'Full-stack: web apps & dashboards',
			text: 'From database to UI: admin dashboards, internal tools and landing pages.',
			points: ['TypeScript, Node.js, Svelte, React & Next.js', 'PostgreSQL, MySQL and MongoDB', 'Auth, rate limiting and security headers by default'],
			cta: { label: 'Start a project', href: '#contact', external: false }
		},
		{
			id: 'infra', node: 'Infra', short: 'Self-hosting',
			title: 'Infra: self-hosting & deployment',
			text: 'I run my own servers: containers, tunnels and a deploy platform I wrote myself.',
			points: ['Docker, Linux and Cloudflare Tunnel', 'Git-push deploys with automatic subdomains', 'Backups, health checks and monitoring'],
			cta: { label: 'See xev-cloud', href: '#work', external: false }
		},
		{
			id: 'bots', node: 'Bots', short: 'Automation',
			title: 'Bots & automation: chat & workflows',
			text: 'Bots that answer, queue and route conversations, built to stay within platform limits.',
			points: ['WhatsApp, Telegram and Discord bots', 'Queues, rate limits and human handoff', 'Scheduled jobs and integrations'],
			cta: { label: 'Talk to me', href: '#contact', external: false }
		}
	],
	work: [
		{
			name: 'xev-cloud', kind: 'Self-hosted deploy platform',
			text: 'A small PaaS I wrote and run: upload a folder or push to Git, and the app goes live on its own subdomain.',
			points: ['Git push & webhook auto-deploy', 'Automatic subdomains across multiple domains', 'Per-project RAM & CPU limits', 'Live build logs and health checks'],
			tags: ['Python', 'FastAPI', 'Docker', 'Cloudflare Tunnel'],
			note: 'Private, invite-only', links: []
		},
		{
			name: 'Noctis Roleplay', kind: 'FiveM roleplay server · developer',
			text: "Development work on Noctis' GTA V roleplay server: scripts, resources and gameplay systems.",
			points: ['Server & client scripts in Lua', 'In-game interfaces (NUI)', 'Fixes and features shipped to a live server'],
			tags: ['Lua', 'FiveM', 'NUI'],
			note: '', links: [{ label: 'Server listing', href: FIVEM_LISTING }, { label: 'noctis.id', href: NOCTIS }]
		}
	],
	principles: [
		{ title: 'Own the details', text: 'I build, deploy and maintain what I make. No hand-offs, no "works on my machine".' },
		{ title: 'Safe by default', text: 'Auth, rate limits, backups and least privilege from day one, not as an afterthought.' },
		{ title: 'Built to run', text: 'Health checks, logs and monitoring, so problems show up before users notice.' },
		{ title: 'Direct contact', text: 'You talk to the person writing the code. Fast replies, clear answers.' }
	]
};

const id = {
	seo: {
		title: 'Xev: Developer FiveM, Web, Infra & Bot',
		description:
			'Xev adalah head developer di Noctis: script FiveM, aplikasi web full-stack, infrastruktur self-hosted, dan bot chat, dibangun dan dijalankan sendiri dari awal sampai akhir.'
	},
	ui: {
		nav: { about: 'Tentang', journey: 'Perjalanan', roles: 'Keahlian', work: 'Karya', contact: 'Kontak', cta: 'Hubungi saya' },
		heroLabel: '~/xev · developer',
		seeWork: 'Lihat karya',
		talk: 'Hubungi saya',
		journeyLabel: 'perjalanan',
		journeyTitle: 'Tempat saya bekerja & belajar',
		experience: 'pengalaman',
		education: 'pendidikan',
		seeRoles: 'Lihat keahlian saya',
		rolesLabel: 'keahlian',
		rolesTitle: ['Empat bidang,', 'satu standar'],
		workLabel: 'karya pilihan',
		workTitle: 'Yang saya bangun & jalankan',
		principlesLabel: 'cara kerja',
		principlesTitle: 'Kenapa bekerja dengan saya',
		contactLabel: 'mulai di sini',
		contactTitle: 'Ceritakan kebutuhan Anda.',
		contactText: 'Script FiveM, aplikasi web, server, atau bot: kirim pesan, sisanya saya urus.',
		copied: 'Tersalin!',
		copyHint: 'Klik tombol Discord untuk menyalin username.',
		footer: 'dibangun & di-host sendiri',
		themeLight: 'Tema terang',
		themeDark: 'Tema gelap',
		termTagline: 'aktif 24/7 · self-hosted · tanpa perantara'
	},
	hero: {
		lines: ['Halo, saya Xev.', 'Saya bangun, lalu saya jalankan.'],
		intro: 'Script FiveM, aplikasi web, infrastruktur self-hosted, dan bot. Saya merancang, membangun, dan menjalankan semuanya sendiri, dari awal sampai akhir.',
		badges: ['Head Developer di Noctis', 'Self-hosted, end to end', 'Kontak langsung, tanpa perantara']
	},
	stats: [
		{ value: '4', label: 'Bidang keahlian' },
		{ value: '2', label: 'Server roleplay' },
		{ value: '24/7', label: 'Layanan self-hosted' }
	],
	experience: [
		{ role: 'Head Developer', org: 'PT Noctis Interactive Entertainment', period: 'Sekarang', text: 'Script, resource, dan sistem gameplay untuk server roleplay FiveM Noctis.', href: NOCTIS },
		{ role: 'Developer', org: 'Nusaindah Roleplay', period: '', text: 'Pengembangan FiveM untuk komunitas roleplay Nusaindah.', href: '' }
	],
	education: [
		{ role: 'Teknologi Informasi', org: 'Universitas Sanata Dharma', period: 'Sekarang', text: 'Studi S1 bidang IT, Yogyakarta.', href: '' },
		{ role: 'Teknik Komputer & Jaringan', org: 'SMK Negeri 2 Surakarta', period: '', text: 'SMK jurusan jaringan.', href: '' }
	],
	about: {
		eyebrow: 'tentang saya',
		title: 'Head developer di Noctis, builder di rumah',
		paragraphs: [
			'Saya Xev, head developer di Noctis, mengerjakan server roleplay FiveM: script, resource, dan sistem yang dipakai pemain setiap hari.',
			'Di luar itu saya membangun dan meng-host sendiri tools saya: platform deploy, dashboard web, dan bot chat, semuanya berjalan di server yang saya kelola. Aturannya sama di mana pun: kerjakan dengan benar dan kuasai detailnya.'
		]
	},
	roles: [
		{
			id: 'fivem', node: 'FiveM', short: 'Lua & NUI',
			title: 'Developer FiveM: gameplay & script',
			text: 'Script, resource, dan mekanik gameplay custom untuk roleplay GTA V.',
			points: ['Scripting Lua untuk resource server dan client', 'Antarmuka NUI dengan teknologi web', 'Dioptimasi supaya kota tetap berjalan lancar'],
			cta: { label: 'Noctis Roleplay', href: NOCTIS, external: true }
		},
		{
			id: 'web', node: 'Web', short: 'Aplikasi full-stack',
			title: 'Full-stack: aplikasi web & dashboard',
			text: 'Dari database sampai tampilan: dashboard admin, tools internal, dan landing page.',
			points: ['TypeScript, Node.js, Svelte, React & Next.js', 'PostgreSQL, MySQL, dan MongoDB', 'Login, rate limit, dan header keamanan sejak awal'],
			cta: { label: 'Mulai proyek', href: '#contact', external: false }
		},
		{
			id: 'infra', node: 'Infra', short: 'Self-hosting',
			title: 'Infra: self-hosting & deployment',
			text: 'Saya menjalankan server sendiri: container, tunnel, dan platform deploy buatan sendiri.',
			points: ['Docker, Linux, dan Cloudflare Tunnel', 'Deploy lewat git push dengan subdomain otomatis', 'Backup, health check, dan monitoring'],
			cta: { label: 'Lihat xev-cloud', href: '#work', external: false }
		},
		{
			id: 'bots', node: 'Bots', short: 'Otomasi',
			title: 'Bot & otomasi: chat & alur kerja',
			text: 'Bot yang menjawab, mengantrekan, dan meneruskan percakapan, dibuat agar tetap dalam batas platform.',
			points: ['Bot WhatsApp, Telegram, dan Discord', 'Antrean, rate limit, dan alih ke admin', 'Jadwal otomatis dan integrasi'],
			cta: { label: 'Hubungi saya', href: '#contact', external: false }
		}
	],
	work: [
		{
			name: 'xev-cloud', kind: 'Platform deploy self-hosted',
			text: 'PaaS kecil yang saya buat dan jalankan: upload folder atau push ke Git, aplikasinya langsung online di subdomain sendiri.',
			points: ['Auto-deploy lewat git push & webhook', 'Subdomain otomatis di beberapa domain', 'Batas RAM & CPU per project', 'Log build langsung dan health check'],
			tags: ['Python', 'FastAPI', 'Docker', 'Cloudflare Tunnel'],
			note: 'Privat, khusus undangan', links: []
		},
		{
			name: 'Noctis Roleplay', kind: 'Server roleplay FiveM · developer',
			text: 'Pengembangan untuk server roleplay GTA V Noctis: script, resource, dan sistem gameplay.',
			points: ['Script server & client dengan Lua', 'Antarmuka dalam game (NUI)', 'Perbaikan dan fitur untuk server yang aktif'],
			tags: ['Lua', 'FiveM', 'NUI'],
			note: '', links: [{ label: 'Daftar server', href: FIVEM_LISTING }, { label: 'noctis.id', href: NOCTIS }]
		}
	],
	principles: [
		{ title: 'Kuasai detailnya', text: 'Saya membangun, men-deploy, dan merawat sendiri. Tanpa lempar tanggung jawab, tanpa "di laptop saya jalan kok".' },
		{ title: 'Aman sejak awal', text: 'Login, rate limit, backup, dan hak akses minimal dari hari pertama, bukan belakangan.' },
		{ title: 'Siap berjalan', text: 'Health check, log, dan monitoring, supaya masalah ketahuan sebelum pengguna merasakannya.' },
		{ title: 'Kontak langsung', text: 'Anda bicara langsung dengan orang yang menulis kodenya. Balasan cepat, jawaban jelas.' }
	]
};

export const content = { en, id };
