<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <video
          ref="heroVideo"
          autoplay
          loop
          muted
          playsinline
          poster="/videos/cozina-de-marray/video-hero-poster.png"
          class="w-full h-full object-cover"
        >
          <source src="/videos/cozina-de-marray/video-hero.mp4" type="video/mp4" >
        </video>
        <div class="absolute inset-0 bg-gradient-to-b from-cm-surface/80 via-cm-surface/40 to-cm-surface"/>
      </div>
      <div v-reveal.fast class="relative z-10 text-center px-6 max-w-4xl">
        <h1 class="text-6xl md:text-8xl font-cm-headline font-black text-cm-on-surface tracking-tighter mb-4 drop-shadow-2xl">
          COZINA DE MARRAY
        </h1>
        <p class="text-xl md:text-3xl font-cm-headline font-medium text-cm-secondary mb-12 italic tracking-wide">
          Good food cooked just for you!
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <NuxtLink to="/menu" class="bg-cm-primary-container hover:bg-cm-primary-container/90 text-cm-on-primary-container px-10 py-4 rounded-cm-xl h-auto flex items-center justify-center font-cm-headline font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
            View Menu
          </NuxtLink>
          <NuxtLink to="/about" class="border-2 border-cm-on-surface/20 hover:border-cm-primary-container/40 text-cm-on-surface px-10 py-4 rounded-cm-xl h-auto flex items-center justify-center font-cm-headline font-bold text-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
            Our Story
          </NuxtLink>
        </div>
      </div>
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <span class="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
      </div>
    </section>

    <!-- Zigzag Features -->
    <main class="relative">
      <div class="absolute inset-0 wood-grain-overlay pointer-events-none"/>

      <!-- Signature Grill -->
      <section v-reveal class="py-24 md:py-32 px-8 max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div v-reveal.left class="relative group">
            <div class="absolute -inset-4 bg-cm-primary-container/10 blur-2xl rounded-cm-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"/>
            <img class="relative rounded-cm-lg shadow-2xl object-cover w-full aspect-[4/5] transform group-hover:-rotate-1 transition-transform duration-500" src="/images/cozina-de-marray/signature-grill.jpg" alt="Signature Grill" loading="lazy" decoding="async" >
          </div>
          <div v-reveal.right.delay2 class="space-y-8">
            <span class="text-cm-secondary font-cm-headline font-bold tracking-[0.2em] uppercase text-sm">The Main Event</span>
            <h2 class="text-5xl md:text-6xl font-cm-headline font-bold tracking-tight text-cm-on-surface">Signature Grill</h2>
            <p class="text-cm-on-surface-variant text-lg leading-relaxed max-w-lg">
              Mastered by fire and seasoned with heritage. Our prime cuts are aged for 28 days and grilled over native charcoal to lock in a smoky, succulent flavor that defines the heart of Ginatilan.
            </p>
            <NuxtLink class="inline-flex items-center gap-2 text-cm-primary-container font-cm-headline font-bold text-lg group" to="/menu">
              Explore Grill Menu
              <span class="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Morning Cafe -->
      <section v-reveal class="bg-cm-surface-container-low py-24 md:py-32 px-8">
        <div class="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div v-reveal.left class="order-2 md:order-1 space-y-8">
            <span class="text-cm-secondary font-cm-headline font-bold tracking-[0.2em] uppercase text-sm">Sun-Drenched Sips</span>
            <h2 class="text-5xl md:text-6xl font-cm-headline font-bold tracking-tight text-cm-on-surface">Morning Cafe</h2>
            <p class="text-cm-on-surface-variant text-lg leading-relaxed max-w-lg">
              Start your day in our sun-lit sanctuary. From artisanal pour-overs to our signature bamboo-roasted lattes, every cup is a tribute to the early hours. Pair it with our fresh, house-baked pastries.
            </p>
            <NuxtLink class="inline-flex items-center gap-2 text-cm-primary-container font-cm-headline font-bold text-lg group" to="/menu">
              View Breakfast Selection
              <span class="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
            </NuxtLink>
          </div>
          <div v-reveal.right.delay2 class="order-1 md:order-2 relative group">
            <img class="relative rounded-cm-lg shadow-2xl object-cover w-full aspect-[4/5] transform group-hover:rotate-1 transition-transform duration-500" src="/images/cozina-de-marray/morning-cafe.jpg" alt="Morning Cafe" loading="lazy" decoding="async" >
          </div>
        </div>
      </section>

      <!-- Evening Bar -->
      <section v-reveal class="py-24 md:py-32 px-8 max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div v-reveal.left class="relative group h-[500px]">
            <div class="absolute inset-0 bg-cm-primary-container/20 rounded-cm-lg mix-blend-overlay"/>
            <img class="w-full h-full object-cover rounded-cm-lg shadow-2xl transition-all duration-700 group-hover:scale-105" src="/images/cozina-de-marray/evening-bar.jpg" alt="Evening Bar" loading="lazy" decoding="async" >
          </div>
          <div v-reveal.right.delay2 class="space-y-8">
            <span class="text-cm-secondary font-cm-headline font-bold tracking-[0.2em] uppercase text-sm">Liquid Alchemy</span>
            <h2 class="text-5xl md:text-6xl font-cm-headline font-bold tracking-tight text-cm-on-surface">Evening Bar</h2>
            <p class="text-cm-on-surface-variant text-lg leading-relaxed max-w-lg">
              As the sun sets, the spirits rise. Discover a curated list of local craft beers and avant-garde cocktails that blend tropical botanicals with classic mixology.
            </p>
            <NuxtLink class="inline-flex items-center gap-2 text-cm-primary-container font-cm-headline font-bold text-lg group" to="/menu">
              Bar Menu
              <span class="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Menu Highlights (Bento Grid) -->
      <section v-reveal class="bg-cm-surface-container-lowest py-24 md:py-32 px-8">
        <div class="max-w-screen-2xl mx-auto">
          <div v-reveal.fast class="text-center mb-20">
            <h2 class="text-5xl font-cm-headline font-bold tracking-tighter text-cm-on-surface mb-4">Chef’s Selection</h2>
            <div class="w-24 h-1 bg-cm-primary-container mx-auto"/>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Item 1 -->
            <div v-reveal.left class="bg-cm-surface-container rounded-cm-lg overflow-hidden group hover:bg-cm-surface-container-high transition-colors">
              <div class="h-64 overflow-hidden">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/cozina-de-marray/smoked-beef-ribs.jpg" alt="Smoked Beef Ribs" loading="lazy" decoding="async" >
              </div>
              <div class="p-8 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-2xl font-cm-headline font-bold text-cm-on-surface">Smoked Beef Ribs</h3>
                  <span class="bg-cm-primary-container text-cm-on-primary-container px-3 py-1 text-sm font-bold rounded">₱850</span>
                </div>
                <p class="text-cm-on-surface-variant text-sm">12-hour slow-cooked ribs with a house-made coffee rub and hickory glaze.</p>
              </div>
            </div>
            <!-- Item 2 -->
            <div v-reveal.delay2 class="bg-cm-surface-container rounded-cm-lg overflow-hidden group hover:bg-cm-surface-container-high transition-colors md:mt-12">
              <div class="h-64 overflow-hidden">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/cozina-de-marray/seafood-linguine.jpg" alt="Seafood Linguine" loading="lazy" decoding="async" >
              </div>
              <div class="p-8 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-2xl font-cm-headline font-bold text-cm-on-surface">Seafood Linguine</h3>
                  <span class="bg-cm-primary-container text-cm-on-primary-container px-3 py-1 text-sm font-bold rounded">₱620</span>
                </div>
                <p class="text-cm-on-surface-variant text-sm">Fresh coastal catch tossed in a sun-dried tomato and white wine reduction.</p>
              </div>
            </div>
            <!-- Item 3 -->
            <div v-reveal.right.delay3 class="bg-cm-surface-container rounded-cm-lg overflow-hidden group hover:bg-cm-surface-container-high transition-colors">
              <div class="h-64 overflow-hidden">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/cozina-de-marray/heritage-salad.jpg" alt="Heritage Salad" loading="lazy" decoding="async" >
              </div>
              <div class="p-8 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-2xl font-cm-headline font-bold text-cm-on-surface">Heritage Salad</h3>
                  <span class="bg-cm-primary-container text-cm-on-primary-container px-3 py-1 text-sm font-bold rounded">₱450</span>
                </div>
                <p class="text-cm-on-surface-variant text-sm">Locally sourced organic greens, roasted heirloom beets, and whipped goat cheese.</p>
              </div>
            </div>
          </div>
          <div v-reveal.fast class="mt-16 text-center">
            <NuxtLink to="/menu" class="inline-flex items-center justify-center border border-cm-secondary text-cm-secondary px-8 py-3 rounded-cm-full font-cm-headline font-bold hover:bg-cm-secondary hover:text-cm-on-secondary transition-all">
              Explore Full Menu
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const heroVideo = ref(null)

const resumeHeroVideo = () => {
  if (heroVideo.value) {
    heroVideo.value.muted = true
    heroVideo.value.play().catch(() => {})
  }
}

useHead({
  title: 'Cozina de Marray | Premium Grill & Bar',
  htmlAttrs: {
    class: 'dark'
  }
})

onMounted(() => {
  setTimeout(resumeHeroVideo, 100)
})

onActivated(() => {
  setTimeout(resumeHeroVideo, 100)
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.wood-grain-overlay {
  background-image: url('/images/cozina-de-marray/wood-grain-overlay.jpg');
  opacity: 0.03;
}
</style>
