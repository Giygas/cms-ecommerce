<script>
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").Content.ProductListSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="container mx-auto flex flex-col gap-5 p-5 lg:gap-10 lg:p-16">
		<div class="flex flex-row justify-between items-center my-2 lg:my-0">
			<h2 class="text-3xl font-bold">
				<PrismicRichText field={slice.primary.title} />
			</h2>
			{#if slice.variation === 'default'}
				<PrismicLink field={slice.primary.allproducts}>
					<p class="link link-primary/40">See all products</p>
				</PrismicLink>
			{/if}
		</div>
		<div class="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each slice.items as product}
				<article
					class="flex flex-col justify-between gap-4 border bg-primary-content drop-shadow-sm rounded-lg overflow-hidden w-full bg-primary/10"
				>
					<PrismicImage
						field={product.image}
						class="aspect-auto object-cover max-h-48 min-h-48  lg:max-h-72 lg:min-h-72 w-full"
					/>
					<div class="px-4">
						<h3 class="text-2xl font-bold min-h-16">
							{product.title}
						</h3>

						<p class="text-right p-0 mb-4">
							<span class="badge badge-primary rounded-md">
								{product.category}
							</span>
						</p>
						<p class="max-h-20 overflow-y-scroll min-h-20 lg:min-h-28">
							{product.description}
						</p>
						<p class="my-2 text-right">
							<span class="font-bold">Price: </span> ${product.price}
						</p>
					</div>
					<button
						class="snipcart-add-item btn btn-primary"
						data-item-id={product.productid}
						data-item-name={product.title}
						data-item-category={product.category}
						data-item-price={product.price}
						data-item-image={product.image.url}
						data-item-description={product.description}>Add to Cart</button
					>
				</article>
			{/each}
		</div>
	</div>
</section>
