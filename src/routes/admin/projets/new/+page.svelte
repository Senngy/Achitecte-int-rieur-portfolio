<script>
	let { form } = $props();

	let titre = $state('');
	let slug = $state('');

	function generateSlug() {
		slug = titre.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');
	}
</script>

<svelte:head>
	<title>Nouveau projet | Admin</title>
</svelte:head>

<div class="p-8 max-w-3xl">
	<div class="mb-8">
		<a href="/admin/projets" class="text-xs text-stone-400 hover:text-stone-600 uppercase tracking-widest">&larr; Retour aux projets</a>
		<h1 class="text-2xl font-serif font-light text-stone-800 mt-2">Nouveau projet</h1>
	</div>

	{#if form?.error}
		<p class="text-red-600 bg-red-50 p-4 mb-6 text-sm">{form.error}</p>
	{/if}

	<form method="POST" class="bg-white p-6 border border-stone-200 space-y-4 max-w-lg">
		<div>
		<label for="titre" class="block text-xs text-stone-400 mb-1">Titre du projet</label>
      <input id="titre" name="titre" bind:value={titre} oninput={generateSlug} required class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" />
		</div>
		<div>
		<label for="slug" class="block text-xs text-stone-400 mb-1">Slug (URL)</label>
      <input id="slug" name="slug" bind:value={slug} required class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400" />
			<p class="text-xs text-stone-400 mt-1">Généré automatiquement, modifiable</p>
		</div>
		<button type="submit"
			class="bg-stone-800 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors">
			Créer le projet
		</button>
	</form>
</div>
