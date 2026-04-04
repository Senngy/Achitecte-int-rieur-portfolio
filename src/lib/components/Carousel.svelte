<script>
	// Svelte 5 syntaxe (runes)
	import { fade } from 'svelte/transition';
	import { tick } from 'svelte';

	// Props configurables
	const {
		photos = [],
		autoPlay = true,
		interval = 3000,
		showControls = true,
		loop = true,
		transitionMs = 350
	} = $props();

	let index = $state(0);
	let timer;

	// clamp simple et sûr : surveille photos et index sans utiliser $:
	$effect(() => {
		const len = photos.length;
		if (len === 0) {
			index = 0;
		} else if (index > len - 1) {
			index = len - 1;
		}
		// pas de cleanup nécessaire ici
	});
	// Fonction pour (re)démarrer le timer
	function resetTimer() {
		clearInterval(timer);
		if (autoPlay && photos.length > 1) {
			timer = setInterval(next, interval);
		}
	}

	const next = () => {
		const len = photos.length;
		if (!len) return;
		index = loop ? (index + 1) % len : Math.min(index + 1, len - 1);
		resetTimer(); // restart après clic
	};

	const prev = () => {
		const len = photos.length;
		if (!len) return;
		index = loop ? (index - 1 + len) % len : Math.max(index - 1, 0);
		resetTimer(); // restart après clic
	};
	// Initialisation autoplay
	$effect(() => {
		resetTimer();
		return () => clearInterval(timer);
	});
</script>

<div class="carousel">
	{#if photos.length === 0}
		<div class="empty">Aucune image</div>
	{:else}
		{#if showControls}
			<button class="btn-ctrl prev" onclick={prev} aria-label="Précédent">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-20"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
					/>
				</svg>
			</button>
		{/if}

		<div class="viewport">
			<div
				class="track"
				style={`transform: translateX(-${index * 100}%); transition: transform ${transitionMs}ms ease;`}
			>
				{#each photos as p (p.src)}
					<div class="slide">
						<img src={p.src} alt={p.alt ?? ''} />
					</div>
				{/each}
			</div>
		</div>

		{#if showControls}
			<button class="btn-ctrl next" onclick={next} aria-label="Suivant">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-20"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
					/>
				</svg>
			</button>
		{/if}
	{/if}
</div>

<style>
	.carousel {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		width: 100%;
		margin: auto;
		height: 100%;
	}

	.viewport {
		overflow: hidden;
		width: 100%;
		height: 100%; /* ajuste si besoin */
		background: #111; /* évite trou visible lors du chargement */
		position: relative;
	}

	.track {
		display: flex;
		height: 100%;
		will-change: transform;
	}

	.slide {
		flex: 0 0 100%; /* chaque slide prend 100% du viewport */
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}

	.slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.empty {
		padding: 2rem;
		color: #666;
		text-align: center;
		width: 100%;
	}
	img {
		width: 100%;
		display: block;
	}

	.btn-ctrl {
		display: flex;
		background: rgba(0, 0, 0, 0.4);
		color: white;
		border: none;
		font-size: 1.5rem;
		font-weight: bold;
		cursor: pointer;
		padding: 1rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		user-select: none;
		z-index: 10;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		text-align: center;
		justify-content: center;
		align-items: center;
		opacity: 0;
		transition: opacity 0.3s ease;
	}
	.carousel:hover .btn-ctrl {
		opacity: 1;
	}
	.btn-ctrl svg {
		width: 2rem;
		height: 2rem;
	}

	.prev {
		left: 0.5rem;
	}

	.next {
		right: 0.5rem;
	}

	.btn-ctrl:hover {
		background: rgba(48, 46, 46, 0.6);
	}
</style>
