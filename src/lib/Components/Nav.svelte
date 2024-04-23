<script>
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import { page } from '$app/stores';

	/** @type {import('../../prismicio-types').NavDocumentData['links']} */
	export let links;
</script>

<div class="btm-nav">
	{#each links as link}
		{@const active = $page.data.page.uid == link.link.uid}
		{#if link.link.uid != 'cart'}
			<button
				class="text-primary flex flex-col justify-center align-middle items-center self-center"
				class:active
			>
				<PrismicLink field={link.link} class="w-full flex flex-col  items-center">
					<PrismicImage field={link.icon} class="w-6 h-6 "></PrismicImage>
					<!-- <img src={link.icon.url} class="w-6 h-6 items-center self-center" alt={link.icon.alt} /> -->
					{link.label}
				</PrismicLink>
			</button>
		{:else}
			<button
				class="snipcart-checkout text-primary flex flex-col justify-center align-middle items-center self-center"
				class:active
			>
				<PrismicLink class="w-full flex flex-col  items-center">
					<PrismicImage field={link.icon} class="w-6 h-6 "></PrismicImage>
					<!-- <img src={link.icon.url} class="w-6 h-6 items-center self-center" alt={link.icon.alt} /> -->
					{link.label}
				</PrismicLink>
			</button>
		{/if}
	{/each}
</div>
