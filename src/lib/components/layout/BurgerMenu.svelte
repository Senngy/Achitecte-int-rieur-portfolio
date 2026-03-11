<script>
	const { links } = $props();
	let menuOpen = $state(false);

	function handleClick(link) {
		if (link.type === 'button' && typeof link.onClick === 'function') {
			link.onClick();
		}
	}
</script>

<div class="burger-wrapper">
	<div class="menu-links {menuOpen ? 'open' : ''}">
		{#each links as link}
			{#if link.type === 'button'}
				<button class="menu-link" onclick={() => handleClick(link)}>
					{link.label}
				</button>
			{:else}
				<a href={link.href} class="menu-link">{link.label}</a>
			{/if}
		{/each}
	</div>

	<button class="burger-button" onclick={() => (menuOpen = !menuOpen)}> ☰ </button>
</div>

<style>
	.burger-wrapper {
		position: fixed;
		top: 1rem;
		right: 1rem;
		display: flex;
		align-items: center;
		z-index: 1000;
		font-size: 1rem;
	}

	.burger-button {
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		color: black;
		padding: 0.5rem 1rem;
		cursor: pointer;
		
	}
	.burger-button:hover {
		background-color: rgba(255, 255, 255, 0.886);
		transition: 0.2s all ease-in-out;
	}

	.menu-links {
		display: flex;
		gap: 1rem;
		transform: translateX(100%);
		opacity: 0;
		transition:
			transform 0.5s ease,
			opacity 0.5s ease;
		position: relative;
		margin-right: 1rem;
	}

	.menu-links.open {
		transform: translateX(0);
		opacity: 1;
	}

	.menu-link {
		background: rgba(255, 255, 255, 0.345);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		padding: 0.5rem 1rem;
		color: black;
		text-decoration: none;
		white-space: nowrap;
		transition: background 0.3s ease;
	}

	.menu-link:hover {
		background-color: rgba(255, 255, 255, 0.886);
	}
	/* Responsive */
	/* Phones: Up to 320px */
@media (max-width:415.9px) {
	/* Styles pour téléphones */
	.burger-wrapper {
	font-size: 0.4rem;
   }
   .menu-links {
	gap: 0.4rem;
	margin-right: 0.4rem ;
   }
   .menu-link {
	padding: 0.2rem 0.5rem;
   }

}
/* Phones: Up to 480px */
@media (min-width: 416px) and (max-width: 480.9px) {
	/* Styles pour téléphones */
	.burger-wrapper {
	font-size: 0.6rem;
   }
   .menu-links {
	gap: 0.6rem;
	margin-right: 0.6rem ;
   }
   .menu-link {
	padding: 0.3rem 0.6rem;
   }


}
/* Landscape Phones & Smaller Portrait Tablets: 481px to 768px */
@media (min-width: 481px) and (max-width: 551.9px) {
	/* Styles pour téléphones en paysage et petites tablettes */
   .burger-wrapper {
	font-size: 0.6rem;
   }
}


/* Landscape Phones & Smaller Portrait Tablets: 481px to 768px */
@media (min-width: 552px) and (max-width: 631.9px) {
	/* Styles pour téléphones en paysage et petites tablettes */
   .burger-wrapper {
	font-size: 0.8rem;
   }
}

/* Landscape Tablets & Laptops: 769px to 1024px */
@media (min-width: 632px) and (max-width: 1024px) {
	/* Styles pour tablettes en paysage et laptops */

}

/* Larger Displays: 1025px to 1366px */
@media (min-width: 1025px) and (max-width: 1248.9px) {
	/* Styles pour grands écrans */

}
/* Extra Wide Monitors and TVs: Above 1366px */
@media (min-width: 1249px) and (max-width: 136p) {
	/* Styles pour très grands écrans et TV */
	
}

/* Extra Wide Monitors and TVs: Above 1366px */
@media (min-width: 1367px) {
	/* Styles pour très grands écrans et TV */
	
}
</style>
