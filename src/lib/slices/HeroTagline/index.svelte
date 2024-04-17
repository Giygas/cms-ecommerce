<script>
	import { PrismicRichText } from '@prismicio/svelte';
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.HeroTaglineSlice} */
	export let slice;
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="border p-10 lg:p-32 bg-primary-content drop-shadow-sm"
>
	<article>
		<h1>
			<PrismicRichText field={slice.primary.title} />
		</h1>
		<p>
			<PrismicRichText field={slice.primary.subtitle} />
		</p>

		<div class="flex flex-row gap-6 pt-3 lg:mt-5">
			<PrismicLink field={slice.primary.shop_sales}>
				<button class="btn btn-secondary">Shop Sales</button>
			</PrismicLink>
			<PrismicLink field={slice.primary.shop_sales}>
				<button class="btn btn-primary/50">All Products</button>
			</PrismicLink>
		</div>
	</article>
</section>

<style lang="postcss">
	article {
		@apply flex flex-col gap-4 justify-center items-center;
	}

	h1 {
		@apply text-4xl md:text-6xl text-center lg:mb-3;
	}

	p {
		@apply text-sm lg:text-lg text-slate-400 max-w-[800px];
	}

	button {
		@apply rounded-lg border border-black;
	}
</style>
