<script>
 let { projets } = $props();

 const projetsToDisplay = $derived(projets ? projets.slice(0, 4) : []);

</script>
<!-- Selected Works -->
    <section id="works">
        <div class="grid-container">
            <div class="section-header fade-in">
                <div class="line"></div>
                <span class="label">Projets sélectionnés</span>
            </div>
            <div class="projects-grid">
            {#each projetsToDisplay as projet}
                <article class="project-card fade-in fade-in-delay-1">
                    <img src={projet.imgPres} alt={projet.titre} class="project-image">
                    <div class="project-overlay"></div>
                    <div class="project-info">
                        <h3 class="project-title">{projet.titre}</h3>
                        <span class="project-meta">{projet.lieu} — {projet.annee}</span>
                    </div>
                </article>
            {/each}
            </div>
        </div>
    </section>