<script>
	import { PrismicRichText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.UnderConstructionSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="flex w-screen h-screen justify-center align-middle items-center">
		<h1 class="text-6xl text-primary/50"><PrismicRichText field={slice.primary.message} /></h1>
	</div>
</section>
