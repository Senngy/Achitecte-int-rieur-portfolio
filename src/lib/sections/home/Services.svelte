 <script>
    import { onMount } from 'svelte';
    import { reveal } from '$lib/utils/reveal';

    onMount(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => reveal(el));
    });
 </script>
  <!-- Services Section -->
 <!-- Updated Services Section -->
        <section class="relative py-8 bg-stone-100 overflow-hidden fade-in">
            <!-- Background Image Container -->
            <div class="absolute inset-0 z-0">
                <img class="w-full h-full object-cover"
                    data-alt="Minimalist architectural detail of a textured lime-washed wall with soft shadows from a branch."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl_rcpjcjXFeuPA9e2wvRNZSaYZ0BluIYjOBbvAOhk0l8kOCIEmEmuUV3qB4ZGqm92zosTQOcZRyCx88qHnmda-wIZxHqu6etyT7mzYe2Qxpm2jGkY1Dv6MjDyRxYOlbgX0Dv_ViR7p2uCUJa2CU7l6YhJ-uDZJVF8px6o7kBfD6YkqsOkmTFuW5TzFNR55rZh-GhGc0kMMuLsKSkSHkQr9usBe24DZBiMZAPvQtCebTqkqFTLBwol_DPWz6Vu_L3vPeVGnVzpS30" />
                <div class="absolute inset-0 bg-stone-900/60"></div>
                
            </div>
            <div class="relative z-10 max-w-7xl mx-auto px-8 fade-in">
           
                <div class="flex flex-col lg:flex-row gap-20">
                    <!-- Text & CTA -->
                      
                    <div class="w-full lg:w-5/12">
                        
                        <div class="mb-12">
                            <span
                                class="text-[0.6875rem] uppercase tracking-[0.2em] font-label block mb-6 text-stone-300">Savoir-faire</span>
                            <h2 class="text-5xl font-light font-serif mb-8 leading-tight text-[#FAF9F7]">L'art de
                                l'espace</h2>
                            <p class="text-lg font-body font-light leading-relaxed italic max-w-md text-stone-200">Une
                                approche sensible où chaque espace devient le miroir d'une émotion. Nous sculptons la
                                lumière et la matière pour révéler l'âme de votre intérieur.</p>
                        </div>
                        <a class="inline-flex items-center gap-4 group" href="/services">
                            <span
                                class="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                <span class="material-symbols-outlined text-sm"
                                    data-icon="arrow_forward">arrow_forward</span>
                            </span>
                            <span
                                class="text-[0.6875rem] uppercase tracking-widest font-label border-b border-[#FAF9F7]/30 pb-1 group-hover:border-primary transition-all text-[#FAF9F7]">Plus de détails sur nos services</span>
                        </a>
                    </div>
                    <!-- Integrated Services List -->
                    <div class="w-full lg:w-7/12 space-y-0">
                        <!-- Service 1 -->
                        <div
                            class="service-item-trigger group relative border-t border-stone-100/10 py-12 transition-all duration-700 ease-in-out hover:pl-10">
                            <div class="flex justify-between items-center pr-4">
                                <div class="flex items-baseline gap-8">
                                    <span
                                        class="text-[0.6875rem] uppercase tracking-widest font-label border-b border-[#FAF9F7]/30 pb-1 group-hover:border-primary transition-all text-[#FAF9F7]">01</span>
                                    <h3
                                        class="text-3xl md:text-4xl font-light font-serif group-hover:text-text-hover transition-colors duration-500 text-[#FAF9F7]">
                                        Architecture d'intérieur</h3>
                                </div>
                            </div>
                            <div class="service-line absolute bottom-0 left-0 h-[1px] bg-primary/40 w-0"></div>
                        </div>
                        <!-- Service 2 -->
                        <div
                            class="service-item-trigger group relative border-t border-stone-100/10 py-12 transition-all duration-700 ease-in-out hover:pl-10">
                            <div class="flex justify-between items-center pr-4">
                                <div class="flex items-baseline gap-8">
                                    <span
                                        class="text-[0.6875rem] uppercase tracking-widest font-label border-b border-[#FAF9F7]/30 pb-1 group-hover:border-primary transition-all text-[#FAF9F7]">02</span>
                                    <h3
                                        class="text-3xl md:text-4xl font-light font-serif group-hover:text-text-hover transition-colors duration-500 text-[#FAF9F7]">
                                        Design résidentiel</h3>
                                </div>
                            </div>
                            <div class="service-line absolute bottom-0 left-0 h-[1px] bg-primary/40 w-0"></div>
                        </div>
                        <!-- Service 3 -->
                        <div
                            class="service-item-trigger group relative border-t border-stone-100/10 py-12 transition-all duration-700 ease-in-out hover:pl-10">
                            <div class="flex justify-between items-center pr-4">
                                <div class="flex items-baseline gap-8">
                                    <span
                                        class="text-[0.6875rem] uppercase tracking-widest font-label border-b border-[#FAF9F7]/30 pb-1 group-hover:border-primary transition-all text-[#FAF9F7]">03</span>
                                    <h3
                                        class="text-3xl md:text-4xl font-light font-serif group-hover:text-text-hover transition-colors duration-500 text-[#FAF9F7]">
                                        Direction artistique</h3>
                                </div>
                            </div>
                            <div class="service-line absolute bottom-0 left-0 h-[1px] bg-primary/40 w-0"></div>
                        </div>
                        <!-- Service 4 -->
                        <div
                            class="service-item-trigger group relative border-t border-stone-100/10 py-12 transition-all duration-700 ease-in-out hover:pl-10">
                            <div class="flex justify-between items-center pr-4">
                                <div class="flex items-baseline gap-8">
                                    <span
                                        class="text-[0.6875rem] uppercase tracking-widest font-label border-b border-[#FAF9F7]/30 pb-1 group-hover:border-primary transition-all text-[#FAF9F7]">04</span>
                                    <h3
                                        class="text-3xl md:text-4xl font-light font-serif group-hover:text-text-hover transition-colors duration-500 text-[#FAF9F7]">
                                        Conseil et consultation</h3>
                                </div>
                            </div>
                            <div class="service-line absolute bottom-0 left-0 h-[1px] bg-primary/40 w-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>