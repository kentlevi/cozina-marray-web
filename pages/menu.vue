<template>
  <div class="bg-cm-surface text-cm-on-surface font-cm-body selection:bg-cm-primary-container selection:text-cm-on-primary-container">
    <!-- Hero Section -->
    <section class="relative h-[409px] min-h-[320px] w-full flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-black/60 z-10"/>
      <div class="absolute inset-0">
        <NuxtImg
          :class="['w-full h-full object-cover', !hasHeroPlayed ? 'animate-fade-in opacity-0' : 'opacity-100']"
          src="/images/cozina-de-marray/menu-hero.webp"
          alt="Menu hero"
          loading="eager"
          fetchpriority="high"
          width="1920"
          quality="80"
          densities="1"
        />
      </div>
      <div class="relative z-20 text-center px-6">
        <h2 class="font-cm-headline text-6xl md:text-7xl font-bold tracking-tighter text-cm-on-surface mb-4">Our Menu</h2>
        <div class="h-1 w-24 bg-cm-primary-container mx-auto"/>
      </div>
    </section>

    <!-- Interactive Tabs -->
    <nav class="sticky top-20 z-40 bg-cm-surface border-b border-cm-outline-variant/10">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex items-center justify-center gap-4 md:gap-16">
          <button 
            v-for="cat in categories" 
            :key="cat"
            :class="[
              'py-5 text-xs md:text-sm font-bold tracking-widest uppercase border-b-2 transition-all duration-300',
              activeCategory === cat 
                ? 'border-cm-primary-container text-cm-on-surface' 
                : 'border-transparent text-cm-on-surface-variant hover:text-cm-on-surface'
            ]"
            @click="activeCategory = cat; currentPage = 1"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Dynamic Menu Grid -->
    <main class="bg-cm-surface-container-low py-16 px-6 min-h-[600px]">
      <div class="max-w-6xl mx-auto">
        <div v-if="paginatedMenuItems.length > 0" class="space-y-12">
          <div class="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div 
              v-for="item in paginatedMenuItems" 
              :key="item.id"
              v-reveal.fast
              class="flex gap-5 bg-cm-surface-container p-4 rounded-cm-xl items-start group hover:bg-cm-surface-container-high transition-all"
            >
              <div class="size-24 flex-shrink-0 relative overflow-hidden rounded-cm-lg grayscale group-hover:grayscale-0 transition-all shadow-md bg-cm-surface-container-high">
                <NuxtImg
                  :src="item.image"
                  :alt="item.name"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  width="200"
                  height="200"
                  quality="80"
                />
              </div>
              <div class="flex-grow">
                <div class="flex justify-between items-start mb-1">
                  <h3 class="font-cm-headline text-lg font-bold text-cm-on-surface">{{ item.name }}</h3>
                  <span class="text-cm-primary-container font-bold text-sm">{{ item.price }}</span>
                </div>
                <p class="text-cm-on-surface-variant text-sm leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <!-- Pagination Controls -->
          <div v-if="totalPages > 1" class="flex justify-center items-center gap-4 pt-8 border-t border-cm-outline-variant/10">
            <button 
              :disabled="currentPage === 1"
              class="size-10 flex items-center justify-center rounded-full border border-cm-outline-variant/30 text-cm-on-surface hover:bg-cm-primary-container hover:text-cm-on-primary-container disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-cm-on-surface transition-all"
              @click="currentPage--"
            >
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <div class="flex gap-2">
              <button 
                v-for="p in totalPages" 
                :key="p"
                :class="[
                  'size-10 rounded-full font-bold flex items-center justify-center transition-all',
                  currentPage === p 
                    ? 'bg-cm-primary-container text-cm-on-primary-container shadow-lg' 
                    : 'text-cm-on-surface hover:bg-cm-surface-container-highest'
                ]"
                @click="currentPage = p"
              >
                {{ p }}
              </button>
            </div>
            <button 
              :disabled="currentPage === totalPages"
              class="size-10 flex items-center justify-center rounded-full border border-cm-outline-variant/30 text-cm-on-surface hover:bg-cm-primary-container hover:text-cm-on-primary-container disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-cm-on-surface transition-all"
              @click="currentPage++"
            >
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div v-else v-reveal.fast class="text-center py-20">
          <p class="text-cm-on-surface-variant italic">No items found in this category.</p>
        </div>

        <!-- Cinematic Shorts Carousel -->
        <section v-reveal.fast class="pt-4 pb-24 md:pt-8 md:pb-32 overflow-hidden border-t border-cm-outline-variant/10">
          <div class="max-w-screen-2xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div class="space-y-4">
              <span class="text-cm-secondary font-cm-headline font-bold tracking-[0.2em] uppercase text-xs block">Cinematic Shorts</span>
              <h2 class="text-4xl md:text-6xl font-cm-headline font-bold tracking-tight text-cm-on-surface">The Living Flame</h2>
            </div>
          </div>

          <div class="carousel-container px-6">
            <Carousel v-bind="carouselConfig" class="cinematic-carousel">
              <Slide v-for="short in cinematicShorts" :key="short.id">
                <div class="px-2 w-full">
                  <div class="relative aspect-[9/16] w-full bg-black rounded-cm-xl overflow-hidden group shadow-2xl transition-all duration-700">
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
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div class="absolute bottom-8 left-8 right-8 text-left z-20">
                      <p class="text-cm-primary-container font-cm-headline font-bold tracking-widest uppercase text-[10px] mb-2">{{ short.subtitle }}</p>
                      <h3 class="text-white font-cm-headline font-bold text-2xl tracking-tight drop-shadow-lg">{{ short.title }}</h3>
                    </div>
                    <!-- Play Button Overlay -->
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span class="material-symbols-outlined text-white/50 text-4xl transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">play_circle</span>
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
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onActivated, onUnmounted, nextTick } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const carouselRef = ref(null)

