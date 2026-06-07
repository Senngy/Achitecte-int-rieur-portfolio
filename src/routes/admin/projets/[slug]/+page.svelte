<script lang="ts">
	let { data, form } = $props();
	let projet = data.projet;

	let titre = $state(projet.titre);
	let slug = $state(projet.slug);
	let type = $state(projet.type);
	let annee = $state(projet.annee);
	let surface = $state(projet.surface);
	let lieu = $state(projet.lieu);
	let legende = $state(projet.legende);
	let description = $state(projet.description);
	let tagline = $state(projet.tagline || '');
	let imgPres = $state(projet.imgPres.join('\n') || '');
	let imgSecondaire = $state(projet.imgSecondaire.join('\n') || '');
	let plans = $state(projet.plans.join('\n') || '');
	let coupes = $state(projet.coupes.join('\n') || '');
	let images = $state(projet.images.join('\n') || '');
	let palettes = $state(projet.palettes.map(p => `${p.name}|${p.src}`).join('\n') || '');

	let textes = $state(projet.textes?.join('\n---\n') || '');

	const e = (v: string | undefined) => v ?? '';
	const ea = (a: string[] | undefined) => a?.join('\n') ?? '';
	const et = (a: string[] | undefined) => a?.join('\n---\n') ?? '';

	let e1vis = $state(!!projet.espace1);
	let e1titre = $state(e(projet.espace1?.titre));
	let e1desc = $state(e(projet.espace1?.description));
	let e1imgs = $state(ea(projet.espace1?.images));
	let e1plans = $state(ea(projet.espace1?.plans));
	let e1coupes = $state(ea(projet.espace1?.coupes));
	let e1textes = $state(et(projet.espace1?.textes));

	let e2vis = $state(!!projet.espace2);
	let e2titre = $state(e(projet.espace2?.titre));
	let e2desc = $state(e(projet.espace2?.description));
	let e2imgs = $state(ea(projet.espace2?.images));
	let e2plans = $state(ea(projet.espace2?.plans));
	let e2coupes = $state(ea(projet.espace2?.coupes));
	let e2textes = $state(et(projet.espace2?.textes));

	let e3vis = $state(!!projet.espace3);
	let e3titre = $state(e(projet.espace3?.titre));
	let e3desc = $state(e(projet.espace3?.description));
	let e3imgs = $state(ea(projet.espace3?.images));
	let e3plans = $state(ea(projet.espace3?.plans));
	let e3coupes = $state(ea(projet.espace3?.coupes));
	let e3textes = $state(et(projet.espace3?.textes));
</script>

<svelte:head>
	<title>{projet.titre} | Admin</title>
</svelte:head>

