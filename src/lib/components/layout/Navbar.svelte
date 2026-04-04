<script>
	import { onMount } from 'svelte';
	import RevealMenu from './RevealMenu.svelte';

	let nav;
	let mobileMenu;
	let scrolled = $state(false);
	let menuOpen = $state(false);

	const links = [
		{ href: '/projets', label: 'Projets' },
		{ href: '/profile', label: 'Laëtitia Moriceau' },
		{ href: '/services', label: 'Services' },
		{ href: '/contact', label: 'Contact' }
	].map(link => ({ ...link, onclick: () => (menuOpen = false) }));

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<!-- Navigation -->
<nav bind:this={nav} class:scrolled={scrolled}>
	<a href="/" class="logo">LM DESIGN</a>

	<div class="nav-controls">
		<RevealMenu isOpen={menuOpen} {links} />
		<button class="menu-toggle" onclick={toggleMenu}>
			Menu
		</button>
	</div>
</nav>

<!-- Mobile Menu Overlay (kept for actual mobile) -->
<div bind:this={mobileMenu} class="mobile-menu" class:active={menuOpen}>
	<div class="mobile-menu-items">
		{#each links as link}
			<a href={link.href} class="mobile-menu-item" onclick={() => (menuOpen = false)}>
				{link.label}
			</a>
		{/each}
	</div>
</div>

<style>
	.nav-controls {
		display: flex;
		align-items: center;
	}

	/* Ensure mobile menu item styles match app.css expectation if needed */
	/* But they are already styled in app.css */
</style>