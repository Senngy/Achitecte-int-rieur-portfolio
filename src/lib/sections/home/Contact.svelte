<script lang="ts">
import { onMount } from "svelte";
import { reveal } from "$lib/utils/reveal";
import { slide, fade } from 'svelte/transition';
import { enhance } from '$app/forms';

let { form } = $props();
let loading = $state(false);

onMount(() => {
	const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => reveal(el));
});
</script>

<section id="contact" class="min-h-screen flex items-center">
	<div class="grid-container">

		<div class="section-header fade-in">
			<div class="line"></div>
			<span class="label">Contactez-moi</span>
		</div>

		<div class="contact-content fade-in">

			<h2 class="contact-title">
				Créons ensemble quelque chose qui s'aligne avec vous même.
			</h2>

			{#if form?.success}
				<!-- SUCCÈS : On masque le formulaire et on affiche un beau message -->
				<div class="success-container" in:fade={{ duration: 600 }}>
					<span class="material-symbols-outlined success-icon">check_circle</span>
					<h3 class="success-title">Message envoyé avec succès !</h3>
					<p class="success-text">{form.success}</p>
					<button type="button" class="submit-btn" style="margin-top:2rem; width:auto;" onclick={() => window.location.reload()}>
						Nouveau message
					</button>
				</div>
			{:else}
			<form
				class="contact-form"
				method="POST"
				action="?/contact"
				use:enhance={() => {
					loading = true;
					return async ({ update }) => {
						await update();
						loading = false;
					};
				}}
				in:fade={{ duration: 400 }}
			>
			<div class="personal-info">
				<!-- HONEYPOT (Anti-Spam Bot Trap) -->
				<div class="hidden-field" aria-hidden="true">
					<label for="website_url">Laissez ce champ vide</label>
					<input type="text" id="website_url" name="website_url" tabindex="-1" autocomplete="off" />
				</div>
				<div class="form-group">
					<label for="name">Nom</label>
					<input
						type="text"
						id="name"
						name="name"
						class:has-error={form?.errors?.name}
						required
					/>
					{#if form?.errors?.name}
						<p class="error-msg" transition:slide={{ duration: 300 }}>
							<span class="material-symbols-outlined text-[1rem]">error</span>
							{form.errors.name}
						</p>
					{/if}
				</div>

				<div class="form-group">
					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						class:has-error={form?.errors?.email}
						required
					/>
					{#if form?.errors?.email}
						<p class="error-msg" transition:slide={{ duration: 300 }}>
							<span class="material-symbols-outlined text-[1rem]">error</span>
							{form.errors.email}
						</p>
					{/if}
				</div>
			</div>

				<div class="form-group">
					<label for="project">Type de projet</label>

					<select id="project" name="project">
						<option value="">Sélectionner un type de projet</option>
						<option value="résidentiel">Résidentiel</option>
						<option value="commercial">Commercial</option>
						<option value="design-intérieur">Design d'intérieur</option>
						<option value="autre">Autre</option>
					</select>
				</div>

				<div class="form-group">
					<label for="message">Message</label>
					<textarea
						id="message"
						name="message"
						class:has-error={form?.errors?.message}
						required
					></textarea>
					{#if form?.errors?.message}
						<p class="error-msg" transition:slide={{ duration: 300 }}>
							<span class="material-symbols-outlined text-[1rem]">error</span>
							{form.errors.message}
						</p>
					{/if}
				</div>

				<button type="submit" class="submit-btn" disabled={loading}>
					{#if loading}
						<span class="material-symbols-outlined spin-icon">sync</span>
						Envoi en cours...
					{:else}
						Envoyer
					{/if}
				</button>

			</form>
			{/if}

		</div>
	</div>
</section>

<style>
	/* -- Honeypot -- */
	.hidden-field {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		height: 0;
		width: 0;
		z-index: -1;
	}

	/* -- Input Errors -- */
	.has-error {
		border-color: #ef4444 !important; /* Rouge doux */
		background-color: rgba(239, 68, 68, 0.05) !important;
	}

	.error-msg {
		color: #ef4444;
		font-size: 0.85rem;
		margin-top: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	/* -- Loading button -- */
	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.spin-icon {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		100% { transform: rotate(360deg); }
	}

	/* -- Success State -- */
	.success-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 4rem 2rem;
		background: var(--dusty-rose, #f5efe6); /* Fallback doux au cas où */
		border-radius: 4px;
		color: var(--ink-black, #1a1a1a);
	}

	.success-icon {
		font-size: 3rem;
		color: #10b981; /* Emeraude */
		margin-bottom: 1rem;
	}

	.success-title {
		font-family: var(--font-serif);
		font-size: 1.75rem;
		margin-bottom: 0.5rem;
	}

	.success-text {
		color: rgba(0,0,0,0.6);
		font-size: 1rem;
		max-width: 400px;
	}
</style>