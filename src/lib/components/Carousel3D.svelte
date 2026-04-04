<script>
    import { onMount } from 'svelte';
    import { reveal } from '$lib/utils/reveal';

    // The carousel images with their source and alt descriptions
    export let images = [
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhZrFxZwCl1Wi2b0SFAl4xfU5vOmjKirGyMZR08lqFhfyuqZtEIaJlsqDvPEj59y2B3oSczqh-aSXz8cawXZyomN1rZVE5ZKmgK3ptm_gaKx1I2GcnWOQSt-jKdE-LiCjHfhLZeKtaICYrB6iWNAUIDXLwIDkRA6xh7qERi0E843abIP75F3_wJsmn0cMA2QgED5L7a5F75yngdtKEi5_lGUeJLFllFPkHyqBcCdXrBmeJex11SVssg7Fv8HWaPERHJcT6DNqBAc",
            alt: "minimalist architectural facade with smooth white concrete and deep shadows under bright daylight"
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBfQnyLi86kDDG9U_2HwIq2Ge3HvNLRAQLK6fgJlmKNRPE3l8cM3aVFtdt6dQVeBzIu7ZET24dFGCU6IHbVoagbJzR0qt7LKSTH7ST2n57MyYqglBwqzMnZzeTA_a6EicR6HN0cMfh4MtLItR9Uqen4fNGGHcHtIzRXAV4XBt-7f9Se2jChK6yRydMdnN70r7bRWlsE5XwozYsDKtd2vOnsGhnXfrhMCZQScOW11_eXaCNnPSFWFjFfJspBU9gE36OLRaDBJyd_N0",
            alt: "interior view of a luxury living room with sage green velvet sofa and light oak flooring"
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoogU4draupQxNpYw40eBatZ96mj5HZkVCEe3t8zvtFAovjT9rETm8fjeM83Vercj8QBdGVE9_fNIxoCmWSPnPtfefr2tAROErrHqxt2-PIHf-GWQCoL9Lp6gZqvqTwcOB1yJO_VqbzOr7MryQVik5tZQz0_96scOGW4VrYlVdmtdVFuNabGW_uu20PkgjBoNCO6dE1EgpCFZ1aUF8Pwp3_zHxPThvowfcNuVXsAoFunK2P-QZMPZAWypBmT9shUGGUoRxA327Pio",
            alt: "close-up of a textured plaster wall with a simple brass light fixture and soft shadows"
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAVfLaA5Z6nYco_xDDlvVNW-GocEVaW49LhZ-H6msJhJDA3fkJv3gbXrT-ZtEAEG8Hb3ic9Ay5ho0BuyfGh9M9a4oHrqrVthOe0Xo-_LU-EHkLHJcdHu_HfXkzsLo4Tq_YM6SY9JhbBmKPRcEUhBDS6dXoyzgnVOTQ3YfZIQg_ATbZLq7LuiPLkTJYf6dKOpRB7E5gASdkv--Ozias207BPGKoyGaQXBnxp7Qxcy-aDO3OoaeoNqEe_HHDagq7Phwm6asohar0Rxc",
            alt: "grand architectural space with high ceilings large windows and minimalist furniture in warm neutral tones"
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfWX6VYgT8XqaZgZgKTENJoDfimwsvjnUgLIk9kbiKJifZwUIA_C3Xc5tMd7maFTLcW7nc4jjoDHDYOHlxSQhEGLgEaI6xQHk7NvWq92V7tEIi93x8Ke4pD84eL22mTc0z_ORSNUwO_iRNhSiMwPS6zWpcJrRHY4ZO1Xw1gAG5K8rFO0abItdAeSt2W0blQ8i35R1Z7C9YjepMnlStO5ATiFDaaHDAA0EsYpHUkC_gPzvACO7CoQFtIGEhujWYEtyfO6uAlulUwv4",
            alt: "modern kitchen with dark stone countertops and minimal wooden cabinetry in a bright airy room"
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7jy9EdqJamgun_t-dxzq79HbAimojBTSgtDVD5sZfYLeds51m5yaoWKsNUqft-NdGLAxjqAIhVcOlNSjTHbQyuTEVftb9z0FGE3iZHMzby-GQJ_F7TZ5ezq2rN28neqwHS-HYudWuDi_IyBzR09xyD8ZTd_9dTr-ZPSQYKqacAYSUEp3JiD9hBxmpIeaQK11bUFCKk97C8W4Xx1uHDnIjkIod6rC5DN1Dnr3DAWK92pC7RZ3dR6o-n4n_1MUN-yE7QtM3036QQ4E",
            alt: "sophisticated bedroom with linen bedding in dusty rose and soft morning light filtering through curtains"
        },
        {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA6vwLgZmEMR3fLGVc8wvF1lbqx8xnsGd4FJxJw4b1LSHEUipvPNrbEHi82NI2vFG9dyoe5kvERppXHNhbXgUz5iasN5YKpTI-pR-UNxRktAT9y7nhR9r9qKSHOIm_Mlta67VHJAr6BqMhYg_BA7AxZ8IKPx_dg5WTAWG53Mf0pxGCygrSGlK3SWQETcufUgGN7FWB7GitAxMaGZxTyVu6PDJnPApM9zng4UsaMa5j1vZwcojxRgQGW2BjgteuHzdzgHkW21Iv25M",
            alt: "architectural detail of a spiral staircase made of light wood and slender steel railings"
        }
    ];

    // Track the currently active image index
    export let currentIndex = 3;

    // Optional autoplay setting
    export let autoplay = false;
    export let interval = 3000;
    
    let timer;

    // Navigate to next image
    function next() {
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Navigate to previous image
    function prev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    // Helper to determine position relative to active index
    function getPositionClass(index, currentIdx) {
        const offset = (index - currentIdx + images.length) % images.length;
        
        switch (offset) {
            case 0: return 'item-center';
            case 1: return 'item-inner-right';
            case 2: return 'item-mid-right';
            case 3: return 'item-outer-right';
            case images.length - 3: return 'item-outer-left';
            case images.length - 2: return 'item-mid-left';
            case images.length - 1: return 'item-inner-left';
            default: return 'item-hidden';
        }
    }

    // Maps item indices to boolean to momentarily disable their transition
    let disableTransition = {};

    function getLogicalPos(index, current) {
        let offset = (index - current) % images.length;
        if (offset < 0) offset += images.length;
        if (offset > 3) offset -= images.length; // 4 turns into -3, 5 -> -2, 6 -> -1
        return offset;
    }

    function goTo(targetIndex) {
        console.log("Carousel3D -> goTo called: moving to index", targetIndex, "from", currentIndex);
        if (targetIndex === currentIndex) return;

        let newDisableTransition = {};
        for (let i = 0; i < images.length; i++) {
            const oldLog = getLogicalPos(i, currentIndex);
            const newLog = getLogicalPos(i, targetIndex);
            
            // If the absolute difference in logical position is greater than 3, it means wrapping around
            if (Math.abs(newLog - oldLog) > 3) {
                newDisableTransition[i] = true;
                console.log(`Carousel3D -> Preventing cross-screen animation for image index ${i}`);
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

    onMount(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => reveal(el));
        if (autoplay) {
            timer = setInterval(() => goTo((currentIndex + 1) % images.length), interval);
        }
        return () => clearInterval(timer);
      
    });
</script>

<div class="w-full max-w-[100vw] h-[100svh] min-h-[600px] overflow-hidden flex flex-col justify-center relative bg-transparent py-8 fade-in">
    <section class="relative perspective-1000 w-full flex-1 flex items-center justify-center">
        <div class="carousel-container w-full h-full relative">
            
            <!-- Background click areas for easy navigation -->
            <!-- svelte-ignore a11y-click-events-have-key-events svelte-ignore a11y-no-static-element-interactions -->
            <div class="absolute inset-y-0 left-0 w-1/2 z-0 cursor-pointer" on:click={() => goTo((currentIndex - 1 + images.length) % images.length)}></div>
            <!-- svelte-ignore a11y-click-events-have-key-events svelte-ignore a11y-no-static-element-interactions -->
            <div class="absolute inset-y-0 right-0 w-1/2 z-0 cursor-pointer" on:click={() => goTo((currentIndex + 1) % images.length)}></div>

            {#each images as image, i}
                {@const position = getPositionClass(i, currentIndex)}
                <!-- svelte-ignore a11y-click-events-have-key-events - allowing click to navigate directly to an image -->
                <!-- svelte-ignore a11y-interactive-supports-focus -->
                <div 
                    class="carousel-item {position} group {disableTransition[i] ? '!transition-none !duration-0' : ''}" 
                    on:click={() => goTo(i)}
                    role="button"
                >
                    <img 
                        class="object-cover rounded shadow-2xl transition-all duration-700 ease-in-out w-[65vw] sm:w-[300px] md:w-[400px] lg:w-[450px] aspect-[4/5]
                            {position === 'item-center' ? 'group-hover:scale-[1.02]' : ''}"
                        alt={image.alt}
                        src={image.src} 
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
            on:click={() => goTo((currentIndex - 1 + images.length) % images.length)} 
            class="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            aria-label="Image précédente"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button 
            on:click={() => goTo((currentIndex + 1) % images.length)} 
            class="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            aria-label="Image suivante"
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