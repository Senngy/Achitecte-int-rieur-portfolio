<script>
    import { onMount } from 'svelte';
    import { reveal } from '$lib/utils/reveal';
    import { goto } from '$app/navigation'; // FIX 3: Importer le router

    let { projets = [], autoplay = false, interval = 3000 } = $props();
    
    // On utilise un state local pour l'index, car on va le modifier
    let currentIndex = $state(0);
    
    let timer;

    // Navigate to next project
    function next() {
        if (!projets?.length) return;
        currentIndex = (currentIndex + 1) % projets.length;
    }

    // Navigate to previous project
    function prev() {
        if (!projets?.length) return;
        currentIndex = (currentIndex - 1 + projets.length) % projets.length;
    }

    // Helper to determine position relative to active index
    function getPositionClass(index, currentIdx) {
        if (!projets?.length) return 'item-hidden'; // FIX 4: Safety check
        
        const offset = (index - currentIdx + projets.length) % projets.length;
        
        switch (offset) {
            case 0: return 'item-center';
            case 1: return 'item-inner-right';
            case 2: return 'item-mid-right';
            case 3: return 'item-outer-right';
            case projets.length - 3: return 'item-outer-left';
            case projets.length - 2: return 'item-mid-left';
            case projets.length - 1: return 'item-inner-left';
            default: return 'item-hidden';
        }
    }

    // Maps item indices to boolean to momentarily disable their transition
    let disableTransition = $state({});

    function getLogicalPos(index, current) {
        if (!projets?.length) return 0;
        let offset = (index - current) % projets.length;
        if (offset < 0) offset += projets.length;
        if (offset > 3) offset -= projets.length; // 4 turns into -3, 5 -> -2, 6 -> -1
        return offset;
    }

    function goTo(targetIndex) {
        if (!projets?.length || targetIndex === currentIndex) return;

        let newDisableTransition = {};
        for (let i = 0; i < projets.length; i++) {
            const oldLog = getLogicalPos(i, currentIndex);
            const newLog = getLogicalPos(i, targetIndex);
            
            // If the absolute difference in logical position is greater than 3, it means wrapping around
            if (Math.abs(newLog - oldLog) > 3) {
                newDisableTransition[i] = true;
            }
        }
        
        disableTransition = newDisableTransition;
        currentIndex = targetIndex;

        // Enable transitions again shortly after the DOM update
        if (Object.keys(newDisableTransition).length > 0) {
            setTimeout(() => {
                disableTransition = {};
            }, 50);
        }
    }

    // FIX 3: Naviguer vers la page projet ou tourner le carousel
    function handleClick(i) {
        if (!projets?.length) return;
        const project = projets[i];

        if (i === currentIndex && project?.slug) {
            goto(`/projets/${project.slug}`);
        } else {
            goTo(i);
        }
    }

    onMount(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => reveal(el));
        if (autoplay && projets?.length > 1) {
            timer = setInterval(() => goTo((currentIndex + 1) % projets.length), interval);
        }
        return () => clearInterval(timer);
      
    });
</script>

<div class="w-full max-w-[100vw] h-[100svh] min-h-[600px] overflow-hidden flex flex-col justify-center relative bg-transparent py-8 fade-in">
    <section class="relative perspective-1000 w-full flex-1 flex items-center justify-center">
        <div class="carousel-container w-full h-full relative">
            
            <!-- Background click areas for easy navigation -->
            <!-- svelte-ignore a11y-click-events-have-key-events svelte-ignore a11y-no-static-element-interactions -->
            <div class="absolute inset-y-0 left-0 w-1/2 z-0 cursor-pointer" onclick={() => goTo((currentIndex - 1 + projets.length) % projets.length)}></div>
            <!-- svelte-ignore a11y-click-events-have-key-events svelte-ignore a11y-no-static-element-interactions -->
            <div class="absolute inset-y-0 right-0 w-1/2 z-0 cursor-pointer" onclick={() => goTo((currentIndex + 1) % projets.length)}></div>

            {#each projets as projet, i}
                {@const position = getPositionClass(i, currentIndex)}
                <!-- svelte-ignore a11y-click-events-have-key-events - allowing click to navigate directly to an image -->
                <!-- svelte-ignore a11y-interactive-supports-focus -->
                <div 
                    class="carousel-item {position} group {disableTransition[i] ? '!transition-none !duration-0' : ''}" 
                    onclick={() => handleClick(i)}
                    role="button"
                >
                    <img 
                        class="object-cover rounded shadow-2xl transition-all duration-700 ease-in-out w-[65vw] sm:w-[300px] md:w-[400px] lg:w-[450px] aspect-[4/5]
                            {position === 'item-center' ? 'group-hover:scale-[1.02]' : ''}"
                        alt={projet.titre}
                        src={projet.imgPres?.[0]} 
                    />
                    
                    {#if position === 'item-center'}
                        <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded pointer-events-none"></div>
                    {/if}
                </div>
            {/each}

        </div>
    </section>

    <!-- Navigation controls -->
    <div class="flex items-center justify-center gap-8 mt-4 shrink-0 pb-4 z-20">
        <button 
            onclick={() => goTo((currentIndex - 1 + projets.length) % projets.length)} 
            class="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            aria-label="Projet précédent"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
            onclick={() => goTo((currentIndex + 1) % projets.length)} 
            class="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            aria-label="Projet suivant"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
    </div>
</div>

<style>
    /* CSS logic replaces JavaScript class toggling for vastly better performance and cleaner code */
    
    .carousel-item {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.7s cubic-bezier(0.25, 1, 0.5, 1);
        cursor: pointer;
        /* Make sure transforming items renders smoothly */
        will-change: transform, opacity, width;
    }

    .item-center {
        transform: translate(-50%, -50%) perspective(1000px) translateZ(0px);
        z-index: 10;
        opacity: 1;
        filter: brightness(100%);
    }

    .item-inner-right {
        transform: translate(calc(-50% + 150px), -50%) perspective(1000px) translateZ(-100px);
        z-index: 8;
        opacity: 0.9;
        filter: brightness(80%);
    }

    .item-mid-right {
        transform: translate(calc(-50% + 300px), -50%) perspective(1000px) translateZ(-200px);
        z-index: 6;
        opacity: 0.6;
        filter: brightness(60%);
    }

    .item-outer-right {
        transform: translate(calc(-50% + 450px), -50%) perspective(1000px) translateZ(-300px);
        z-index: 4;
        opacity: 0.3;
        filter: brightness(40%);
    }

    .item-inner-left {
        transform: translate(calc(-50% - 150px), -50%) perspective(1000px) translateZ(-100px);
        z-index: 8;
        opacity: 0.9;
        filter: brightness(80%);
    }

    .item-mid-left {
        transform: translate(calc(-50% - 300px), -50%) perspective(1000px) translateZ(-200px);
        z-index: 6;
        opacity: 0.6;
        filter: brightness(60%);
    }

    .item-outer-left {
        transform: translate(calc(-50% - 450px), -50%) perspective(1000px) translateZ(-300px);
        z-index: 4;
        opacity: 0.3;
        filter: brightness(40%);
    }

    .item-hidden {
        transform: translate(-50%, -50%) perspective(1000px) translateZ(-400px);
        z-index: 0;
        opacity: 0;
        pointer-events: none;
    }
</style>