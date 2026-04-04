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
<main class="pt-24 overflow-x-hidden">
<!-- Hero Header -->
    <section class="relative min-h-screen flex items-center px-8 max-w-screen-2xl mx-auto fade-in">
        <div class="z-10 max-w-3xl">
            <span class="font-inter text-xs uppercase tracking-[0.2em] text-primary/60 mb-6 block">Expertise Architecturale</span>
            <h1 class="text-6xl md:text-8xl font-light tracking-tight text-on-background leading-[1.1] mb-8">
                Nos Services
            </h1>
            <p class="text-lg text-on-surface-variant font-light max-w-xl leading-relaxed">
                Nous sculptons l'espace pour créer des environnements qui respirent. Entre rigueur technique et sensibilité artistique, notre studio définit une nouvelle poésie de l'habitat.
            </p>
        </div>
        <div class="absolute right-0 top-0 w-1/2 h-full hidden lg:block overflow-hidden rounded-bl-[10rem]">
            <img class="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" data-alt="Minimalist luxury interior with natural sunlight streaming onto a raw oak table and neutral linen curtains in a spacious room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9kvuusYCXF_N5LDWgfgaQtxg7pzUZvTcqMJL5UQ6IUj5KeZfhNf4mDyqFIHIteahKMelfJ9jJOrDEFwRHmShGKMb9ZVAhs7vCm6jYK21ppJucsQWjhyB3of1_Zu42ej7YpF-4nIwJmFGWO7OeDBzxld5py3RIX3iJB_abaDn3Q4lEwF6UxOD-wKpywlAGnI1HJe6jZzKQXxOrjQtp7yHH55ND07ansj8AVWC8mr-8ZBwcjR1-YBy0JfwUXT4XM-VeIThbl7PAs5I"/>
        </div>
    </section>
<!-- Detailed Services Section (Editorial Layout) -->
    <section class="py-12 px-8 bg-surface-container-low fade-in">
        <div class="max-w-screen-2xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2  items-start">
<!-- Service 01 -->
                <div class="space-y-8 group px-8">
                    <span class="text-tertiary font-notoSerif italic text-2xl">01</span>
                    <h2 class="text-4xl font-light border-b border-outline-variant/30 pb-6">Architecture d'intérieur</h2>
                    <p class="text-on-surface-variant font-light leading-relaxed">
                        Nous repensons les volumes pour optimiser le flux naturel de l'espace. Notre approche technique garantit la faisabilité structurelle tout en libérant le potentiel esthétique caché de chaque structure.
                    </p>
                    <div class="flex gap-4">
                        <span class="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-xs font-inter tracking-wide">Volume</span>
                        <span class="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-xs font-inter tracking-wide">Structure</span>
                    </div>
                </div>
<!-- Service 02 -->
                <div class="space-y-8 mt-12 md:mt-48 group px-8">
                    <span class="text-tertiary font-notoSerif italic text-2xl">02</span>
                    <h2 class="text-4xl font-light border-b border-outline-variant/30 pb-6">Design résidentiel</h2>
                    <p class="text-on-surface-variant font-light leading-relaxed">
                        La création d'un sanctuaire personnel. Nous sélectionnons des matériaux bruts et nobles — chêne brossé, pierre calcaire, lin pur — pour composer une palette tactile qui raconte votre histoire.
                    </p>
                    <div class="flex gap-4">
                        <span class="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-xs font-inter tracking-wide">Matière</span>
                        <span class="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-xs font-inter tracking-wide">Atmosphère</span>
                    </div>
                </div>
<!-- Service 03 -->
                <div class="space-y-8 group px-8">
                    <span class="text-tertiary font-notoSerif italic text-2xl">03</span>
                    <h2 class="text-4xl font-light border-b border-outline-variant/30 pb-6">Direction artistique</h2>
                    <p class="text-on-surface-variant font-light leading-relaxed">
                        Un regard holistique sur votre projet. Du mobilier sur mesure à la sélection d'œuvres d'art, nous assurons une cohérence visuelle absolue qui transcende la simple décoration.
                    </p>
                    <div class="flex gap-4">
                        <span class="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-xs font-inter tracking-wide">Curations</span>
                        <span class="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-xs font-inter tracking-wide">Esthétique</span>
                    </div>
                </div>
<!-- Service 04 -->
                <div class="space-y-8 mt-12 md:mt-48 group px-8">
                    <span class="text-tertiary font-notoSerif italic text-2xl">04</span>
                    <h2 class="text-4xl font-light border-b border-outline-variant/30 pb-6">Conseil et consultation</h2>
                    <p class="text-on-surface-variant font-light leading-relaxed">
                        Expertise technique et stratégique pour vos projets immobiliers. Analyse de potentiel, études de faisabilité et accompagnement décisionnel pour vos investissements de caractère.
                    </p>
                    <div class="flex gap-4">
                        <span class="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-xs font-inter tracking-wide">Expertise</span>
                        <span class="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-xs font-inter tracking-wide">Stratégie</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- Savoir-faire Technique Section (Bento Grid) -->
    <section class="py-12 px-8 bg-surface fade-in">
        <div class="max-w-screen-2xl mx-auto">
            <div class="mb-20">
                <h2 class="text-5xl font-light tracking-tight mb-4">Savoir-faire Technique</h2>
                <p class="text-primary/70 font-inter text-sm uppercase tracking-widest italic">Du tracé à la réalité</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
