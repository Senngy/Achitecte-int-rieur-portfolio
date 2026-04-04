<script>
import Navbar from "$lib/components/layout/Navbar.svelte";
import Footer from "$lib/components/layout/Footer.svelte";

</script>
 <Navbar />
<main>
<!-- Hero Section -->
<section class="relative h-screen w-full overflow-hidden">
    <img class="absolute inset-0 w-full h-full object-cover" data-alt="Minimalist architectural interior with monolithic stone walls, large floor-to-ceiling windows, and soft natural evening light hitting a textured floor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOgOeyskCqghCfdN9NRPX-iklp0o0jM4UjTxtuIB3v0fonzWINYi-vbDZJCzHuJ3MXmztKk1faJwuGrB6bgfDEPg9dfJ_vMpCoAwgMwP1JpSbVcQFg3aVbHekNqliMdaoDd-ydIpj8BfNbyEWJXt01d1hK1sn2GHVTYLCWYaL0fVr9zNsOxqpN1Z0gRi_rtxHVb2KXK9OOKzvV2mo9wlzo83yXXDcnyfvJIXMHWgFIjL1K_3G8UO9h_LvPUebKhLzFIJAiJO6NajM"/>
    <div class="absolute inset-0 bg-on-surface/10"></div>
    <div class="absolute bottom-20 left-12 md:left-24 max-w-2xl">
        <span class="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-white/80 mb-4 block">Residential Project</span>
        <h1 class="font-headline text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-tighter leading-none">The Stone Residence</h1>
    </div>
</section>
<!-- Project Details & Metadata -->
<section class="py-32 px-8 md:px-24 bg-surface grid grid-cols-1 lg:grid-cols-12 gap-16">
    <div class="lg:col-span-4 space-y-12">
        <div class="space-y-2">
            <p class="font-label text-[0.6875rem] uppercase tracking-widest text-outline">Location</p>
            <p class="text-lg font-light text-on-surface italic font-headline">Graubünden, Switzerland</p>
        </div>
        <div class="space-y-2">
            <p class="font-label text-[0.6875rem] uppercase tracking-widest text-outline">Year</p>
            <p class="text-lg font-light text-on-surface italic font-headline">2023</p>
        </div>
        <div class="space-y-2">
            <p class="font-label text-[0.6875rem] uppercase tracking-widest text-outline">Services</p>
            <p class="text-lg font-light text-on-surface italic font-headline">Interior Architecture, Material Curation</p>
        </div>
    </div>
    <div class="lg:col-span-8">
        <div class="max-w-2xl">
            <h2 class="font-headline text-3xl md:text-4xl text-on-surface font-light mb-8 leading-relaxed">A Sensitive Design Approach</h2>
            <p class="text-on-surface-variant leading-relaxed text-lg font-light mb-8">
                        The Stone Residence was born from a desire to create a dialogue between the rugged alpine landscape and the delicate precision of contemporary living. We treated the architecture as a vessel for light, allowing the movement of the sun to define the character of the internal volumes throughout the day.
                    </p>
            <p class="text-on-surface-variant leading-relaxed text-lg font-light">
                        By prioritizing raw, honest materials—hand-finished Valser stone and reclaimed mountain oak—the space achieves a monastic calm that does not sacrifice warmth. Every junction, every shadow gap, and every material transition was meticulously considered to ensure a sense of effortless permanence.
                    </p>
        </div>
    </div>
