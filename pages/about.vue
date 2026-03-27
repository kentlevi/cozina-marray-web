<template>
  <main class="relative bg-cm-background text-cm-on-surface">
    <!-- Hero Section: Split Editorial Layout -->
    <section class="relative min-h-[921px] flex flex-col md:flex-row items-center overflow-hidden">
      <div v-reveal.left.fast class="w-full md:w-1/2 px-8 md:px-16 py-20 z-10">
        <span class="text-cm-secondary font-cm-headline font-bold tracking-widest text-sm uppercase mb-6 block">Est. 1984</span>
        <h1 class="font-cm-headline text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] text-cm-on-surface tracking-[-0.04em] mb-8">
          Rooted in <br><span class="text-cm-primary-container">Ginatilan</span>
        </h1>
        <p class="text-cm-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed font-light">
          An editorial journey through the heart of Cebuano culinary heritage, where tradition meets modern refinement.
        </p>
      </div>
      <div v-reveal.right.delay2 class="w-full md:w-1/2 h-[614px] md:h-[1126px] relative mt-10 md:mt-0">
        <div class="absolute inset-0 md:-top-10 md:-right-10 bg-cm-surface-container-low rounded-cm-lg md:rounded-none overflow-hidden transform md:scale-105 shadow-2xl">
          <img
            class="w-full h-full object-cover"
            src="/images/cozina-de-marray/about-hero.webp"
            alt="Cozina de Marray interior hero"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <!-- Content Block 1: The Origin -->
    <section v-reveal class="py-32 px-8 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      <div v-reveal.right class="md:col-span-5 md:order-2 space-y-8">
        <h2 class="font-cm-headline text-4xl font-bold text-cm-on-surface">The Hearth of the Home</h2>
        <p class="text-cm-on-surface-variant text-lg leading-loose editorial-dropcap">
          Every story has a beginning, and ours started in a small coastal kitchen where the rhythm of the waves dictated the menu of the day. In Ginatilan, cooking wasn't just about sustenance; it was an act of reverence for the land and sea. We learned that the secret to the perfect roast wasn't just the heat, but the wood—sourced from the surrounding groves, infusing every dish with a memory of the earth.
        </p>
        <p class="text-cm-on-surface-variant text-lg leading-loose">
          At Cozina de Marray, we carry that same spirit. Our "Modern Hearth" philosophy bridges the gap between those sun-drenched coastal afternoons and the sophisticated urban dining experience of today.
        </p>
      </div>
      <div v-reveal.left.delay2 class="md:col-span-7 md:order-1">
        <div class="aspect-[4/5] rounded-cm-lg overflow-hidden shadow-2xl bg-cm-surface-container">
          <img
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCymM_kWQFhYP_i5klxtxvh-Cakg-b5dpTB94qesCQz7tq-VC-WlQLO-D65hY9xXNzD_VQsgn2QwlpR2aV9SY6FvrHDYMLW0ZiALjqqves6xoUf_ujiNid9XmQJEeejI5yEzFNL0ZPPHAihmR_x-GCoMSjAkYsdt7h2WYH1hBRM08kh1NR7X64jrEI-3X9Z8VygJsHxLiiwHVae8G-0Rg211T0Sv7CdTpp7POSYKwEn2AAycFF7T0i1NvERuO2-HoLQ9TWDYCD_b92S"
            alt="Traditional hearth preparation"
            loading="lazy"
            decoding="async"
            referrerpolicy="no-referrer"
          >
        </div>
      </div>
    </section>

    <!-- Highlight Quote: Massive & Italicized -->
    <section v-reveal class="w-full bg-cm-surface-container-lowest py-24 md:py-40 px-8">
      <div v-reveal.fast class="max-w-5xl mx-auto text-center">
        <div class="mb-12 text-cm-secondary/40">
          <span class="material-symbols-outlined text-7xl" style="font-variation-settings: 'FILL' 1;">format_quote</span>
        </div>
        <blockquote class="font-cm-headline italic text-4xl md:text-7xl leading-tight text-cm-secondary font-light">
          "We don't just serve food; we serve the history of a town that taught us how to respect the flame."
        </blockquote>
        <cite class="mt-12 block not-italic font-cm-headline font-bold text-cm-on-surface uppercase tracking-[0.2em] text-sm">Chef Mateo Marray</cite>
      </div>
    </section>

    <!-- Content Block 2: The Philosophy -->
    <section v-reveal class="py-32 px-8 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      <div v-reveal.left class="md:col-span-7 order-2 md:order-2">
        <div class="aspect-video rounded-cm-lg overflow-hidden shadow-2xl bg-cm-surface-container">
          <img
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAacRGan7xV6mWfjIUKYTzA48yiAauY-caOeiiQBh1Ih8rUZnp4G6pnoVoWu7PLBtu4YTr3-pd_vFnwzxV9lnVjHrZawuTr2VPbBM8ovSh93ZiobDMh2AEmSWJyvr9pZ3wZEfT2eWdkfqcq6rFDNYTFIZ8zZtrjTlFcSM9cSx5UogpylCgOt0IVmR4Ylk1ya9O_7Z2AW5C-20GLNOmtg9g25aSl1Ca47Rs9z0OqdUBG0sRUdQD6Un0O4_AJ-XxoznSzKBQQuz1NZSy"
            alt="Sustainable sourcing details"
            loading="lazy"
            decoding="async"
            referrerpolicy="no-referrer"
          >
        </div>
      </div>
      <div v-reveal.right.delay2 class="md:col-span-5 space-y-8 order-1 md:order-1">
        <h2 class="font-cm-headline text-4xl font-bold text-cm-on-surface">Sustainable Soul</h2>
        <p class="text-cm-on-surface-variant text-lg leading-loose">
          Sustainability isn't a trend for us; it’s our heritage. From the small-scale fishermen of Ginatilan to the organic farmers in the highlands of Cebu, our partners are chosen for their dedication to the environment. 
        </p>
        <div class="flex flex-col gap-6 pt-4">
          <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-cm-secondary">restaurant</span>
            <div>
              <h4 class="font-cm-headline font-bold text-cm-on-surface mb-1">Authentic Sourcing</h4>
              <p class="text-cm-on-surface-variant text-sm">Direct partnerships with local Ginatilan growers and artisans.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-cm-secondary">local_fire_department</span>
            <div>
              <h4 class="font-cm-headline font-bold text-cm-on-surface mb-1">Elemental Cooking</h4>
              <p class="text-cm-on-surface-variant text-sm">Focusing on open-flame techniques and traditional wood smoking.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-reveal class="relative py-40 overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-30">
        <video 
          ref="narrativeVideo"
          autoplay 
          loop 
          muted 
          playsinline 
          preload="metadata"
          poster="/videos/cozina-de-marray/video-narrative-poster.png"
          class="w-full h-full object-cover"
        >
          <source src="/videos/cozina-de-marray/video-narrative.mp4" type="video/mp4" >
        </video>
      </div>
      <div v-reveal.fast class="relative z-10 px-8 text-center max-w-3xl mx-auto">
        <h2 class="font-cm-headline text-5xl md:text-6xl font-black text-cm-on-surface mb-8">Join the Narrative</h2>
        <p class="text-cm-on-surface text-xl font-light mb-12 leading-relaxed">
          The Cozina de Marray experience is an invitation to slow down, to savor, and to become a part of our continuing story. We await you at our table.
        </p>
        <NuxtLink to="/menu" class="inline-flex items-center gap-3 min-w-[200px] justify-center rounded-cm-xl h-14 px-10 bg-gradient-to-r from-cm-primary-container to-cm-on-primary-fixed-variant text-white text-lg font-bold tracking-wide shadow-xl hover:translate-y-[-2px] transition-all">
          Explore the Menu
          <span class="material-symbols-outlined">arrow_forward</span>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
const narrativeVideo = ref(null)

const resumeNarrativeVideo = () => {
  narrativeVideo.value?.play?.().catch(() => {})
}

useHead({
  title: 'Our Story | Cozina de Marray',
})

onMounted(() => {
  setTimeout(resumeNarrativeVideo, 100)
})

onActivated(() => {
  setTimeout(resumeNarrativeVideo, 100)
})
</script>

<style scoped>
.editorial-dropcap::first-letter {
  float: left;
  font-family: "Space Grotesk", sans-serif;
  font-size: 5rem;
  line-height: 0.8;
  padding-right: 0.5rem;
  color: #f0bd8b;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
