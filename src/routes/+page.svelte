<script>
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	import Hero from '$lib/sections/home/Hero.svelte';
	import Contact from '$lib/sections/home/Contact.svelte';
	import Services from '$lib/sections/home/Services.svelte';
	import Works from '$lib/sections/home/Works.svelte';
	import About from '$lib/sections/home/About.svelte';
	import { onMount } from 'svelte';
	import { reveal } from '$lib/utils/reveal';
	import { slides } from '$lib/data/slides';

	let { form } = $props();

onMount(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => reveal(el));
});
	
</script>
 <!-- Grid Lines (toggleable) -->
 

	<div class="page-content">
		<Navbar />
		<Hero {slides}/>
		<About />
		<Works />
		<Services />
		<Contact {form} />
		<Footer />
    </div>
	