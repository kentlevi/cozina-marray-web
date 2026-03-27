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
          poster="/videos/cozina-de-marray/video-hero-poster.webp"
          class="w-full h-full object-cover"
        >
          <source src="/videos/cozina-de-marray/video-hero.mp4" type="video/mp4" >
        </video>
        <div class="absolute inset-0 bg-gradient-to-b from-cm-surface/80 via-cm-surface/40 to-cm-surface"/>
      </div>
      <div class="relative z-10 text-center px-6 max-w-4xl">
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
            <NuxtImg class="relative rounded-cm-lg shadow-2xl object-cover w-full aspect-[4/5] transform group-hover:-rotate-1 transition-transform duration-500" src="/images/cozina-de-marray/signature-grill.webp" alt="Signature Grill" loading="lazy" width="800" quality="80" densities="1" />
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
            <NuxtImg class="relative rounded-cm-lg shadow-2xl object-cover w-full aspect-[4/5] transform group-hover:rotate-1 transition-transform duration-500" src="/images/cozina-de-marray/morning-cafe.webp" alt="Morning Cafe" loading="lazy" width="800" quality="80" densities="1" />
          </div>
        </div>
      </section>

      <!-- Evening Bar -->
      <section v-reveal class="py-24 md:py-32 px-8 max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div v-reveal.left class="relative group h-[500px]">
            <div class="absolute inset-0 bg-cm-primary-container/20 rounded-cm-lg mix-blend-overlay"/>
            <NuxtImg class="w-full h-full object-cover rounded-cm-lg shadow-2xl transition-all duration-700 group-hover:scale-105" src="/images/cozina-de-marray/evening-bar.webp" alt="Evening Bar" loading="lazy" width="800" quality="80" densities="1" />
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
                <NuxtImg class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/cozina-de-marray/smoked-beef-ribs.webp" alt="Smoked Beef Ribs" loading="lazy" width="600" quality="80" />
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
                <NuxtImg class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/cozina-de-marray/seafood-linguine.webp" alt="Seafood Linguine" loading="lazy" width="600" quality="80" />
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
                <NuxtImg class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/cozina-de-marray/heritage-salad.webp" alt="Heritage Salad" loading="lazy" width="600" quality="80" />
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

      <!-- Cinematic Shorts Carousel -->
      <section v-reveal.fast class="bg-cm-surface py-24 md:py-32 overflow-hidden border-t border-cm-surface-variant/20">
        <div class="px-8 mb-12">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div class="max-w-xl">
              <span class="text-cm-secondary font-cm-headline font-bold tracking-widest text-sm uppercase mb-4 block">Our Visual Journey</span>
              <h2 class="text-5xl md:text-6xl font-cm-headline font-black tracking-tighter text-cm-on-surface leading-[0.9]">Cinematic <br><span class="text-cm-primary-container">Shorts</span></h2>
            </div>
          </div>
        </div>

        <div class="carousel-container px-4">
          <Carousel v-bind="carouselConfig" class="cinematic-carousel">
            <Slide v-for="short in cinematicShorts" :key="short.id">
              <div class="px-2 w-full">
                <div class="relative aspect-[9/16] w-full bg-cm-surface-container rounded-cm-xl overflow-hidden group shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                  <video 
                    loop 
                    muted 
                    playsinline 
                    :poster="short.poster"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    @mouseover="$event.target.play()"
                    @mouseleave="$event.target.pause()"
                  >
                    <source :src="short.video" type="video/mp4">
                  </video>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div class="absolute bottom-6 left-6 right-6 text-left">
                    <h3 class="text-white font-cm-headline font-bold text-lg tracking-tight drop-shadow-lg">{{ short.title }}</h3>
                  </div>
                  <!-- Play Button Overlay -->
                  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span class="material-symbols-outlined text-white/50 text-5xl transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">play_circle</span>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const heroVideo = ref(null)

const cinematicShorts = [
  { id: 1, title: 'Evening Toast', video: '/videos/campain/A_Toast_to_the_Evening_version_1.mp4', poster: '/videos/campain/A_Toast_to_the_Evening_version_1_poster.webp' },
  { id: 2, title: 'Artisanal Light', video: '/videos/campain/Artisanal_Textures_in_Light_version_1.mp4', poster: '/videos/campain/Artisanal_Textures_in_Light_version_1_poster.webp' },
  { id: 3, title: 'Morning Ritual', video: '/videos/campain/Elevate_Your_Morning_Ritual_version_1.mp4', poster: '/videos/campain/Elevate_Your_Morning_Ritual_version_1_poster.webp' },
  { id: 4, title: 'The Modern Flame', video: '/videos/campain/Mastery_Within_the_Modern_Flame_version_1.mp4', poster: '/videos/campain/Mastery_Within_the_Modern_Flame_version_1_poster.webp' },
  { id: 5, title: 'Heritage Spread', video: '/videos/campain/Morning_Heritage_Spread_version_1.mp4', poster: '/videos/campain/Morning_Heritage_Spread_version_1_poster.webp' },
  { id: 6, title: 'Coal Refinement', video: '/videos/campain/Refined_by_the_Coal_version_1.mp4', poster: '/videos/campain/Refined_by_the_Coal_version_1_poster.webp' },
  { id: 7, title: 'Fire & Earth', video: '/videos/campain/Rooted_in_Earth,_Refined_by_Fire_version_1.mp4', poster: '/videos/campain/Rooted_in_Earth,_Refined_by_Fire_version_1_poster.webp' },
  { id: 8, title: 'Soil & Sea', video: '/videos/campain/Sourced_from_Soil_and_Sea_version_1.mp4', poster: '/videos/campain/Sourced_from_Soil_and_Sea_version_1_poster.webp' },
  { id: 9, title: 'Sustaining Flame', video: '/videos/campain/Sustaining_the_Flame_version_1.mp4', poster: '/videos/campain/Sustaining_the_Flame_version_1_poster.webp' },
  { id: 10, title: 'Living Fire', video: '/videos/campain/The_Art_of_the_Living_Fire_version_1.mp4', poster: '/videos/campain/The_Art_of_the_Living_Fire_version_1_poster.webp' },
  { id: 11, title: 'Honor The Flame', video: '/videos/campain/Honor_Her_With_The_Flame_version_1.mp4', poster: '/videos/campain/Honor_Her_With_The_Flame_version_1_poster.webp' }
]

const carouselConfig = {
  itemsToShow: 1.2,
  wrapAround: true,
  itemsToScroll: 1,
  gap: 16,
  snapAlign: 'center',
  breakpoints: {
    640: { itemsToShow: 2.2 },
    1024: { itemsToShow: 3.5 },
    1280: { itemsToShow: 4.5 }
  }
}

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
  background-image: url('/images/cozina-de-marray/wood-grain-overlay.webp');
  opacity: 0.03;
}

/* Carousel Custom Styling */
.cinematic-carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.1);
  --vc-nav-color: white;
  --vc-nav-border-radius: 50%;
  --vc-nav-width: 48px;
  --vc-nav-height: 48px;
}

.cinematic-carousel .carousel__prev,
.cinematic-carousel .carousel__next {
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.cinematic-carousel .carousel__prev:hover,
.cinematic-carousel .carousel__next:hover {
  background: white;
  color: black;
  transform: scale(1.1);
}

.carousel__track {
  margin: 0 !important;
}
</style>
