<script>
    export let espace = {};
    export let reverse = false;

    const basename = (path) => {
        if (!path) return '';
        const s = path.split('/').pop();
        return decodeURIComponent(s).replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    };
</script>

<section class="py-20 px-8 md:px-24">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div class="md:col-span-6" class:order-last={reverse}>
            <h3 class="text-3xl font-serif mb-4">{espace.titre}</h3>
            <p class="text-on-surface-variant mb-6">{espace.description}</p>

            {#if espace.plans && espace.plans.length > 0}
                <div class="space-y-4">
                    <span class="text-sm uppercase text-primary">Plans</span>
                    <div class="grid grid-cols-1 gap-4">
                        {#each espace.plans as p}
                            <img src="{p}" alt="{basename(p)}" class="w-full object-contain" />
                        {/each}
                    </div>
                </div>
            {/if}

            {#if espace.coupes && espace.coupes.length > 0}
                <div class="mt-6 space-y-4">
                    <span class="text-sm uppercase text-primary">Coupes</span>
                    <div class="grid grid-cols-1 gap-4">
                        {#each espace.coupes as c}
                            <img src="{c}" alt="{basename(c)}" class="w-full object-contain" />
                        {/each}
                    </div>
                </div>
            {/if}
        </div>

        <div class="md:col-span-6" class:order-first={reverse}>
            {#if espace.imgPres && espace.imgPres.length > 0}
                <div class="w-full h-[420px] overflow-hidden mb-6">
                    <img src="{espace.imgPres[0]}" alt="{basename(espace.imgPres[0])}" class="w-full h-full object-cover" />
                </div>
            {/if}

            {#if espace.images && espace.images.length > 0}
                <div class="grid grid-cols-2 gap-4">
                    {#each espace.images as img}
                        <img src="{img}" alt="{basename(img)}" class="w-full h-40 object-cover rounded" />
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    .font-serif { font-family: 'Noto Serif', serif; }
</style>
