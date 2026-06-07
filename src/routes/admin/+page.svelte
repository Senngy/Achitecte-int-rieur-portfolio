<script>
	let { data } = $props();
	let { projets, total } = $derived(data);
</script>

<svelte:head>
	<title>Admin | Atelier Orée</title>
</svelte:head>

<div class="p-8">
	<h1 class="text-2xl font-serif font-light text-stone-800 mb-8">Tableau de bord</h1>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
		<div class="bg-white p-6 border border-stone-200">
			<p class="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Projets</p>
			<p class="text-3xl font-serif text-stone-800">{total}</p>
		</div>
		<div class="bg-white p-6 border border-stone-200">
			<p class="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Types</p>
			<p class="text-3xl font-serif text-stone-800">{new Set(projets.map(p => p.type)).size}</p>
		</div>
		<div class="bg-white p-6 border border-stone-200">
			<p class="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Années</p>
			<p class="text-3xl font-serif text-stone-800">{new Set(projets.map(p => p.annee)).size}</p>
		</div>
	</div>

	<div class="bg-white border border-stone-200">
		<div class="px-6 py-4 border-b border-stone-100 flex justify-between items-center">
			<h2 class="text-sm font-medium text-stone-700 uppercase tracking-widest">Derniers projets</h2>
			<a href="/admin/projets" class="text-xs text-stone-400 hover:text-stone-600 uppercase tracking-widest">Voir tout</a>
		</div>
		{#each projets.slice(0, 5) as projet}
			<a href="/admin/projets/{projet.slug}" class="flex items-center justify-between px-6 py-4 hover:bg-stone-50 transition-colors border-b border-stone-50 last:border-0">
				<div>
					<p class="text-sm text-stone-800 font-medium">{projet.titre}</p>
					<p class="text-xs text-stone-400">{projet.lieu} — {projet.annee}</p>
				</div>
				<span class="text-[10px] uppercase tracking-widest text-stone-400 bg-stone-100 px-3 py-1">{projet.type}</span>
			</a>
		{/each}
	</div>
</div>
