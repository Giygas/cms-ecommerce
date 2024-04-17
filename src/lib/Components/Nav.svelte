<script>
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.NavSlice} */
	export let links;
</script>

<div class="btm-nav">
	{#each links as link}
		<button class="text-primary">
			<PrismicLink field={link.link}>{link.label}</PrismicLink>
		</button>
	{/each}
</div>
