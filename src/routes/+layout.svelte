<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import BurgerMenu from '$lib/components/layout/BurgerMenu.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Contact from '$lib/components/Contact.svelte';

	let { children, data, form } = $props();
	const menuLinks = [
		{ label: 'Accueil', href: '/' },
		{ label: 'Voir les projets', href: '/projets' },
		{ label: 'Voir les maquettes', href: '/maquettes' }
	];

	let isOpen = $state(false);
	function handleClose() {
		isOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<main>
	<div class="nav">
		<BurgerMenu
			links={[...menuLinks, { label: 'Contact', type: 'button', onClick: () => (isOpen = true) }]}
		/>
	</div>
	{@render children?.()}
	<Modal {isOpen} close={handleClose} let:close>
		<Contact onClose={close} {form} />
	</Modal>
</main>

<style>
	main {
		max-width: 100vw;
	}
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		z-index: 1000;
	}
</style>
