<script lang=ts>
 import { onMount } from 'svelte';

    let { activeProject = {}, currentIndex = 0 } = $props();
</script>

<div class="project-detail min-w-[300px] w-full min-h-[380px] h-full rounded-xl border border-outline-variant/10 bg-surface-container-low p-10 text-center group hover:border-outline-variant/60 transition-colors flex flex-col">
    <div class="flex-1 flex flex-col justify-end gap-0">
    <div class="project-content">

        <div>
            <div class="inline-block px-3 py-1 bg-tertiary-fixed rounded-full mb-2">
                <span class="font-label text-[10px] text-on-tertiary-fixed-variant uppercase tracking-widest">{activeProject.type}</span>
            </div>
            <div class="title-block min-h-[80px] max-h-[80px] overflow-hidden">
                <h2 class="font-headline text-4xl md:text-5xl font-light text-on-surface mb-1 group-hover:italic transition-all">
                    {activeProject.titre}
                </h2>
            </div>
            <div class="description-block min-h-[96px] max-h-[96px] overflow-hidden">
                <p class="font-body text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mb-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    {activeProject.legende}
                </p>
            </div>
        </div>
        <div>
            <div class="meta-block flex flex-wrap justify-center gap-3 min-h-[32px] items-center">
                <span class="flex items-center gap-2 font-label text-[11px] uppercase tracking-wider text-outline">
                    <span class="material-symbols-outlined text-sm">location_on</span> {activeProject.lieu}
                </span>
                <span class="w-1 h-1 rounded-full bg-outline-variant/40 self-center"></span>
                <span class="flex items-center gap-2 font-label text-[11px] uppercase tracking-wider text-outline">
                    <span class="material-symbols-outlined text-sm">square_foot</span> {activeProject.surface}
                </span>
                <span class="w-1 h-1 rounded-full bg-outline-variant/40 self-center"></span>
                <span class="flex items-center gap-2 font-label text-[11px] uppercase tracking-wider text-outline">
                    <span class="material-symbols-outlined text-sm">calendar_today</span> {activeProject.annee}
                </span>
            </div>
            <div class="cta-block min-h-0 mb-0">
                <a
                    href={`/projets/${activeProject.slug}`}
                    class="bg-primary text-on-primary px-10 py-4 rounded-md font-label text-[12px] uppercase tracking-[0.2em] hover:bg-primary-container transition-all inline-block"
                >
                    En savoir plus
                </a>
            </div>
            </div>
        </div>
    </div>
</div>

<style>

.project-content{
    transition:
        opacity .45s ease,
        filter .45s ease;
}

</style>