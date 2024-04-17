<script>
	import { PrismicLink, PrismicImage } from '@prismicio/svelte';
	import { page } from '$app/stores';

	/** @type {import('../../prismicio-types').NavDocumentData['links']} */
	export let links;
</script>

<div class="btm-nav">
	{#each links as link}
		{@const active = $page.data.page.uid == link.link.uid}
		<button class="text-primary" class:active>
			<PrismicImage field={link.icon} class="w-6 h-6" />
			<PrismicLink field={link.link}>{link.label}</PrismicLink>
		</button>
	{/each}
</div>
