<script>
	let { isOpen = false, links = [] } = $props();
</script>

<div class="reveal-menu {isOpen ? 'open' : ''}">
	<div class="links-container">
		{#each links as link}
			<a href={link.href} class="nav-link" onclick={link.onclick}>
				{link.label}
			</a>
		{/each}
	</div>
</div>

<style>
	.reveal-menu {
		overflow: hidden;
		display: flex;
		align-items: center;
		transition: all 0.8s var(--transition-organic);
		width: 0;
		opacity: 0;
		margin-right: 0;
	}

	.reveal-menu.open {
		width: 450px; /* Adjust based on content or use auto with a wrapper if possible */
		opacity: 1;
		margin-right: 2rem;
	}

	.links-container {
		display: flex;
		gap: 2.5rem;
		align-items: center;
		white-space: nowrap;
		padding: 0 1rem;
	}

	.nav-link {
		font-family: 'Cormorant Garamond', serif;
		font-size: 1rem;
		font-weight: 300;
		text-decoration: none;
		color: var(--ink-black);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		transition: color 0.4s var(--transition-gentle);
	}

	.nav-link:hover {
		color: var(--dusty-rose);
	}

	@media (max-width: 1024px) {
		.reveal-menu {
			display: none;
		}
	}
</style>
