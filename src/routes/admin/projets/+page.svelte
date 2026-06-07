<script>
	let { data } = $props();
	let { projets } = $derived(data);
</script>

<svelte:head>
	<title>Projets | Admin</title>
</svelte:head>

<div class="p-8">
	<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-8">
		<div>
			<h1 class="text-2xl font-serif font-light text-stone-800">Projets</h1>
			<p class="text-sm text-stone-400">{projets.length} projet(s)</p>
		</div>
		<a href="/admin/projets/new"
			class="bg-stone-800 text-white px-5 py-2 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors w-fit">
			Nouveau projet
		</a>
	</div>

	<div class="bg-white border border-stone-200">
		<div class="grid grid-cols-[1fr_100px_120px_100px_80px] gap-4 px-6 py-3 text-[10px] uppercase tracking-widest text-stone-400 border-b border-stone-100 bg-stone-50">
			<span>Titre</span>
			<span>Type</span>
			<span>Lieu</span>
			<span>Année</span>
			<span></span>
		</div>
		{#each projets as projet}
			<div class="grid grid-cols-[1fr_100px_120px_100px_80px] gap-4 px-6 py-4 items-center border-b border-stone-50 hover:bg-stone-50 transition-colors">
				<a href="/admin/projets/{projet.slug}" class="text-sm text-stone-800 hover:text-stone-600">{projet.titre}</a>
				<span class="text-xs text-stone-400">{projet.type}</span>
				<span class="text-xs text-stone-400">{projet.lieu}</span>
				<span class="text-xs text-stone-400">{projet.annee}</span>
				<a href="/admin/projets/{projet.slug}" class="text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-600">
					Éditer
				</a>
			</div>
		{/each}
	</div>
</div>