defineOptions({
  name: 'CozinaMenuPage'
})

const categories = ['ALL', 'MORNING CAFE', 'SIGNATURE GRILL', 'EVENING BAR']
const activeCategory = ref('ALL')

const menuItems = [
  // MORNING CAFE
  {
    id: 1,
    name: "Signature Espresso",
    price: "₱180",
    category: "MORNING CAFE",
    description: "Rich dark roast with velvet crema, sourced from high-altitude volcanic soil.",
    image: "/images/cozina-de-marray/signature-espresso.webp"
  },
  {
    id: 2,
    name: "Pastry Basket",
    price: "₱450",
    category: "MORNING CAFE",
    description: "Selection of house-made buttery croissants and seasonal fruit danishes.",
    image: "/images/cozina-de-marray/pastry-basket.webp"
  },
  {
    id: 3,
    name: "Ginatilan Hot Choco",
    price: "₱150",
    category: "MORNING CAFE",
    description: "Traditional local tablea chocolate frothed to perfection.",
    image: "/images/cozina-de-marray/ginatilan-hot-choco.webp"
  },
  // SIGNATURE GRILL
  {
    id: 4,
    name: "Grilled Sea Bass",
    price: "₱1,250",
    category: "SIGNATURE GRILL",
    description: "Fresh caught, herb crusted with charred lemon and sea salt flakes.",
    image: "/images/cozina-de-marray/grilled-sea-bass.webp"
  },
  {
    id: 5,
    name: "Wagyu Ribeye",
    price: "₱3,200",
    category: "SIGNATURE GRILL",
    description: "Aged 28 days, marble score 7+, finished with roasted garlic bone marrow butter.",
    image: "/images/cozina-de-marray/wagyu-ribeye.webp"
  },
  {
    id: 6,
    name: "Truffle Tagliatelle",
    price: "₱850",
    category: "SIGNATURE GRILL",
    description: "Hand-rolled daily, creamy parmesan emulsion, fresh shaved seasonal truffles.",
    image: "/images/cozina-de-marray/truffle-tagliatelle.webp"
  },
  {
    id: 7,
    name: "Pan-Seared Scallops",
    price: "₱920",
    category: "SIGNATURE GRILL",
    description: "Hokkaido scallops, sweet pea purée, mint oil, and crispy serrano ham shards.",
    image: "/images/cozina-de-marray/pan-seared-scallops.webp"
  },
  {
    id: 8,
    name: "Heritage Smoked Pork",
    price: "₱780",
    category: "SIGNATURE GRILL",
    description: "Slow-smoked for 24 hours over native wood, served with a citrus soy glaze.",
    image: "/images/cozina-de-marray/heritage-smoked-pork.webp"
  },
  {
    id: 9,
    name: "Balsamic Glazed Salmon",
    price: "₱980",
    category: "SIGNATURE GRILL",
    description: "Pan-seared Atlantic salmon with a honey-balsamic reduction.",
    image: "/images/cozina-de-marray/balsamic-glazed-salmon.webp"
  },
  // EVENING BAR
  {
    id: 10,
    name: "Evening Botanical",
    price: "₱420",
    category: "EVENING BAR",
    description: "Infused small-batch gin with lavender, elderflower, and artisanal tonic.",
    image: "/images/cozina-de-marray/evening-botanical.webp"
  },
  {
    id: 11,
    name: "Heirloom Burrata",
    price: "₱580",
    category: "EVENING BAR",
    description: "Creamy burrata, colorful heirloom tomatoes, aged balsamic, and basil crystals.",
    image: "/images/cozina-de-marray/heirloom-burrata.webp"
  },
  {
    id: 12,
    name: "Native Craft Beer",
    price: "₱280",
    category: "EVENING BAR",
    description: "Small-batch amber ale brewed with local honey and roasted malts.",
    image: "/images/cozina-de-marray/native-craft-beer.webp"
  }
]