<!-- Plan Detail -->
                <div class="md:col-span-8 bg-surface-container relative overflow-hidden group rounded-lg">
                    <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Detailed architectural blueprints and technical drawings on a architect's desk with soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0FJYsaezMG2-dmAbSlQM6GL6sv4DqbYH5MHajQ_eiFPWU3tLKtqaRX5ra_D5sQlaeF43PrtMdVTwO2PCbnSBS07Zc-GVl4znyOwuR7-HhS5nIjKvJ0mSmlgFx69LbqWmMy0RPSnWwVSd92NP5Z_ttFtL-JBZ3dp08I6fWlvIKsojYuj1r1E3GXIeS3Rl4zJQ0qH9dkDFEeWf2WiFzyRw7c4F6ddz-YOPBlYm7E5T1fkNotbui0KppjNZUPatxHCzSRZj230L0OS8"/>
                    <div class="absolute bottom-0 left-0 p-12 bg-gradient-to-t from-on-background/40 to-transparent w-full">
                        <h3 class="text-white text-2xl font-light">Précision Structurelle</h3>
                        <p class="text-white/80 font-light text-sm mt-2">Études détaillées et plans d'exécution rigoureux.</p>
                    </div>
                </div>
<!-- Sketch Detail -->
                <div class="md:col-span-4 bg-[#f2ded8] flex flex-col justify-center p-12 rounded-lg">
                    <span class="material-symbols-outlined text-4xl text-tertiary mb-6" data-icon="edit_note">edit_note</span>
                    <h3 class="text-3xl font-light mb-6">L'Esquisse</h3>
                    <p class="text-on-tertiary-fixed-variant leading-relaxed font-light">
                        Chaque projet naît d'un geste. Nos croquis à la main capturent l'âme de l'espace avant même que le premier mur ne soit érigé.
                    </p>
                </div>
<!-- Material Swatch -->
                <div class="md:col-span-4 bg-secondary-container p-12 flex flex-col justify-end rounded-lg">
                    <h3 class="text-2xl font-light mb-4">Echantillonnage</h3>
                    <p class="text-on-secondary-container font-light text-sm">Sélection rigoureuse des textures et des teintes pour une harmonie sensorielle.</p>
                    <div class="mt-8 flex space-x-2">
                        <div class="w-8 h-8 rounded-full bg-[#68594a]"></div>
                        <div class="w-8 h-8 rounded-full bg-[#d0c4bb]"></div>
                        <div class="w-8 h-8 rounded-full bg-[#bfcab8]"></div>
                    </div>
                </div>
<!-- Realized Space -->
                <div class="md:col-span-8 bg-surface-container-highest overflow-hidden group rounded-lg">
                    <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modern interior design project completed with custom wood joinery and minimalist furniture in soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnowl_KpVo7n4BTuJ_ItgvtHTqmADKpIrtbNNBmohCC7Mt3Xmou7_8A220aBLMf85UQ_-W8gkt818ZRF6ErdQf8uP436fR2hRucv7H3JJJv-oPKHOipdfa-mfU1iuS4Y7u3OJqtl6BW-ZSP5wE2jC0IeT9pVesFTSdg5TrsQ-9b8o9RQq4rO-fAfQokYLOw78eIGs2aQySr5CyU5xySKD0yoxsDX0MB06bp1szMUGzZs6cXODPbCTwsQSv3PxVsOqT0B_2w0RIw60"/>
                </div>
            </div>
        </div>
    </section>
<!-- Work Process Timeline -->
    <section class="py-12 px-8 bg-surface-container fade-in">
        <div class="max-w-screen-2xl mx-auto">
            <div class="text-center mb-24">
                <h2 class="text-5xl font-light mb-6">Notre Processus</h2>
                <p class="text-on-surface-variant max-w-lg mx-auto font-light">Une méthodologie structurée pour transformer une vision en une adresse d'exception.</p>
            </div>
            <div class="relative">
<!-- Progress Line (Desktop) -->
                <div class="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -translate-y-1/2"></div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
<!-- Phase 1 -->
                    <div class="relative bg-surface p-12 rounded-lg text-center shadow-sm">
                        <h3 class="text-2xl font-light mb-4">Concept &amp; Esquisses</h3>
                        <p class="text-on-surface-variant text-sm font-light leading-relaxed">
                            Immersion dans vos besoins, définition de la ligne esthétique et premières esquisses de volume.
                        </p>
                    </div>
<!-- Phase 2 -->
                    <div class="relative bg-surface p-12 rounded-lg text-center shadow-sm">
                        <h3 class="text-2xl font-light mb-4">Planification Technique</h3>
                        <p class="text-on-surface-variant text-sm font-light leading-relaxed">
                            Élaboration des plans détaillés, choix des matériaux et consultation des artisans spécialisés.
                        </p>
                    </div>
<!-- Phase 3 -->
                    <div class="relative bg-surface p-12 rounded-lg text-center shadow-sm">
                        <h3 class="text-2xl font-light mb-4">Coordination &amp; Suivi</h3>
                        <p class="text-on-surface-variant text-sm font-light leading-relaxed">
                            Direction des travaux, respect des délais et des standards de haute facture jusqu'à la livraison.
                        </p>
                        </div>
                </div>
            </div>
        </div>
    </section>
<!-- Contact CTA -->
    <section class="py-12 px-8 text-center bg-surface relative overflow-hidden fade-in">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tertiary-fixed via-transparent to-transparent"></div>
        </div>
        <div class="max-w-2xl mx-auto relative z-10">
            <h2 class="text-6xl font-light mb-12 tracking-tight">Donnons vie à votre espace.</h2>
            <p class="text-lg text-on-surface-variant font-light mb-12 leading-relaxed">
                Chaque projet commence par une conversation. Contactez-nous pour une première consultation et découvrez comment nous pouvons transformer votre intérieur.
            </p>
            <a class="inline-block bg-primary text-on-primary px-12 py-5 rounded-md font-inter text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-all transform hover:-translate-y-1" href="#">
                Commencer un projet
            </a>
        </div>
    </section>
</main>
<!-- Footer -->
<Footer />