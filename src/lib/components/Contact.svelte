<script>
	import Input from './Input.svelte';
     import { enhance } from '$app/forms';

	let { onClose = () => {}, form } = $props();

	let email = $state(''); //
	let name = $state(''); //
	let company = $state(''); // Confirmation du nouveau mot de
	let message = $state('');
	let error = $state(''); // Message d'erreur
	let success = $state(''); // Message de succès

</script>

<div class="popup-content">
	{#if error || form?.error}
		<p class="error">{error || form?.error}</p>
	{/if}
	<h3>N'hésiter pas à m'envoyer un message</h3>
	<form method="POST" action="?/contact" use:enhance>
		<div class="input-group">
			<Input
                name='email'
				id="email"
				type="email"
				label="Votre email"
				placeholder="Email"
				bind:value={email}
				error={form?.errors?.email}
			/>
		</div>
		<div class="input-group">
			<Input
                name='name'
				id="name"
				type="text"
				label="Votre identité"
				placeholder="Nom Prénom"
				bind:value={name}
				error={form?.errors?.name}
			/>
		</div>
		<div class="input-group">
			<Input
                name='company'
				id="company"
				type="text"
				label="Vous êtes une société ?"
				placeholder="Société (optionnel)"
				bind:value={company}
			/>
		</div>
		<div class="input-group">
			<textarea
				name="message"
				id="message"
				label="message"
				placeholder="Votre message ici"
				bind:value={message}
			></textarea>
			{#if form?.errors?.message}
				<p class="error">⚠️ {form?.errors?.message}</p>
			{/if}
		</div>
		<div class="buttons">
			<button class="btn confirm" type="submit">Confirmer</button>
			<button class="btn cancel" type="button" on:click={onClose}>Annuler</button>
		</div>
	</form>
	{#if form?.success}
		<p class="success">{form.success}</p>
	{/if}
</div>

<style>
	.popup-content {
		/*
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 2rem;
    */
		/* padding: 20px; */
		border-radius: 10px;
		text-align: center;
		color: white;
	}
	.error {
		color: #ef4444;
		font-size: 0.875rem;
		margin-top: 0.25rem;
		padding-left: 2rem;
		margin-bottom: 10px;
	}
	textarea .error {
		border: 2px solid #ef4444; /* rouge clair */
		background: rgba(255, 0, 0, 0.1);
	}
	.input-group {
		margin: 1rem 0;
	}
	.btn {
		margin: 0 1rem;
        background-color: rgba(0, 0, 0, 0.199);
        border: 1px solid rgba(0, 0, 0, 0.389);
        padding: 0.4rem 0.6rem;
        border-radius: 24px ;
	}
    .btn:hover {
        background-color: rgba(100, 98, 98, 0.571);
        cursor: pointer;
    }
	.success {
		color: #a3cca4;
		text-align: center;
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
	.input-group textarea {
		width: 100%;
		padding: 10px 20px;
		border: none;
		border-radius: 25px;
		background: rgba(255, 255, 255, 0.2);
		color: white;
		font-size: 14px;
		min-height: 6rem;
	}
	textarea {
		font-weight: bold;
		margin-bottom: 0.3rem;
		display: block;
		padding-left: 2rem;
		/* or text-align: center; */
	}
	textarea::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}
</style>
