<script>
    import Navbar from "$lib/components/layout/Navbar.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import Carousel3D from "$lib/components/Carousel3D.svelte";
    import { reveal } from '$lib/utils/reveal';
    import { onMount } from 'svelte';


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
        <Carousel3D />
        <!-- Project Details (Reveal Section) -->
        <section class="max-w-4xl mx-auto px-8 fade-in">
            <div
                class="text-center group border-t border-outline-variant/20 pt-16 hover:border-outline-variant/60 transition-colors">
                <div class="inline-block px-3 py-1 bg-tertiary-fixed rounded-full mb-6">
                    <span class="font-label text-[10px] text-on-tertiary-fixed-variant uppercase tracking-widest">Case
                        Study 01</span>
                </div>
                <h2
                    class="font-headline text-4xl md:text-5xl font-light text-on-surface mb-6 group-hover:italic transition-all">
                    The Hausmann Residence</h2>
                <p
                    class="font-body text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
                    A dialogue between historic limestone and precision-engineered oak. Located in Zurich, this project
                    explores the tension between weight and light through massive volumes and ethereal transitions.
                </p>
                <div class="flex flex-wrap justify-center gap-4 mb-20">
                    <span class="flex items-center gap-2 font-label text-[11px] uppercase tracking-wider text-outline">
                        <span class="material-symbols-outlined text-sm">location_on</span> Zurich, Switzerland
                    </span>
                    <span class="w-1 h-1 rounded-full bg-outline-variant/40 self-center"></span>
                    <span class="flex items-center gap-2 font-label text-[11px] uppercase tracking-wider text-outline">
                        <span class="material-symbols-outlined text-sm">square_foot</span> 420 SQM
                    </span>
                    <span class="w-1 h-1 rounded-full bg-outline-variant/40 self-center"></span>
                    <span class="flex items-center gap-2 font-label text-[11px] uppercase tracking-wider text-outline">
                        <span class="material-symbols-outlined text-sm">calendar_today</span> 2023
                    </span>
                </div>
                <button
                    class="bg-primary text-on-primary px-10 py-4 rounded-md font-label text-[12px] uppercase tracking-[0.2em] hover:bg-primary-container transition-all">
                    View Project Details
                </button>
            </div>
        </section>
        <!-- Bento Grid Details (Tactile Context) -->
        <section class="mt-32 px-8 max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    class="md:col-span-2 bg-surface-container-low p-12 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
                    <img class="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-20 group-hover:scale-105 transition-transform duration-1000"
                        data-alt="close-up of hand-brushed light oak wood grain with soft directional lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5SOlM6PlZt-Q3UOq0MT6KY8Nn6tCjrJpwka-sgjm4cD6yWIIJJweiNINA4iJZq5IoSPQque24hqLGFHF4FH52aGkeVOI5HsJcpO9bsFo44ih1_261OrVP4hi45ihyopA-dA6dg9dDCy3oOM_IQODPaMIenp66MOvHpL8ORxQk2MuWlT_iCkuxhv4V4QZRUOAi4YjWoH5dJHYCTQiP3AZHPRHutHR1udC2GutTy4HsS_VXhandxbfx2nPYWd07_Ps9OAbRFi9vIbk" />
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


