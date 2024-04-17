export const prerender = 'auto';

import { createClient } from '@prismicio/client';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const nav = await client.getSingle('nav');

	return {
		nav
	};
}