<div class="p-8 max-w-3xl">
	<div class="mb-8">
		<a href="/admin/projets" class="text-xs text-stone-400 hover:text-stone-600 uppercase tracking-widest">&larr; Retour aux projets</a>
		<h1 class="text-2xl font-serif font-light text-stone-800 mt-2">{projet.titre}</h1>
	</div>

	{#if form?.success}
		<p class="text-green-700 bg-green-50 p-4 mb-6 text-sm">{form.success}</p>
	{/if}
	{#if form?.error}
		<p class="text-red-600 bg-red-50 p-4 mb-6 text-sm">{form.error}</p>
	{/if}

	<form method="POST" enctype="multipart/form-data" class="space-y-8">
		<fieldset class="bg-white p-6 border border-stone-200 space-y-4">
			<legend class="text-xs uppercase tracking-widest text-stone-500 font-medium px-2">Informations générales</legend>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label for="edit-titre" class="block text-xs text-stone-400 mb-1">Titre</label>
					<input id="edit-titre" name="titre" bind:value={titre} required class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" />
				</div>
				<div>
					<label for="edit-slug" class="block text-xs text-stone-400 mb-1">Slug (URL)</label>
					<input id="edit-slug" name="slug" bind:value={slug} required class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400 font-mono text-xs" />
				</div>
			</div>

			<div class="grid grid-cols-4 gap-4">
				<div>
					<label for="edit-type" class="block text-xs text-stone-400 mb-1">Type</label>
					<input id="edit-type" name="type" bind:value={type} class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" />
				</div>
				<div>
					<label for="edit-annee" class="block text-xs text-stone-400 mb-1">Année</label>
					<input id="edit-annee" name="annee" bind:value={annee} class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" />
				</div>
				<div>
					<label for="edit-surface" class="block text-xs text-stone-400 mb-1">Surface</label>
					<input id="edit-surface" name="surface" bind:value={surface} class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" />
				</div>
				<div>
					<label for="edit-lieu" class="block text-xs text-stone-400 mb-1">Lieu</label>
					<input id="edit-lieu" name="lieu" bind:value={lieu} class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" />
				</div>
			</div>

			<div>
				<label for="edit-legende" class="block text-xs text-stone-400 mb-1">Légende (sous-titre court)</label>
				<input id="edit-legende" name="legende" bind:value={legende} class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" />
			</div>
			<div>
				<label for="edit-tagline" class="block text-xs text-stone-400 mb-1">Tagline (phrase d'accroche)</label>
				<input id="edit-tagline" name="tagline" bind:value={tagline} class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" />
			</div>
			<div>
				<label for="edit-description" class="block text-xs text-stone-400 mb-1">Description</label>
				<textarea id="edit-description" name="description" bind:value={description} rows="3" class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400"></textarea>
			</div>
		</fieldset>

		<fieldset class="bg-white p-6 border border-stone-200 space-y-4">
			<legend class="text-xs uppercase tracking-widest text-stone-500 font-medium px-2">Images (un chemin par ligne)</legend>
			<div>
				<label for="edit-imgPres" class="block text-xs text-stone-400 mb-1">Image de présentation (hero)</label>
				<textarea id="edit-imgPres" name="imgPres" bind:value={imgPres} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea>
				<input type="file" name="imgPres_file" accept="image/*" class="mt-1 text-xs text-stone-400 file:mr-2 file:py-1 file:px-3 file:text-xs file:border file:border-stone-200 file:bg-stone-50 file:hover:bg-stone-100 file:cursor-pointer" />
			</div>
			<div>
				<label for="edit-imgSecondaire" class="block text-xs text-stone-400 mb-1">Image(s) secondaire(s)</label>
				<textarea id="edit-imgSecondaire" name="imgSecondaire" bind:value={imgSecondaire} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea>
				<input type="file" name="imgSecondaire_file" accept="image/*" class="mt-1 text-xs text-stone-400 file:mr-2 file:py-1 file:px-3 file:text-xs file:border file:border-stone-200 file:bg-stone-50 file:hover:bg-stone-100 file:cursor-pointer" />
			</div>
			<div>
				<label for="edit-images" class="block text-xs text-stone-400 mb-1">Galerie d'images</label>
				<textarea id="edit-images" name="images" bind:value={images} rows="3" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea>
				<input type="file" name="images_file" accept="image/*" class="mt-1 text-xs text-stone-400 file:mr-2 file:py-1 file:px-3 file:text-xs file:border file:border-stone-200 file:bg-stone-50 file:hover:bg-stone-100 file:cursor-pointer" />
			</div>
		</fieldset>

		<fieldset class="bg-white p-6 border border-stone-200 space-y-4">
			<legend class="text-xs uppercase tracking-widest text-stone-500 font-medium px-2">Plans techniques & Coupes</legend>
			<div>
				<label for="edit-plans" class="block text-xs text-stone-400 mb-1">Plans</label>
				<textarea id="edit-plans" name="plans" bind:value={plans} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea>
				<input type="file" name="plans_file" accept="image/*" class="mt-1 text-xs text-stone-400 file:mr-2 file:py-1 file:px-3 file:text-xs file:border file:border-stone-200 file:bg-stone-50 file:hover:bg-stone-100 file:cursor-pointer" />
			</div>
			<div>
				<label for="edit-coupes" class="block text-xs text-stone-400 mb-1">Coupes</label>
				<textarea id="edit-coupes" name="coupes" bind:value={coupes} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea>
				<input type="file" name="coupes_file" accept="image/*" class="mt-1 text-xs text-stone-400 file:mr-2 file:py-1 file:px-3 file:text-xs file:border file:border-stone-200 file:bg-stone-50 file:hover:bg-stone-100 file:cursor-pointer" />
			</div>
		</fieldset>

		<fieldset class="bg-white p-6 border border-stone-200 space-y-4">
			<legend class="text-xs uppercase tracking-widest text-stone-500 font-medium px-2">Palette de matériaux (nom|chemin par ligne)</legend>
			<textarea name="palettes" bind:value={palettes} rows="4" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea>
			<p class="text-xs text-stone-400">Format : <code class="bg-stone-100 px-1">Nom du matériau|/images/chemin.jpg</code></p>
			<input type="file" name="palettes_file" accept="image/*" class="text-xs text-stone-400 file:mr-2 file:py-1 file:px-3 file:text-xs file:border file:border-stone-200 file:bg-stone-50 file:hover:bg-stone-100 file:cursor-pointer" />
			<p class="text-xs text-stone-400 mt-1">Uploader une image de matériau (nom = nom du fichier)</p>
		</fieldset>

		<fieldset class="bg-white p-6 border border-stone-200 space-y-4">
			<legend class="text-xs uppercase tracking-widest text-stone-500 font-medium px-2">Textes du projet</legend>
			<textarea name="textes" bind:value={textes} rows="6" class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400"></textarea>
			<p class="text-xs text-stone-400">Séparez les paragraphes par <code class="bg-stone-100 px-1">---</code> (3 tirets sur une ligne)</p>
		</fieldset>

		<details class="bg-white border border-stone-200">
			<summary class="px-6 py-3 text-xs uppercase tracking-widest text-stone-500 font-medium cursor-pointer select-none hover:bg-stone-50">Espace 1</summary>
			<div class="p-6 space-y-4 border-t border-stone-200">
				<div><label for="espace1_titre" class="block text-xs text-stone-400 mb-1">Titre</label><input id="espace1_titre" name="espace1_titre" bind:value={e1titre} class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" /></div>
				<div><label for="espace1_description" class="block text-xs text-stone-400 mb-1">Description</label><textarea id="espace1_description" name="espace1_description" bind:value={e1desc} rows="3" class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace1_images" class="block text-xs text-stone-400 mb-1">Images (un chemin par ligne)</label><textarea id="espace1_images" name="espace1_images" bind:value={e1imgs} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace1_plans" class="block text-xs text-stone-400 mb-1">Plans</label><textarea id="espace1_plans" name="espace1_plans" bind:value={e1plans} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace1_coupes" class="block text-xs text-stone-400 mb-1">Coupes</label><textarea id="espace1_coupes" name="espace1_coupes" bind:value={e1coupes} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace1_textes" class="block text-xs text-stone-400 mb-1">Textes</label><textarea id="espace1_textes" name="espace1_textes" bind:value={e1textes} rows="4" class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400"></textarea><p class="text-xs text-stone-400 mt-1">Séparez les paragraphes par <code class="bg-stone-100 px-1">---</code></p></div>
			</div>
		</details>
		<details class="bg-white border border-stone-200">
			<summary class="px-6 py-3 text-xs uppercase tracking-widest text-stone-500 font-medium cursor-pointer select-none hover:bg-stone-50">Espace 2</summary>
			<div class="p-6 space-y-4 border-t border-stone-200">
				<div><label for="espace2_titre" class="block text-xs text-stone-400 mb-1">Titre</label><input id="espace2_titre" name="espace2_titre" bind:value={e2titre} class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" /></div>
				<div><label for="espace2_description" class="block text-xs text-stone-400 mb-1">Description</label><textarea id="espace2_description" name="espace2_description" bind:value={e2desc} rows="3" class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace2_images" class="block text-xs text-stone-400 mb-1">Images (un chemin par ligne)</label><textarea id="espace2_images" name="espace2_images" bind:value={e2imgs} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace2_plans" class="block text-xs text-stone-400 mb-1">Plans</label><textarea id="espace2_plans" name="espace2_plans" bind:value={e2plans} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace2_coupes" class="block text-xs text-stone-400 mb-1">Coupes</label><textarea id="espace2_coupes" name="espace2_coupes" bind:value={e2coupes} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace2_textes" class="block text-xs text-stone-400 mb-1">Textes</label><textarea id="espace2_textes" name="espace2_textes" bind:value={e2textes} rows="4" class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400"></textarea><p class="text-xs text-stone-400 mt-1">Séparez les paragraphes par <code class="bg-stone-100 px-1">---</code></p></div>
			</div>
		</details>
		<details class="bg-white border border-stone-200">
			<summary class="px-6 py-3 text-xs uppercase tracking-widest text-stone-500 font-medium cursor-pointer select-none hover:bg-stone-50">Espace 3</summary>
			<div class="p-6 space-y-4 border-t border-stone-200">
				<div><label for="espace3_titre" class="block text-xs text-stone-400 mb-1">Titre</label><input id="espace3_titre" name="espace3_titre" bind:value={e3titre} class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400" /></div>
				<div><label for="espace3_description" class="block text-xs text-stone-400 mb-1">Description</label><textarea id="espace3_description" name="espace3_description" bind:value={e3desc} rows="3" class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace3_images" class="block text-xs text-stone-400 mb-1">Images (un chemin par ligne)</label><textarea id="espace3_images" name="espace3_images" bind:value={e3imgs} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace3_plans" class="block text-xs text-stone-400 mb-1">Plans</label><textarea id="espace3_plans" name="espace3_plans" bind:value={e3plans} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace3_coupes" class="block text-xs text-stone-400 mb-1">Coupes</label><textarea id="espace3_coupes" name="espace3_coupes" bind:value={e3coupes} rows="2" class="w-full border border-stone-200 px-3 py-2 text-sm font-mono text-xs focus:outline-none focus:border-stone-400"></textarea></div>
				<div><label for="espace3_textes" class="block text-xs text-stone-400 mb-1">Textes</label><textarea id="espace3_textes" name="espace3_textes" bind:value={e3textes} rows="4" class="w-full border border-stone-200 px-3 py-2 text-sm focus:outline-none focus:border-stone-400"></textarea><p class="text-xs text-stone-400 mt-1">Séparez les paragraphes par <code class="bg-stone-100 px-1">---</code></p></div>
			</div>
		</details>

		<div class="flex gap-4">
			<button type="submit" name="action" value="save"
				class="bg-stone-800 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors">
				Enregistrer
			</button>
			<button type="submit" name="action" value="delete"
				class="bg-white text-red-500 border border-red-200 px-8 py-3 text-xs uppercase tracking-widest hover:bg-red-50 transition-colors"
				onclick={() => confirm('Supprimer ce projet ? Cette action est irréversible.')}>
				Supprimer
			</button>
		</div>
	</form>
</div>
