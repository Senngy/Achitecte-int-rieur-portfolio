<script lang="ts">
import { onMount } from "svelte";
import { reveal } from "$lib/utils/reveal";
	let form: HTMLFormElement;

onMount(() => {
	const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => reveal(el));
});
	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		alert("Merci pour votre message. Nous vous contacterons rapidement.");

		form.reset();
	}
</script>

<section id="contact">
	<div class="grid-container">

		<div class="section-header fade-in">
			<span class="label">04</span>
			<div class="line"></div>
			<span class="label">Contactez-moi</span>
		</div>

		<div class="contact-content fade-in">

			<h2 class="contact-title">
				Créons ensemble quelque chose d'extraordinaire.
			</h2>

			<form
				class="contact-form"
				bind:this={form}
				on:submit={handleSubmit}
			>
			<div class="personal-info">
				<div class="form-group">
					<label for="name">Nom</label>
					<input
						type="text"
						id="name"
						name="name"
						required
					/>
				</div>

				<div class="form-group">
					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						required
					/>
				</div>
			</div>

				<div class="form-group">
					<label for="project">Type de projet</label>

					<select id="project" name="project">
						<option value="">Sélectionner un type de projet</option>
						<option value="residential">Résidentiel</option>
						<option value="commercial">Commercial</option>
						<option value="interior">Design d'intérieur</option>
						<option value="other">Autre</option>
					</select>
				</div>

				<div class="form-group">
					<label for="message">Message</label>
					<textarea
						id="message"
						name="message"
						required
					></textarea>
				</div>

				<button type="submit" class="submit-btn">
					Envoyer
				</button>

			</form>

		</div>
	</div>
</section>