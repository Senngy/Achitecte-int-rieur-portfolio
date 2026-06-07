<script>
	let { children } = $props();
</script>

<div class="min-h-screen flex">
	<aside class="w-64 bg-stone-900 text-stone-300 flex flex-col shrink-0">
		<div class="px-6 py-8 border-b border-stone-700">
			<a href="/admin" class="text-white font-serif text-xl font-light tracking-wide">Atelier Orée</a>
			<p class="text-[10px] uppercase tracking-widest text-stone-500 mt-2">Administration</p>
		</div>
		<nav class="flex-1 px-3 py-6 space-y-1">
			<a href="/admin" class="block px-3 py-2 text-sm rounded hover:bg-stone-800 hover:text-white transition-colors">
				Tableau de bord
			</a>
			<a href="/admin/projets" class="block px-3 py-2 text-sm rounded hover:bg-stone-800 hover:text-white transition-colors">
				Projets
			</a>
		</nav>
		<div class="px-3 py-4 border-t border-stone-700">
			<a href="/admin/logout"
				class="block px-3 py-2 text-sm text-stone-400 hover:text-red-400 transition-colors rounded hover:bg-stone-800">
				Déconnexion
			</a>
		</div>
	</aside>
	<main class="flex-1 bg-stone-50 overflow-auto">
		{@render children()}
	</main>
</div>
