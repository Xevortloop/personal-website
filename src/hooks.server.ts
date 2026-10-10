import type { Handle } from '@sveltejs/kit';

// Atribut <html lang> mengikuti URL: /id/ = Indonesia, sisanya Inggris.
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.url.pathname.startsWith('/id') ? 'id' : 'en')
	});