</section>
<!-- Gallery - Editorial Asymmetry -->
<section class="pb-32 px-8 md:px-24 bg-surface">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <!-- Large Landscape -->
        <div class="md:col-span-8 mb-12 md:mb-0">
            <div class="aspect-[16/10] overflow-hidden bg-surface-container-low rounded-sm">
                <img class="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out" data-alt="Close-up of a minimalist kitchen with stone island and wooden cabinetry, soft shadows playing on the surfaces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATLZjc42ZNqlQ_WbUIL6h-D9nM00NIhSLTh0Ob-F7Ss9hUM8C02Ok6BSHdQY1zB8CNiPC4n9c0kF0dhlHXm4DHeHwm36_dCp1UlWRqW6EmwuYlb5dM3PHlA3EhBSCsmDWFexuLPnqTHCNgs8rm4hiAvWvDu8Y87TyQFQxxCXwOjBwjDSqEBI8z-jNIBbsRLJ7Ha-n4geXYdmQP1aJlmVCHUTnL3ED2iWeBgiAMzhxjsMUTBP5u1Bc4pZ4QEnDOBquo5KoiEiEkMdo"/>
            </div>
        </div>
        <!-- Vertical Portrait -->
        <div class="md:col-span-4 mt-0 md:mt-24">
            <div class="aspect-[3/4] overflow-hidden bg-surface-container-low rounded-sm shadow-sm">
                <img class="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out" data-alt="Tall narrow vertical shot of a stone staircase with a single beam of light falling on the textured steps" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu5-Q8lYz8o5dXgb3ASYglBEMCZPO7cyaVgzV61eIbuSmmaKtRE7jGhs_Gw7RhZbL2YKxv_N1AfO5VcxTQJUzKc1SfieJqQb9Ymf_0WvUk1iSNc9UksjP5vuTRVzvXmnQjLuymdiHKJE1SSrEsW51r6vFCSJ7zbcAv9rhiowaSyYnhLT6kJrzKNQYET7jhcq_5W2M7-KzjiNH62mRS1N0p9vHoPUPBl8lNTgL3l2kpJY8s5C_0iy53XM5YGQzk_5e8zDzqGcBmk3M"/>
            </div>
            <p class="mt-6 font-label text-[0.6875rem] uppercase tracking-widest text-outline italic">Detail of the central stairwell</p>
        </div>
        <!-- Vertical Portrait Offset -->
        <div class="md:col-span-5 md:col-start-2 -mt-12 md:-mt-32 z-10">
            <div class="aspect-[4/5] overflow-hidden bg-surface-container-low rounded-sm">
                <img class="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out" data-alt="Interior of a serene living room with beige linen sofa, low wooden table and a view of snowy mountains" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPWPIPZreNZGA7ih6285eenIp6hp10ftT8_2RokSDciE0keG7jEdBOpcrBNPy0HuaxMsSTsbTGLevrStGp4eXXsBnxou4KdNgNmcmhQ571QPClwKVQ1CuyvrYrXcWgqGnHEWEDVTc7bsK2wVaGv2_Hg14XCfsgtDxSOmKHv-ri2xZmiu94N7cXdOHQ9f5Nb6LkdCVd-mE2G2s1XTDpdODJVaFd-Wp3Q_Aa0Xmwb7MLAL__S4VuFG6SnZ1_05EtN8fF21evTOQSwJw"/>
            </div>
        </div>
        <!-- Smaller Detail Square -->
        <div class="md:col-span-4 md:col-start-8 mt-12">
            <div class="aspect-square overflow-hidden bg-surface-container-low rounded-sm">
                <img class="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out" data-alt="Close up detail of textured linen fabric and a smooth wooden surface under warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL4sxq6bjL3MNg0Wde5xAOCWU51KcO5IqBfq9EzUlySa_RsPqt_g3EOZhpOdAMIrTzzS5P9a_7obU14p1S1MYKgMunMnUdVRDi_qmAOOYrC97oaOEy6a02Tkb_b4RE7Vsgmv9AiOegHYC0nNTJ_0PnLkwdJRFzz0224xAHsOoABaSEVp3cLCP7PJJ_WU2IP8Fyp8mKmh93busl9KaLAbyF8KKObp_5SjnRNG9xR4qj4QCSh7vKevkZ1pL0Tohj4m3BrTvI6pzjoBo"/>
            </div>
        </div>
    </div>
