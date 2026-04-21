  <script lang="ts"> 
  import { onMount, onDestroy } from 'svelte';
  import { reveal } from '$lib/utils/reveal';

    
  // Props : liste des slides
  

  let { slides = [] } = $props();

  let currentSlide = $state(0);
  let interval = $state<NodeJS.Timeout | null>(null);

  const AUTOPLAY_DELAY = 6000;

  // 🔁 NAVIGATION
  function goToSlide(index: number) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    resetAutoplay();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // ⏱ AUTOPLAY
  function startAutoplay() {
    if (!slides.length) return;
    stopAutoplay();
    interval = setInterval(nextSlide, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (interval) clearInterval(interval);
    interval = null;
  }

  function resetAutoplay() {
    startAutoplay();
  }

  // 👆 SWIPE
  let touchStartX = 0;

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent) {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  }

  // 🟢 INIT
  onMount(() => {
    startAutoplay();

    document.querySelectorAll('.fade-in').forEach(el => reveal(el));
  });

  onDestroy(() => {
    stopAutoplay();
  });
</script>

<section
  class="hero fade-in"
  aria-label="Image slider"
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
  onmouseenter={stopAutoplay}
  onmouseleave={startAutoplay}
>

  <div
    class="hero-slider"
    style="transform: translateX(-{currentSlide * 100}%);"
  >
    {#each slides as slide, i}
      <div class="hero-slide {i === currentSlide ? 'active' : ''}">
        <img class="hero-image" src={slide.img} alt={slide.alt} />

        <div class="hero-overlay"></div>

        <div class="hero-content">
          <h1 class="hero-title">{slide.title}</h1>

          <div class="hero-meta">
            <div class="location">{slide.location}</div>
            <div class="number">{slide.number} / {slides.length.toString().padStart(2, '0')}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Progress -->
  <div class="hero-progress">
    <div
      class="hero-progress-bar"
      style="width: {(currentSlide + 1) / slides.length * 100}%"
    ></div>
  </div>

  <!-- Nav -->
  <div class="hero-nav">
    <button onclick={prevSlide} aria-label="Précédent">‹</button>
    <button onclick={nextSlide} aria-label="Suivant">›</button>
  </div>
</section>
<style>
/* Hero Section - full-width with subtle elegance */
 .hero {
     position: relative;
     width: 100%;
     height: 100vh;
     height: 100svh;
     /* Better mobile support */
     overflow: hidden;
     background: var(--soft-stone);
     padding: 0;
 }

 .hero-slider {
     display: flex;
     height: 100%;
     transition: transform 1s var(--transition-organic);
 }


 .hero-slide {
     position: relative;
     min-width: 100%;
     height: 100%;
     flex-shrink: 0;
 }

 .hero-image {
    position: absolute;
     width: 100%;
     height: 100%;
     object-fit: cover;
     object-position: left bottom;
     opacity: 0.9;
     transform: scale(1.2);
     transition: transform 6s ease-out;
     z-index: 1;
 }

 .hero-slide.active .hero-image {
     transform: scale(1);
 }

 .hero-fallback {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: linear-gradient(145deg, var(--soft-stone) 0%, var(--mist-grey) 50%, var(--ink-black) 100%);
 }

 .hero-overlay {
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: linear-gradient(to top, rgba(20, 20, 20, 0.4) 0%, rgba(20, 20, 20, 0.1) 50%, transparent 100%);
     z-index: 2;
 }

 .hero-content {
     position: absolute;
     bottom: 100px;
     left: var(--margin);
     right: var(--margin);
     display: block;
     z-index: 10;
 }

 .hero-title {
     font-family: 'Cormorant Garamond', serif;
     font-size: clamp(2.5rem, 6vw, 5rem);
     font-weight: 300;
     color: #FFFFFF;
     max-width: 65%;
     text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
 }

 .hero-meta {
     text-align: left;
     padding-top: 1rem;
     color: rgba(255, 255, 255, 0.8);
 }

 .hero-meta .location {
     font-family: 'Inter', sans-serif;
     font-size: 0.75rem;
     letter-spacing: 0.15em;
     text-transform: uppercase;
 }

 .hero-meta .number {
     font-family: 'Cormorant Garamond', serif;
     font-size: 0.875rem;
     font-weight: 300;
     opacity: 0.6;
     margin-top: 12px;
     letter-spacing: 0.1em;
 }

 .hero-progress {
     position: absolute;
     bottom: 0;
     left: 0;
     right: 0;
     height: 2px;
     background: rgba(255, 255, 255, 0.15);
 }

 .hero-progress-bar {
     height: 100%;
     background: var(--dusty-rose);
     width: 50%;
     transition: width 1s var(--transition-organic);
 }

 .hero-nav {
     position: absolute;
     bottom: 2rem;
     left: 50%;
     transform: translateX(-50%);
     display: flex;
     gap: 20px;
     z-index: 10;
 }

 .hero-nav button {
     width: 3rem;
     height: 3rem;
     border: 1px solid rgba(255, 255, 255, 0.25);
     background: transparent;
     color: #FFFFFF;
     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;
     transition: all 0.5s var(--transition-organic);
     border-radius: 0;
 }

 .hero-nav button:hover {
     background: #FFFFFF;
     color: var(--ink-black);
     border-color: #FFFFFF;
 }
</style>