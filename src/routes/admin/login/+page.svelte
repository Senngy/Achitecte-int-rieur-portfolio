<script>
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<svelte:head>
	<title>Connexion Admin | Atelier Orée</title>
</svelte:head>

<main class="min-h-screen bg-stone-100 flex items-center justify-center px-4">
	<div class="w-full max-w-sm">
		<div class="bg-white p-8 shadow-sm border border-stone-200">
			<h1 class="text-2xl font-light font-serif text-stone-800 mb-1">Connexion Admin</h1>
			<p class="text-sm text-stone-400 mb-8">Portfolio Laëtitia Moriceau</p>

			{#if form?.error}
				<p class="text-red-600 text-sm mb-4 bg-red-50 p-3">{form.error}</p>
			{/if}

			<form method="POST" use:enhance>
				<div class="mb-4">
					<label for="email" class="block text-xs uppercase tracking-widest text-stone-400 mb-2">Email</label>
					<input type="email" id="email" name="email" required
						class="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-400 bg-stone-50" />
				</div>
				<div class="mb-6">
					<label for="password" class="block text-xs uppercase tracking-widest text-stone-400 mb-2">Mot de passe</label>
					<input type="password" id="password" name="password" required
						class="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-400 bg-stone-50" />
				</div>
				<button type="submit"
					class="w-full bg-stone-800 text-white py-3 text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors">
					Se connecter
				</button>
			</form>
		</div>
	</div>
</main>
