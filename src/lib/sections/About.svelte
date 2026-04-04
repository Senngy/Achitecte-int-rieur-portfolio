 <script>
    import { onMount } from 'svelte';
    import { reveal } from '$lib/utils/reveal';

    onMount(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => reveal(el));
    });
 </script>
 <!-- About Section -->
    <section id="about" class=" section fade-in">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 fade-in">
            <div class="section-header fade-in px-8">
                <span class="label">02</span>
                <div class="line"></div>
                <span class="label">Laëtitia Moriceau - Architecte et designer d'intérieur</span>
            </div>
            </div>
            <div class="min-w-screen max-w-6xl mx-auto flex flex-col md:flex-row items-baseline gap-12 md:gap-24 fade-in">
                <div class="w-full md:w-1/3">
                    <span
                        class="text-[0.6875rem] uppercase tracking-widest text-outline font-label block mb-4">Philosophy</span>
                    <h2 class="text-4xl md:text-5xl font-light leading-tight font-serif text-on-surface italic">
                        Sensitivity in every curve, warmth in every shadow.
                    </h2>
                </div>
                <div class="w-full md:w-2/3">
                    <p class="text-lg leading-relaxed font-body font-light text-on-surface-variant max-w-2xl">
                        At FORMA &amp; RAUM, we believe that architecture is not merely the construction of walls, but
                        the curation of human experience. Our studio focuses on the delicate balance between raw
                        materiality and refined elegance. We create environments that breathe, evolving with the light
                        of the day and the rhythm of the soul.
                    </p>
                    <div class="mt-8 flex gap-4">
                        <span
                            class="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[0.6875rem] font-label tracking-wide">Hand-brushed
                            Oak</span>
                        <span
                            class="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[0.6875rem] font-label tracking-wide">Natural
                            Linen</span>
                        <span
                            class="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-[0.6875rem] font-label tracking-wide">Patinated
                            Brass</span>
                    </div>
                </div>
            </div>
        
    </section>