</section>
<!-- Materials Palette -->
<section class="py-32 bg-surface-container-low">
    <div class="px-8 md:px-24">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div class="max-w-md">
                <h3 class="font-headline text-4xl text-on-surface font-light mb-4">Tactile Identity</h3>
                <p class="text-on-surface-variant font-light leading-relaxed">The physical reality of a space is defined by its materials. For the Stone Residence, we curated a palette that speaks to the senses through texture and temperature.</p>
            </div>
            <div class="flex gap-2">
                <span class="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-[0.6875rem] uppercase tracking-widest font-label flex items-center">
                    Natural Selection
                </span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Material 1 -->
            <div class="space-y-6">
                <div class="aspect-[4/5] bg-surface-container rounded-sm overflow-hidden relative group">
                    <img class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" data-alt="Extreme close up of grey-flecked natural granite stone with a matte finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUVM7MOUnm5RsYo3igdq-Qs88x9mFmqFizvJIRXUiFIGBND_CfecUkEAtAgBMzneaNwoni5wsy-n7NJH2ApEZHD7R7jjfJC1Y279vetmDR2f-1MIns5ZOxogBaOvbQJoCSooL3NrMU_BXER6d-Urng0Du_h7uKhr68g5aSTMXw-haPAy6CS77nyCOqn07VNLzqDuUkQ4MxU6IcBOfTeajyp1pRPGMrBkVY-sGbFFz-AJNkwyrG0d_Ga5O7grAXrHLN9bFLZo3K3q0"/>
                    <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div class="space-y-1">
                    <h4 class="font-headline italic text-xl">Valser Stone</h4>
                    <p class="font-label text-[0.6875rem] uppercase tracking-widest text-outline">Quarried locally • Honed Finish</p>
                </div>
            </div>
            <!-- Material 2 -->
            <div class="space-y-6">
                <div class="aspect-[4/5] bg-surface-container rounded-sm overflow-hidden relative group">
                    <img class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" data-alt="Close up of light-grained oak wood with a soft matte oil finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFuMeaCJnqQlAtjahMm4R1_SIOJmZZQ7ouGKEyud_ttRDuv-GbwibZzumUpTSbVt50EpT0rX9pgYwXNaPkyfnQNWZK0423qR8beDodGYlmBQ2w_tXVyYVPLevHZgULYWd104ITMC036j5OfMy58YO8hKS0Csow0WNEczJKmV9mLaZP9M7kZhHstPTleh8J02X8I0cj14sJOT5Eqx402gm47OXi6OkF3QBETfiEqCteFj8B11sImr1iuUTQu5Nax0WkqUaQomum4Og"/>
                    <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div class="space-y-1">
                    <h4 class="font-headline italic text-xl">Smoked Mountain Oak</h4>
                    <p class="font-label text-[0.6875rem] uppercase tracking-widest text-outline">Sustainable Source • White Oil</p>
                </div>
            </div>
            <!-- Material 3 -->
            <div class="space-y-6">
                <div class="aspect-[4/5] bg-surface-container rounded-sm overflow-hidden relative group">
                    <img class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" data-alt="Macro photo of heavy woven natural linen fabric in an oatmeal color" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Kp6B948RQ5fCgGXo0MkQ1t5CGmtC4pr-0X-hcsn7L4Lx2YdHFwsLLFUriVoFCs3JwKBi1k-9P7GuOcz2-zZp2J3w1rSG6ka-rIkK0Qd9Wvrx89_l4udQRcN01zp-QkEyn3waAdgIwlwqaj38xc4Ew-zeNMW37Rv2g9T0S_zCLN0M2VZnGCgsTQpkTwdvBK70lyn_WHyu4CaFr1KwPzw5BJpmJd5Fn3ZHB2xbb7-2zcsJ08tKnJ4A_v9EupwyETGqx_LNwc4fjN0"/>
                    <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div class="space-y-1">
                    <h4 class="font-headline italic text-xl">Heavy Belgian Linen</h4>
                    <p class="font-label text-[0.6875rem] uppercase tracking-widest text-outline">Eco-certified • Raw Tones</p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Next Project Navigation -->
