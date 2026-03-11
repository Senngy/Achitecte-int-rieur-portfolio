<script>
	import { projets } from '$lib/data/projets.js';
	import BurgerMenu from '$lib/components/layout/BurgerMenu.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<div class="screen">
	{#each projets as projet, i}
		<section class="projet {i % 2 === 0 ? 'normal' : 'inverse'}">
			<div class="img-pres">
				<img src={projet.imgPres} alt="Présentation du projet" />
			</div>
			<div class="side-block">
				<div class="text">
					<h2>{projet.titre}</h2>
					<p>{projet.description}</p>
				</div>
				<div class="images {i % 2 === 0 ? 'normal-img' : 'inverse-img'}">
					<div class="solo-img">
						<img src={projet.plan} alt="plan" />
					</div>
					<div class="block-img">
						<div class="up-img">
							<img src={projet.croqui} alt="croquis" />
						</div>
						<div class="down-img">
							<img src={projet.coupe} alt="coupe" />
						</div>
					</div>
				</div>
			</div>
		</section>
	{/each}
	<Footer />
</div>

<style>
	.screen {
		width: 100%;
		background-image: linear-gradient(120deg, #ece4c9 0%, #ebb5a7 100%);
		min-height: fit-content;
		padding-bottom: 2rem;
		overflow: hidden;
	}

	/* Bloc projet */
.projet {
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: stretch; /* étire .img-pres et .side-block à la même hauteur */
	/*gap: clamp(1rem, 3vw, 3rem);*/
	flex-wrap: wrap;
	max-width: 1440px;
	margin: 0 auto 5rem auto;
    
}

.projet.inverse {
	flex-direction: row-reverse;

}

/* Image principale */
.img-pres {
	width: clamp(280px, 32vw, 467px);
	flex-shrink: 0;
}

.img-pres img {
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;
}

/* Side block */
.side-block {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
    padding: 0 2rem;
	/* ✅ plus besoin de height: clamp(...) */
}

	.text {
		margin-bottom: 1rem;
	}
	.text h2 {
		color: #000;
		font-size: clamp(28px, 4vw, 48px); /* titre fluide */
		line-height: 1.2;
	}
	.text p {
		max-width: 840px;
		color: #000;
		text-align: justify;
		font-size: clamp(14px, 1.5vw, 18px); /* texte fluide */
		line-height: 1.5;
		margin-top: 0.8rem;
	}

	/* Images secondaires */
	.images {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: stretch; /* force les deux colonnes à avoir la même hauteur */
}

.solo-img,
.block-img {
  flex: 1; /* prennent la même largeur si possible */
  display: flex;
  flex-direction: column;
}

.solo-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.block-img {
  gap: 2rem; /* l’espace entre haut et bas */
}

.up-img,
.down-img {
  flex: 1; /* prennent la place dispo proportionnellement */
}

.up-img {
  flex: 2; /* deux fois plus haut que down-img */
}

.down-img {
  flex: 1;
}
	.down-img img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}
</style>
