<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { data } = $props();

	

	const description1 = `Bienvenue sur mon portfolio ! Je suis Laëtitia, architecte d'intérieur
	                     passionnée par la création d'espaces uniques et fonctionnels. Mon travail 
						 allie esthétique et praticité pour transformer vos idées en réalité. 
						 Explorez mes projets pour découvrir comment je peux donner vie à votre vision.`;
	const description2 = `Avec une attention particulière aux détails et un sens aigu de l'esthétique, 
	                     je m'efforce de créer des environnements qui inspirent et enchantent.
						 Que ce soit pour un espace résidentiel ou commercial, je mets tout en œuvre
						 pour réaliser des designs qui répondent à vos besoins et dépassent vos attentes.`;
</script>

<main>
	
	<div class="content">
		<div class="image-content">
			<Carousel
				photos={[
					{ src: '/images/concept.webp', alt: 'Photo 1' },
					{ src: '/images/interieur.jpg', alt: 'Photo 2' },
					{ src: '/images/plan.jpg', alt: 'Photo 3' }
				]}
				autoPlay={true}
				interval={5000}
				showControls={true}
				loop={true}
			/>
		</div>
		<div class="pres-content">
			<div class="header">
				<div class="title">
					<h1>Laëtitia MORICEAU</h1>
				</div>
				<div class="legend">
					<h2>Architecte d'intérieur</h2>
				</div>
			</div>
			<div class="profile-pic">
				<img src="/images/Avatar.jpeg" alt="Laëtitia's profile picture" />
				<div class="first-description">
					<p>
						{description1}
					</p>
				</div>
			</div>

			<div class="scnd-description">
				<p>
					{description2}
				</p>
			</div>
			<Footer customCSS="static-bottom" />
		</div>
	</div>
</main>


<style>
	main {
		position: relative;
	}
	
	.content {
		display: flex;
		background-image: linear-gradient(120deg, #ece4c9 0%, #ebb5a7 100%);
	}

	.image-content {
		background-color: #333;
		width: 100%;
		max-width: 50vw;
		margin: 0 auto;
		height: 100vh;
	}

	.pres-content {
		padding: 80px 50px;
		text-align: center;
		max-width: 50vw;
		width: 100%;
		margin: 0 auto;
		min-height: 100vh;
	}
	h1 {
		font-size: 2.5rem;
	}
	p {
		font-size: 1.1rem;
		color: #666;
	}
	img {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
		margin-right: 1rem;
		margin-bottom: 2rem;
	}
	.header {
		display: flex;
		align-items: end;
		justify-content: space-between;
		margin-bottom: 3rem;
		margin-right: 2rem;
	}
	.profile-pic {
		margin-right: 20px;
		display: flex;
	}
	.profile-pic img {
		width: 150px;
		height: 150px;
		/*border-radius: 50%; */
		border: 2px solid #fff;
	}
	.title {
		text-align: left;
	}
	.title h1 {
		margin: 0;
		font-size: 2rem;
	}
	.legend {
		margin-left: 1rem;
		padding-bottom: 5px;
	}
	.legend h2 {
		margin: 5px 0 0;
		font-size: 1.2rem;
	}
	.description {
		margin-top: 20px;
		text-align: justify;
	}
	.description p {
		font-size: 1rem;
		line-height: 1.3;
		color: #444;
	}
	.first-description {
		margin-left: 1rem;
	}
	/* Responsive styles */
	@media (max-width: 768px) {
		.content {
			flex-direction: column;
			min-width: 100vw;
		}
		.image-content {
			max-height: 50vh;
			min-width: 100vw;
		}
		.pres-content {
			min-width: 100vw;
		}
	}
</style>
