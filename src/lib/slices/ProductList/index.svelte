<script>
	import { PrismicRichText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.ProductListSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="flex flex-col gap-5 p-5 lg:gap-10 lg:p-16">
		<h2 class="text-3xl font-bold">
			<PrismicRichText field={slice.primary.title} />
		</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each slice.items as product}
				<article
					class="flex flex-col gap-4 border bg-primary-content drop-shadow-sm rounded-lg overflow-hidden w-full bg-primary/10"
				>
					<img
						src={product.image.url}
						alt={product.image.alt}
						class="aspect-auto object-cover max-h-72 min-h-72 w-full"
					/>
					<div class="px-4">
						<h3 class="text-2xl font-bold">
							<PrismicRichText field={product.title} />
						</h3>

						<p class="text-right -mt-4 p-0 mb-4">
							<span class="badge badge-primary rounded-md">
								{product.category}
							</span>
						</p>
						<p class="max-h-28 overflow-y-scroll min-h-28">
							<PrismicRichText field={product.description} />
						</p>
						<p class="my-2 text-right">
							<span class="font-bold">Price: </span> ${product.price}
						</p>
					</div>
					<button class="btn btn-primary">Add to Cart</button>
				</article>
			{/each}
		</div>
	</div>
</section>
