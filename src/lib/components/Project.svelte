<script>
	import Carousel from '$lib/components/Carousel.svelte';
	const {
		plans = { src: '/images/plan.jpg', alt: 'Photo 3' },
		title,
		description,
		images = [
            { src: '/images/interieur.jpg', alt: 'Photo 2' },
            { src: '/images/concept.webp', alt: 'Photo 1' }
        ]
	} = $props();
</script>

<div class="project">
	<div class="plans">
		<Carousel photos={plans} autoPlay={true} interval={5000} showControls={true} loop={true} />
	</div>
	<div class="right-content">
		<div class="text">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	</div>
	<div class="images">
		<div class="left-images">
			{#each images as image, i}
				{#if i % 2 === 0}
					<img src={image.src} alt={image.alt} />
				{/if}
			{/each}
		</div>
		<div class="right-images">
			{#each images as image, i}
				{#if i % 2 === 1}
					<img src={image.src} alt={image.alt} />
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.images {
		display: flex;
		gap: 10px;
		align-items: flex-start; /* important pour ne pas réaligner verticalement */
	}

	.left-images,
	.right-images {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.right-images {
		margin-top: 40px; /* décalage vertical */
	}

	.images img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 8px;
		display: block;
	}
</style>
