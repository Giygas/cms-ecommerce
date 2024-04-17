import { error } from '@sveltejs/kit';
import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const nav = await client.getSingle('nav');

	if (nav) {
		return { nav };
	}

	error(404, 'Page not found');
}
