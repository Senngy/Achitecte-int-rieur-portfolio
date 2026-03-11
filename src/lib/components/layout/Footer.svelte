<script>
	let { customCSS } = $props();
</script>

<footer class={customCSS}>
	<div class="contact">
		<a href="/files/CV-LaëtitiaMORICEAU-Archi_Intérieur" download>
			<button
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
					/>
				</svg>
				Télécharger mon CV</button
			>
		</a>
		<a
			href="https://www.linkedin.com/in/laetitia"
			target="_blank"
			rel="noopener"
			aria-label="LinkedIn"
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path
					d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v5.58z"
				/>
			</svg>
		</a>
	</div>
	<div class="footer">
		<p>© 2025 Laëtitia MORICEAU. Tous droits réservés.</p>
	</div>
</footer>

<style>
	footer {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-self: center;
	}
	.static-bottom {
		position: absolute;
		bottom: 5px;
	}
	.contact {
		display: flex;
		gap: 20px;
		margin-bottom: 20px;
	}
	.contact a {
		color: #333;
		text-decoration: none;
		font-weight: bold;
		transition: color 0.3s ease;
	}
	.contact a:hover {
		color: #eb5a7a;
	}
	button {
		display: flex;
		gap: 4px;
	}
</style>
