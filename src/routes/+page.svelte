<script>
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	import Hero from '$lib/sections/Hero.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Services from '$lib/sections/Services.svelte';
	import Works from '$lib/sections/Works.svelte';
	import About from '$lib/sections/About.svelte';
	import { onMount } from 'svelte';
	import { reveal } from '$lib/utils/reveal';


onMount(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => reveal(el));
});

	const slides = [
		{
			img: '/images/projets/projet1/interieur.jpg',
			alt: 'Elegant interior',
			title: 'Espaces de vie sensibles',
			location: 'Paris, France',
			number: '01'
		},
		{
			img: '/images/projets/projet2/interieur.jpg',
			alt: 'Minimalist interior',
			title: 'L\'élégance du quotidien',
			location: 'Lyon, France',
			number: '02'
		}
	];

	
</script>
 <!-- Grid Lines (toggleable) -->
 

	<div class="page-content">
		<Navbar />
		<Hero {slides}/>
		<About />
		<Works />
		<Services />
		<Contact />
		<Footer />
    </div>
	