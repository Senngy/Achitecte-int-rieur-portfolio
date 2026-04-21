<script>
	import '../app.css';

	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
	let gridVisible = $state(false);

	function toggleGrid(e) {
		if (e.key === 'g') gridVisible = !gridVisible;
	}

	import { onMount } from 'svelte';

	onMount(() => {
		window.addEventListener('keydown', toggleGrid);
	});
</script>
<svelte:head>
  <title>Atelier Orée - Architecture & Design d'intérieur</title>
  <meta name="description" content="Atelier Orée, dirigé par Laëtitia Moriceau, est un studio d'architecture et de design d'intérieur spécialisé dans la création d'espaces qui résonnent avec l'âme de ses habitants. Basé à Paris, le studio propose des services de conception architecturale, design résidentiel et direction artistique pour transformer votre intérieur en un sanctuaire personnel." />
</svelte:head>


<div class="grid-lines" class:visible={gridVisible}>
	{#each Array(19) as _, i (i)}
		<div class="grid-line" style="left:{(i + 1) * 5}%"></div>
	{/each}
</div>

{@render children()}