const filteredMenuItems = computed(() => {
  if (activeCategory.value === 'ALL') return menuItems
  return menuItems.filter(item => item.category === activeCategory.value)
})

const itemsPerPage = 6
const currentPage = ref(1)

const isMobile = ref(false)

const toggleMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 768
  }
}

const totalPages = computed(() => Math.ceil(filteredMenuItems.value.length / itemsPerPage))

const paginatedMenuItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredMenuItems.value.slice(start, end)
})

const cinematicShorts = [
  { id: 1, title: 'The Living Fire', video: '/videos/campain/The_Art_of_the_Living_Fire_version_1.mp4', poster: '/videos/campain/The_Art_of_the_Living_Fire_version_1_poster.webp', subtitle: 'CHAPTER I' },
  { id: 2, title: 'Honor The Flame', video: '/videos/campain/Honor_Her_With_The_Flame_version_1.mp4', poster: '/videos/campain/Honor_Her_With_The_Flame_version_1_poster.webp', subtitle: 'CHAPTER II' },
  { id: 3, title: 'Modern Flame Mastery', video: '/videos/campain/Mastery_Within_the_Modern_Flame_version_1.mp4', poster: '/videos/campain/Mastery_Within_the_Modern_Flame_version_1_poster.webp', subtitle: 'CHAPTER III' },
  { id: 4, title: 'Refined by Coal', video: '/videos/campain/Refined_by_the_Coal_version_1.mp4', poster: '/videos/campain/Refined_by_the_Coal_version_1_poster.webp', subtitle: 'CHAPTER IV' },
  { id: 5, title: 'Soil and Sea', video: '/videos/campain/Sourced_from_Soil_and_Sea_version_1.mp4', poster: '/videos/campain/Sourced_from_Soil_and_Sea_version_1_poster.webp', subtitle: 'CHAPTER V' },
  { id: 6, title: 'Rooted in Earth', video: '/videos/campain/Rooted_in_Earth,_Refined_by_Fire_version_1.mp4', poster: '/videos/campain/Rooted_in_Earth,_Refined_by_Fire_version_1_poster.webp', subtitle: 'CHAPTER VI' },
  { id: 7, title: 'Artisanal Textures', video: '/videos/campain/Artisanal_Textures_in_Light_version_1.mp4', poster: '/videos/campain/Artisanal_Textures_in_Light_version_1_poster.webp', subtitle: 'CHAPTER VII' },
  { id: 8, title: 'Morning Ritual', video: '/videos/campain/Elevate_Your_Morning_Ritual_version_1.mp4', poster: '/videos/campain/Elevate_Your_Morning_Ritual_version_1_poster.webp', subtitle: 'CHAPTER VIII' },
  { id: 9, title: 'Heritage Spread', video: '/videos/campain/Morning_Heritage_Spread_version_1.mp4', poster: '/videos/campain/Morning_Heritage_Spread_version_1_poster.webp', subtitle: 'CHAPTER IX' },
  { id: 10, title: 'Sustaining the Flame', video: '/videos/campain/Sustaining_the_Flame_version_1.mp4', poster: '/videos/campain/Sustaining_the_Flame_version_1_poster.webp', subtitle: 'CHAPTER X' },
  { id: 11, title: 'A Toast to the Evening', video: '/videos/campain/A_Toast_to_the_Evening_version_1.mp4', poster: '/videos/campain/A_Toast_to_the_Evening_version_1_poster.webp', subtitle: 'CHAPTER XI' }
]

const carouselConfig = {
  itemsToShow: 1.25,
  wrapAround: true,
  itemsToScroll: 1,
  gap: 24,
  snapAlign: 'center',
  breakpoints: {
    640: { itemsToShow: 1.75 },
    1024: { itemsToShow: 2.25 },
    1280: { itemsToShow: 3.25 }
  }
}

useHead({
  title: 'Menu | Cozina de Marray',
})

const { hasHeroPlayed, markHeroPlayed } = useAnimations()

onMounted(() => {
  toggleMobile()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', toggleMobile)
  }
  setTimeout(markHeroPlayed, 1500)
})

onActivated(() => {
  toggleMobile()
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', toggleMobile)
  }
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
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
  padding: 40px 0 !important;
  display: flex !important;
  backface-visibility: hidden;
  perspective: 1000px;
}

.carousel__slide {
  padding: 0 !important; /* Managed by gap */
  transition: all 0.7s cubic-bezier(0.2, 0, 0, 1);
  filter: grayscale(1) opacity(0.3);
  transform: scale(0.95);
  transform-origin: center;
}

.carousel__slide--active {
  filter: grayscale(0) opacity(1);
  transform: scale(1.05);
  z-index: 10;
}
</style>
