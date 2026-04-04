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


<div class="grid-lines" class:visible={gridVisible}>
	{#each Array(19) as _, i (i)}
		<div class="grid-line" style="left:{(i + 1) * 5}%"></div>
	{/each}
</div>

{@render children()}