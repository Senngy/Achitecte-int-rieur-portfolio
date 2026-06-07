<script>
    import { onMount } from 'svelte';
    import Navbar from '$lib/components/layout/Navbar.svelte';
    import Footer from '$lib/components/layout/Footer.svelte';
    import { reveal } from '$lib/utils/reveal';
    import ProjectSpace from '$lib/components/ProjectSpace.svelte';

    let { data } = $props();
    const { projet } = $derived(data);

    const basename = (path) => {
        if (!path) return '';
        const s = path.split('/').pop();
        return decodeURIComponent(s).replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    };

    onMount(() => {
        const elements = document.querySelectorAll('.animate-section');
        elements.forEach(el => reveal(el));
    });
</script>

<svelte:head>
    <title>{projet.titre} | Atelier Orée</title>
</svelte:head>

<Navbar />

<main class="bg-surface text-on-surface overflow-x-hidden overflow-y-hidden">
    <!-- Hero Section -->
    <section class="animate-section relative h-screen w-full overflow-hidden fade-in">
        <img class="absolute inset-0 w-full h-full object-cover" alt="{projet.titre}" src="{projet.imgPres[0]}" />
        <div class="absolute inset-0 hero-shadow"></div>
        <div class="relative h-full flex flex-col justify-end p-12 md:p-24 space-y-8">
            <h1 class="text-white text-5xl md:text-8xl font-light font-serif tracking-tight max-w-4xl leading-tight">{projet.titre}</h1>
            <div class="flex flex-wrap gap-12 text-white/80">
                <div class="flex flex-col">
                    <span class="text-[0.6875rem] uppercase tracking-widest opacity-60 mb-2">Emplacement</span>
                    <span class="text-sm font-light uppercase tracking-widest">{projet.lieu}</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[0.6875rem] uppercase tracking-widest opacity-60 mb-2">Année</span>
                    <span class="text-sm font-light uppercase tracking-widest">{projet.annee}</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[0.6875rem] uppercase tracking-widest opacity-60 mb-2">Typologie</span>
                    <span class="text-sm font-light uppercase tracking-widest">{projet.type}</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Combined Project Intro & Material Palette -->
    <section class="animate-section bg-surface min-h-full py-32 md:py-12 px-8 md:px-24 fade-in pb-4 mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <!-- Left Column: Project Intro -->
            <div class="space-y-12">
                <div class="h-px w-24 bg-primary/30"></div>
                <div class="space-y-8">
                    <h2 class="text-3xl font-serif text-on-surface italic leading-relaxed">
                        {projet.tagline || projet.description}
                    </h2>
                    <p class="text-on-surface-variant font-body text-sm leading-relaxed max-w-lg">
                        {projet.description}
                    </p>
                    <p class="text-on-surface-variant font-body text-sm leading-relaxed max-w-lg">
                        Surface: {projet.surface} — Surface habitable soigneusement pensée pour créer une fluidité spatiale maximale. Chaque zone respire et communique avec ses voisines par des transitions architecturales délicates.
                    </p>
                </div>
            </div>
            <!-- Right Column: Material Palette -->
            <div class="space-y-12">
                <div class="flex flex-col space-y-4">
                    <span class="text-[0.6875rem] uppercase tracking-[0.2em] text-primary block">Tactilité &amp; Essence</span>
                    <h3 class="text-4xl font-serif text-on-surface">La Palette de Matières</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {#if projet.palettes && projet.palettes.length > 0}
                        <!-- Primary Material -->
                        <div class="md:col-span-5 aspect-[8/3] md:aspect-auto md:h-full relative overflow-hidden group">
                            <img class="w-full h-full object-cover" alt="{projet.palettes[0].name || basename(projet.palettes[0].src)}" src="{projet.palettes[0].src}" />
                            <div class="absolute bottom-4 left-4 px-3 py-1 bg-surface/90 backdrop-blur rounded-full">
                                <span class="text-[0.625rem] uppercase tracking-widest text-on-surface">{projet.palettes[0].name || basename(projet.palettes[0].src)}</span>
                            </div>
                        </div>
                        <!-- Secondary Materials Grid -->
                        <div class="md:col-span-7 grid grid-rows-2 gap-4 h-auto md:h-full">
                            <div class="grid grid-cols-2 gap-4">
                                {#each projet.palettes.slice(1, 3) as pal}
                                    <div class="aspect-[4/3] md:aspect-auto relative overflow-hidden group">
                                        <img class="w-full h-full object-cover transition-organic" alt="{pal.name || basename(pal.src)}" src="{pal.src}" />
                                        <div class="absolute bottom-4 left-4 px-3 py-1 bg-surface/90 backdrop-blur rounded-full">
                                            <span class="text-[0.625rem] uppercase tracking-widest text-on-surface">{pal.name || basename(pal.src)}</span>
                                        </div>
                                    </div>
                                {/each}
                            </div>
                            {#if projet.palettes.length > 3}
                                <div class="aspect-[8/3] md:aspect-auto relative overflow-hidden group">
                                    <img class="w-full h-full object-cover transition-organic" alt="{projet.palettes[3].name || basename(projet.palettes[3].src)}" src="{projet.palettes[3].src}" />
                                    <div class="absolute bottom-4 left-4 px-3 py-1 bg-surface/90 backdrop-blur rounded-full">
                                        <span class="text-[0.625rem] uppercase tracking-widest text-on-surface">{projet.palettes[3].name || basename(projet.palettes[3].src)}</span>
                                    </div>
                                </div>
                            {/if}
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </section>

    <!-- Plans & Sections -->
    <section class="animate-section bg-white py-12 px-8 md:px-24 fade-in mt-4">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline mb-2 border-b border-outline-variant/20 pb-2">
            <h4 class="text-4xl font-serif text-on-surface mb-8 md:mb-0">Géométries &amp; Plans</h4>
            <span class="text-on-surface-variant font-body text-sm max-w-sm">Analyse technique des plans et coupes. Étude dimensionnelle précise.</span>
        </div>
        <div class="space-y-8">
            {#if projet.plans && projet.plans.length > 0}
                <div class="relative flex justify-center">
                    <div class="absolute inset-0 bg-stone-50/50 -z-10 transform scale-110 blur-3xl rounded-full"></div>
                    <img class="w-full max-w-5xl h-auto grayscale hover:grayscale-0 transition-organic opacity-80 mix-blend-multiply" alt="Plan architectural du projet" src="{projet.plans[0]}" />
                </div>
            {/if}
            {#if projet.coupes && projet.coupes.length > 0}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div class="space-y-8">
                        <span class="text-[0.6875rem] uppercase tracking-widest text-primary">Coupe AA'</span>
                        <img class="w-full h-[400px] object-contain grayscale hover:grayscale-0 transition-organic opacity-60" alt="Coupe architecturale AA'" src="{projet.coupes[0]}" />
                    </div>
                    <div class="flex flex-col justify-center">
                        <p class="text-on-surface-variant font-body text-sm italic leading-relaxed">
                            "La géométrie révèle la stratégie spatiale du projet. Chaque coupe raconte une histoire de proportions et de lumière, une narration verticale de l'architecture."
                        </p>
                    </div>
                </div>
            {/if}
            {#if projet.coupes && projet.coupes.length > 1}
                <div class="relative flex justify-center">
                    <div class="absolute inset-0 bg-stone-50/50 -z-10 transform scale-110 blur-3xl rounded-full"></div>
                    <img class="w-full max-w-5xl h-auto grayscale hover:grayscale-0 transition-organic opacity-80 mix-blend-multiply" alt="Coupe architecturale BB'" src="{projet.coupes[1]}" />
                </div>
            {/if}
        </div>
    </section>

    {#if projet.espace1}
        <ProjectSpace espace={projet.espace1} />
    {/if}
    {#if projet.espace2}
        <ProjectSpace espace={projet.espace2} reverse={true} />
    {/if}
    {#if projet.espace3}
        <ProjectSpace espace={projet.espace3} />
    {/if}

    <!-- 3D Renders & Models -->
    <section class="animate-section bg-surface-container py-32 px-8 md:px-24 fade-in">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-5 space-y-8">
                <span class="text-[0.6875rem] uppercase tracking-widest text-primary">Processus Créatif</span>
                <h3 class="text-4xl font-serif leading-tight">De l'abstraction à la forme tangible.</h3>
                <p class="text-on-surface-variant text-sm leading-relaxed">
                    Nous utilisons la modélisation physique et numérique comme outils de validation sensorielle. Ces études nous permettent d'étudier l'incidence réelle du soleil sur les volumes avant toute mise en œuvre.
                </p>
                <div class="pt-8">
                    <button class="bg-primary text-on-primary px-8 py-4 rounded-md text-[0.6875rem] uppercase tracking-widest hover:opacity-90 transition-organic">Voir le dossier technique</button>
                </div>
            </div>
            <div class="lg:col-span-7 grid grid-cols-2 gap-6">
                {#if projet.images && projet.images.length > 0}
                    <img class="w-full aspect-square object-cover rounded shadow-sm" alt="Étude ou image du projet" src="{projet.images[0]}" />
                {/if}
                {#if projet.images && projet.images.length > 1}
                    <img class="w-full aspect-square object-cover rounded shadow-sm mt-12" alt="Deuxième image du projet" src="{projet.images[1]}" />
                {:else if projet.imgPres && projet.imgPres.length > 1}
                    <img class="w-full aspect-square object-cover rounded shadow-sm mt-12" alt="Vue détail du projet" src="{projet.imgPres[1]}" />
                {/if}
            </div>
        </div>
    </section>

    <!-- Final Gallery -->
    <section class="animate-section bg-surface py-24 space-y-24 fade-in">
            {#if projet.imgSecondaire && projet.imgSecondaire.length > 0}
                <div class="w-full h-[819px] overflow-hidden">
                    <img class="w-full h-full object-cover" alt="Galerie principale du projet" src="{projet.imgSecondaire[0]}" />
                </div>
            {:else if projet.images && projet.images.length > 0}
                <div class="w-full h-[819px] overflow-hidden">
                    <img class="w-full h-full object-cover" alt="Image principale du projet" src="{projet.imgPres[0]}" />
                </div>
            {/if}
        
        <div class="px-8 md:px-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-24 mb-24">
                {#if projet.imgSecondaire && projet.imgSecondaire.length > 0 && projet.images && projet.images.length > 0}
                    <div class="space-y-6">
                        <img class="w-full aspect-[4/5] object-cover" alt="Détail architectural" src="{projet.images[0]}" />
                        {#if projet.imgSecondaire[0] && projet.imgSecondaire[0].legende}
                            <p class="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant italic">{projet.imgSecondaire[0].legende}</p>
                        {:else}
                            <p class="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant italic">Détail architectural révélant la finesse de la conception.</p>
                        {/if}
                    </div>                
                {:else if projet.images && projet.images.length > 1}
                    <div class="space-y-6">
                        <img class="w-full aspect-[4/5] object-cover" alt="Vue complémentaire du projet" src="{projet.images[1]}" />
                        <p class="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant italic">Perspective additionnelle mettant en lumière l'harmonie spatiale.</p>
                    </div>
                {/if}
            </div>
            
            {#if projet.images && projet.images.length > 2}
                <div class="max-w-4xl mx-auto py-24">
                    <img class="w-full h-auto object-cover rounded" alt="Détail élément du projet" src="{projet.images[2]}" />
                    <div class="mt-12 text-center">
                        <h5 class="text-2xl font-serif italic text-on-surface">"Le détail révèle la pensée architecturale. C'est dans ces moments intimes que le projet respire."</h5>
                    </div>
                </div>
            {/if}
             {#if projet.images && projet.images.length > 3}
                <div class="max-w-4xl mx-auto py-24">
                    <img class="w-full h-auto object-cover rounded" alt="Détail élément du projet" src="{projet.images[3]}" />
                    <div class="mt-12 text-center">
                        <h5 class="text-2xl font-serif italic text-on-surface">"Le détail révèle la pensée architecturale. C'est dans ces moments intimes que le projet respire."</h5>
                    </div>
                </div>
            {/if}
             {#if projet.images && projet.images.length > 4}
                <div class="max-w-4xl mx-auto py-24">
                    <img class="w-full h-auto object-cover rounded" alt="Détail élément du projet" src="{projet.images[4]}" />
                    <div class="mt-12 text-center">
                        <h5 class="text-2xl font-serif italic text-on-surface">"Le détail révèle la pensée architecturale. C'est dans ces moments intimes que le projet respire."</h5>
                    </div>
                </div>
            {/if}
        </div>
    </section>

    <!-- CTA Section -->
    <section class="animate-section bg-surface-container-highest py-32 px-8 text-center fade-in">
        <div class="max-w-2xl mx-auto space-y-12">
            <span class="text-[0.6875rem] uppercase tracking-[0.3em] text-primary">Collaboration</span>
            <h2 class="text-4xl md:text-5xl font-serif text-on-surface">Façonnons ensemble votre prochain espace.</h2>
            <p class="text-on-surface-variant text-sm font-body leading-relaxed">
                Inspirés par des projets comme {projet.titre}, nous apportons la même sensibilité aux matériaux, aux proportions et au vide dans chaque nouvelle création.
            </p>
            <div class="flex flex-col md:flex-row gap-6 justify-center pt-8">
                <a class="bg-primary text-on-primary px-10 py-5 rounded-md text-[0.6875rem] uppercase tracking-widest transition-organic hover:bg-primary-container" href="/#contact">Demander le dossier complet</a>
                <a class="border border-outline-variant/40 text-on-surface px-10 py-5 rounded-md text-[0.6875rem] uppercase tracking-widest transition-organic hover:bg-surface" href="/#contact">Discuter d'un projet</a>
            </div>
        </div>
    </section>
</main>

<Footer />

<style>
    .font-serif { font-family: 'Noto Serif', serif; }
    .hero-shadow { background: linear-gradient(to top, rgba(30, 26, 31, 0.6) 0%, rgba(30, 26, 31, 0) 50%); }
    .transition-organic { transition: all 700ms cubic-bezier(0.23, 1, 0.32, 1); }
</style>