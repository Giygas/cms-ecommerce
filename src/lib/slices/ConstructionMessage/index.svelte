<script>
	/** @type {import("@prismicio/client").Content.ConstructionMessageSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="vertical-container">
		<h1 class="table-cell text-6xl font-bold text-center text-primary/30 h-full w-full">
			{slice.primary.message}
		</h1>
	</div>
</section>

<style lang="postcss">
	.vertical-container {
		display: table;
		vertical-align: middle;
		width: 100vw;
		height: 100vh;
	}

	.table-cell {
		display: table-cell;
		vertical-align: middle;
	}
</style>
