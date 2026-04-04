  <script lang="ts"> 
  import { onMount, onDestroy } from 'svelte';
    import { reveal } from '$lib/utils/reveal';

    
  // Props : liste des slides
  

  let { slides = [] } = $props();

  let currentSlide = $state(0);
  let interval = $state<NodeJS.Timeout | null>(null);

  // Navigation
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }

  // Swipe / touch
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50;

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e: TouchEvent) {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > swipeThreshold) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  }

  // Auto-advance
  onMount(() => {
    interval = setInterval(nextSlide, 6000);
    const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => reveal(el));
  });

  onDestroy(() => {
    if (interval !== null) clearInterval(interval);
  });
</script>

<section
  id="hero"
  class="hero fade-in"
  aria-label="Image slider"
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
>
  <div class="hero-slider" style="transform: translateX(-{currentSlide * 100}%);">
    {#each slides as slide, i}
      <div class="hero-slide {i === currentSlide ? 'active' : ''}">
        <img src={slide.img} alt={slide.alt} class="hero-image" />
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

  <!-- Progress Bar -->
  <div class="hero-progress">
    <div
      class="hero-progress-bar"
      style="width: {(currentSlide + 1) / slides.length * 100}%"
    ></div>
  </div>

  <!-- Navigation buttons -->
  <div class="hero-nav">
    <button onclick={prevSlide} aria-label="Diapositive précédente">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M15 19l-7-7 7-7"/>
      </svg>
    </button>
    <button onclick={nextSlide} aria-label="Diapositive suivante">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</section>