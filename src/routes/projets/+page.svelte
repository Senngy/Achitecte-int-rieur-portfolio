<script>
    import Navbar from "$lib/components/layout/Navbar.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import Carousel3D from "$lib/components/Carousel3D.svelte";
    import ProjectDetail from "$lib/components/ProjectDetail.svelte";
    import { reveal } from '$lib/utils/reveal';
    import { onMount } from 'svelte';
    
    let { data } = $props();
    let projets = $derived(data.projets);
    let currentIndex = $state(0);

    const activeProject = $derived(
       projets?.[currentIndex] ?? {}
    );

    onMount(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => reveal(el));
    });
</script>

<Navbar />
<main class="pt-32 pb-24">
        <!-- Section Header -->
        <div class="px-8 mb-16 text-center fade-in">
            <h1 class="font-headline text-5xl md:text-7xl font-light tracking-tighter text-on-surface mb-4">Travaux</h1>
            <div class="flex items-center justify-center gap-2">
                <span class="w-12 h-[1px] bg-outline-variant/40"></span>
                <span class="font-label text-[10px] uppercase tracking-[0.2em] text-outline">Portfolio 2026</span>
                <span class="w-12 h-[1px] bg-outline-variant/40"></span>
            </div>
        </div>
        <!-- 3D Sculpture Carousel -->
        
        <!-- Project Details (Reveal Section) -->
        <section class="w-full mx-0 px-8 fade-in">
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center ml-10">
               
                  <ProjectDetail {activeProject} />
                
               
                    <Carousel3D {projets} bind:currentIndex />
                
            </div>
        </section>
        <!-- Bento Grid Details (Tactile Context) -->
        <section class="mt-32 px-8 max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    class="md:col-span-2 bg-surface-container-low p-12 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
                    <img class="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-20 group-hover:scale-105 transition-transform duration-1000"
                        alt="close-up of hand-brushed light oak wood grain with soft directional lighting"
                        src="/images/sketch.jpg" />
                    <div class="relative z-10">
                        <h3 class="font-headline text-3xl font-light mb-4 italic">Material Sensitivity</h3>
                        <p class="font-body text-on-surface-variant max-w-md">Our approach begins with the raw state of
                            materials. We source stones from Alpine quarries and timber from sustainably managed local
                            forests.</p>
                    </div>
                </div>
                <div class="bg-secondary-container p-12 flex flex-col items-center justify-center text-center">
                    <span class="material-symbols-outlined text-4xl mb-6 text-on-secondary-container"
                        data-weight="fill">architecture</span>
                    <h3 class="font-headline text-2xl font-light mb-4 text-on-secondary-container">Technical Precision
                    </h3>
                    <p class="font-body text-on-secondary-container/80 text-sm">Every joint is a structural statement.
                        We collaborate with master craftsmen to ensure 0.5mm tolerances.</p>
                </div>
            </div>
        </section>
    </main>
    <Footer />


