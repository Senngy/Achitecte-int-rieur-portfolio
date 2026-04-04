<script>
    import Navbar from "$lib/components/layout/Navbar.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";

    import { onMount } from 'svelte';
    import { reveal } from '$lib/utils/reveal';


onMount(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => reveal(el));
});

</script>
<Navbar />
<main class="pt-24 pb-4">
<!-- Hero Section: The Soul of the Space -->
  <section class="px-1 md:px-12 lg:px-24 h-screen fade-in">
    <div class="max-w-7xl mx-auto max-h-screen">
      <div class="flex flex-col lg:flex-row items-end gap-16">
        <div class="w-full lg:w-4/5 order-2 lg:order-1">
          <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-tight text-on-surface mb-12">
            L'âme <br/><span class="italic pl-12 md:pl-24">dans l'espace</span>
          </h1>
          <p class="text-sm uppercase tracking-[0.2em] text-outline mb-6">Vision</p>
          <p class="text-lg leading-relaxed text-on-surface-variant font-light max-w-md text-justify">
            L'architecture et le design d'intérieur reflètent la conversation silencieuse entre l'âme et l'espace. Mon objectif n'est pas seulement de créer des espaces, mais de créer des expériences qui résonnent avec les énergies qui vous définissent.
          </p>
        </div>
        <div class="w-full lg:w-7/12 order-1 lg:order-2">
          <div class="relative">
            <img class="w-full object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-1000" data-alt="Elegant portrait of a designer with short dark hair in a soft-lit architectural studio, wearing a neutral linen shirt, warm natural sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4dN5_wIzWxCdillXraCbs_qqVC4aRR3mAtX3NNYKbXMelmHjIYqJz9rpX_bfoYGcG5feJnpLrEI2gF493KOi9bOBX6hnmHQ1gqFjoQaEvSKG8-XB7E7AxDs1JjJDNQyOc7RVUL63mGFUrcaMuTg4aVASUpCaAT2b0XaM6xu6UzVp91fzeqzseCo52RRH8JIbTkH38voTWtNe-LbyFdp3SHMGTR-QsXNd5Xj-DCc2NhVIchGRP4CbG4WA7ZHZnVr5insSYOD_DeWY"/>
            <div class="absolute -bottom-8 -left-8 bg-surface-container-highest p-8 hidden md:block">
              <span class="text-[0.6875rem] uppercase tracking-widest block mb-2">Architecte et designer d'intérieur</span>
              <span class="font-serif text-2xl font-light italic">Laëtitia Moriceau</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- Narrative: Organic Resonance -->
  <section class="tonal-carving py-32 px-8 md:px-12 lg:px-24 fade-in">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <!-- Left Column: Vision Statement -->
        <div class="lg:col-span-5">
          <h2 class="font-serif text-4xl font-light tracking-tight mb-12 text-on-surface">La résonnance avec votre espace</h2>
          <blockquote class="font-serif text-3xl italic leading-snug text-primary mb-12 relative">
            <span class="absolute -left-8 -top-4 opacity-10 text-8xl font-serif">“</span>
            The most beautiful interiors are those where the boundary between the internal self and the external environment ceases to exist.
          </blockquote>
          <div class="flex items-center gap-4">
            <div class="w-12 h-[1px] bg-outline-variant"></div>
            <span class="text-[0.6875rem] uppercase tracking-widest text-outline">Notre principe directeur</span>
          </div>
        </div>
        <!-- Right Column: Deep Dive -->
        <div class="lg:col-span-7 space-y-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="space-y-6">
              <p class="text-[0.875rem] leading-relaxed text-on-surface-variant">
                Mon approche repose sur l'art de l'élégance soustractive. En supprimant le superflu, je laisse parler les textures brutes de la pierre, du chêne et du lin. Ma philosophie de la résonance organique dicte que chaque choix de matériau doit s'aligner sur la fréquence naturelle du site.
              </p>
              <p class="text-[0.875rem] leading-relaxed text-on-surface-variant">
                Je crois qu'un espace doit respirer. Mes créations privilégient l'espace négatif, permettant le mouvement de l'air et des pensées, créant un sanctuaire pour l'esprit moderne.
              </p>
            </div>
            <div class="space-y-6">
              <p class="text-[0.875rem] leading-relaxed text-on-surface-variant">
                Chaque projet est une étude de la tactilité. La façon dont une main ressent le grain d'une poignée de porte ou la fraîcheur d'un rebord en marbre est aussi importante pour moi que la silhouette visuelle.
              </p>
              <div class="pt-8">
                <div class="inline-flex items-center gap-3 px-4 py-2 bg-tertiary-fixed rounded-full">
                  <span class="w-2 h-2 rounded-full bg-on-tertiary-fixed-variant"></span>
                  <span class="text-[0.6875rem] uppercase tracking-widest text-on-tertiary-fixed font-medium">Chêne brossé à la main</span>
                </div>
                <p class="mt-4 text-[0.75rem] italic text-outline">Une de mes textures signature utilisée dans le studio de Berlin.</p>
              </div>
            </div>
          </div>
          <!-- Image Inset -->
          <div class="mt-12">
            <img class="w-full aspect-[16/7] object-cover rounded-sm grayscale-[10%]" data-alt="Minimalist interior with warm light hitting a raw stone wall and a single sculptural chair, clean lines, high-end architectural photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxdfTSA3kXYlWBKRW98CTmkdUhuNJ75PpI-UkwmXhXVs5--1f8ldbKflbhpTF0ZOR46Nj5EKPqVVee4N2r2Kp5oTifX0Mp40LjR4wqWX_RhKGcUBpR4a6wimhRKkVWhq3w9oIdjWJcPATB6vEpKTt0H1HjGWVH3Xmz3XcvwTdCs0GiHO4Phw_8wZsc7ROFjRQbiptg7em5BU1CFApfuHStD4HDROt8z1YJ4Wdt2MA64Bu3mEY3rXzvyhKDCRqFFaKM8kjQKmwsQ4M"/>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- CTA Section -->
<section class="py-12 px-8 flex flex-col items-center text-center fade-in">
  <h3 class="font-serif text-4xl md:text-5xl font-light mb-12 tracking-tight">La vision devient réalité par <span class="italic">le dialogue.</span></h3>
  <a class="group relative overflow-hidden bg-primary text-on-primary px-10 py-5 rounded-md transition-all duration-700 ease-in-out hover:opacity-90" href="#">
    <span class="relative z-10 text-[0.6875rem] uppercase tracking-[0.2em] font-medium">Créons quelque chose ensemble</span>
  </a>
  <div class="mt-12 flex items-center gap-8">
    <div class="flex flex-col items-center">
      <span class="text-[0.6875rem] uppercase tracking-widest text-outline mb-2">Demande</span>
      <span class="text-sm font-light">[EMAIL_ADDRESS]</span>
    </div>
    <div class="w-[1px] h-12 bg-outline-variant opacity-30"></div>
      <div class="flex flex-col items-center">
        <span class="text-[0.6875rem] uppercase tracking-widest text-outline mb-2">Lieu</span>
         <span class="text-sm font-light">Paris, France</span>
      </div>
  </div>
</section>
</main>
<!-- Footer -->
<Footer />
