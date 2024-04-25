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
					{link.label}
				</PrismicLink>
			</button>
		{:else}
			<button
				class="snipcart-checkout text-primary flex flex-col justify-center align-middle items-center self-center"
				class:active
			>
				<PrismicLink class="w-full flex flex-col  items-center ">
					<PrismicImage field={link.icon} class="w-6 h-6 relative"></PrismicImage>
					<span id="cart-count" class="snipcart-items-count absolute z-20 font-bold"></span>
					{link.label}
				</PrismicLink>
			</button>
		{/if}
	{/each}
</div>

<style>
	.snipcart-items-count {
		min-width: 1.5rem;
		color: white;
		font-size: 12px;
		background-color: red;
		padding: 0.1rem 0.3rem;
		border-radius: 0.5rem;
		top: 10%;
		left: 51%;
	}
</style>