<section class="py-48 px-8 md:px-24 bg-surface text-center">
    <a class="group block max-w-4xl mx-auto space-y-8" href="#">
        <span class="font-label text-[0.6875rem] uppercase tracking-[0.3em] text-outline">Up Next</span>
        <h2 class="font-headline text-5xl md:text-8xl text-on-surface font-light tracking-tighter leading-none group-hover:italic transition-all duration-700">The Lake Pavilion</h2>
        <div class="flex justify-center items-center gap-4 text-primary group-hover:gap-8 transition-all duration-500">
            <span class="font-label text-[0.6875rem] uppercase tracking-widest">Explore Project</span>
            <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
        </div>
    </a>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-stone-100 dark:bg-stone-950">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-12 py-20 border-t border-stone-200/10">
        <!-- Brand & Tagline -->
        <div class="lg:col-span-1">
            <h2 class="text-lg font-light tracking-tighter text-stone-900 dark:text-stone-50 font-headline mb-6">FORMA &amp; RAUM</h2>
            <p class="text-stone-500 dark:text-stone-400 font-body text-[0.875rem] leading-relaxed max-w-xs">
                Curating space through the lens of architectural sensitivity and material truth.
            </p>
        </div>
        <!-- Links 1 -->
        <div class="space-y-6">
            <h4 class="font-label text-[0.6875rem] uppercase tracking-widest text-stone-900 dark:text-white">Studio</h4>
            <ul class="space-y-3">
                <li><a class="text-stone-500 dark:text-stone-400 font-body text-[0.875rem] hover:text-stone-900 dark:hover:text-stone-50 underline underline-offset-4 decoration-stone-300/40 transition-all duration-300" href="#">About</a></li>
                <li><a class="text-stone-500 dark:text-stone-400 font-body text-[0.875rem] hover:text-stone-900 dark:hover:text-stone-50 underline underline-offset-4 decoration-stone-300/40 transition-all duration-300" href="#">Process</a></li>
                <li><a class="text-stone-500 dark:text-stone-400 font-body text-[0.875rem] hover:text-stone-900 dark:hover:text-stone-50 underline underline-offset-4 decoration-stone-300/40 transition-all duration-300" href="#">Journal</a></li>
            </ul>
        </div>
        <!-- Links 2 -->
        <div class="space-y-6">
            <h4 class="font-label text-[0.6875rem] uppercase tracking-widest text-stone-900 dark:text-white">Social</h4>
            <ul class="space-y-3">
                <li><a class="text-stone-500 dark:text-stone-400 font-body text-[0.875rem] hover:text-stone-900 dark:hover:text-stone-50 underline underline-offset-4 decoration-stone-300/40 transition-all duration-300" href="#">Instagram</a></li>
                <li><a class="text-stone-500 dark:text-stone-400 font-body text-[0.875rem] hover:text-stone-900 dark:hover:text-stone-50 underline underline-offset-4 decoration-stone-300/40 transition-all duration-300" href="#">Pinterest</a></li>
                <li><a class="text-stone-500 dark:text-stone-400 font-body text-[0.875rem] hover:text-stone-900 dark:hover:text-stone-50 underline underline-offset-4 decoration-stone-300/40 transition-all duration-300" href="#">LinkedIn</a></li>
            </ul>
        </div>
        <!-- Contact -->
        <div class="space-y-6">
            <h4 class="font-label text-[0.6875rem] uppercase tracking-widest text-stone-900 dark:text-white">Inquiries</h4>
            <p class="text-stone-500 dark:text-stone-400 font-body text-[0.875rem]">studio@formaraum.com</p>
            <div class="pt-4 flex flex-wrap gap-4">
                <a class="text-stone-500 dark:text-stone-400 font-label text-[0.6875rem] uppercase tracking-widest hover:text-stone-900 transition-colors" href="#">Privacy Policy</a>
                <a class="text-stone-500 dark:text-stone-400 font-label text-[0.6875rem] uppercase tracking-widest hover:text-stone-900 transition-colors" href="#">Press Kit</a>
            </div>
        </div>
    </div>
    <div class="px-12 py-10 border-t border-stone-200/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span class="font-label text-[0.6875rem] uppercase tracking-widest text-stone-500 dark:text-stone-400">© 2024 FORMA &amp; RAUM. ALL RIGHTS RESERVED.</span>
        <div class="flex gap-8">
            <span class="font-label text-[0.6875rem] uppercase tracking-widest text-stone-400">Zürich</span>
            <span class="font-label text-[0.6875rem] uppercase tracking-widest text-stone-400">Berlin</span>
        </div>
    </div>
</footer>