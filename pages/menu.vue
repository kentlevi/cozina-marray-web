<template>
  <div class="bg-cm-surface text-cm-on-surface font-cm-body selection:bg-cm-primary-container selection:text-cm-on-primary-container">
    <!-- Hero Section -->
    <section class="relative h-[409px] min-h-[320px] w-full flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-black/60 z-10"/>
      <div class="absolute inset-0">
        <NuxtImg
          class="w-full h-full object-cover"
          src="/images/cozina-de-marray/menu-hero.webp"
          alt="Menu hero"
          loading="eager"
          fetchpriority="high"
          width="1920"
          quality="85"
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

        <!-- Campaign Gallery (The Living Flame Peek Carousel) -->
        <section v-reveal class="pt-4 pb-24 md:pt-8 md:pb-32 overflow-hidden">
          <div class="max-w-screen-2xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div class="space-y-4">
              <span class="text-cm-secondary font-cm-headline font-bold tracking-[0.2em] uppercase text-xs block">Cinematic Shorts</span>
              <h2 class="text-4xl md:text-6xl font-cm-headline font-bold tracking-tight text-cm-on-surface">The Living Flame</h2>
            </div>
            <div class="flex gap-4">
              <button 
                class="size-12 rounded-full border border-cm-outline-variant/30 flex items-center justify-center hover:bg-cm-primary-container hover:text-cm-on-primary-container transition-all"
                @click="prevSlide(true)"
              >
                <span class="material-symbols-outlined">west</span>
              </button>
              <button 
                class="size-12 rounded-full border border-cm-outline-variant/30 flex items-center justify-center hover:bg-cm-primary-container hover:text-cm-on-primary-container transition-all"
                @click="nextSlide(true)"
              >
                <span class="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>

          <div 
            class="relative"
            @mouseenter="pauseAutoPlay"
            @mouseleave="resumeAutoPlay"
          >
            <div 
              class="flex will-change-transform"
              :class="[transitionEnabled ? 'transition-transform duration-[800ms] ease-in-out' : '']"
              :style="{ 
                transform: `translate3d(calc(${(isMobile ? '50% - 40%' : '50% - 15.5%')} - ${(currentIndex) * (isMobile ? 84 : 32.5)}%), 0, 0)`,
                gap: isMobile ? '1rem' : '1.5rem'
               }"
            >
              <div 
                v-for="(video, idx) in loopedVideos" 
                :key="'video-' + idx"
                class="flex-shrink-0 w-[80%] md:w-[31%] relative aspect-[9/16] rounded-cm-xl overflow-hidden shadow-xl bg-black group transition-all duration-500 backface-visibility-hidden transform-gpu"
                :class="[idx === currentIndex ? 'z-20 scale-105 shadow-cm-glow' : 'opacity-30 grayscale z-10 scale-95 blur-[0.5px]']"
              >
                <video
                  :ref="el => setVideoRef(el, idx)"
                  loop
                  muted
                  playsinline
                  preload="metadata"
                  :poster="`/videos/campain/${video.file.replace('.mp4', '_poster.webp')}`"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source :src="`/videos/campain/${video.file}`" type="video/mp4" >
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div class="absolute bottom-6 left-6 z-20">
                  <p class="text-cm-primary-container font-cm-headline font-bold tracking-widest uppercase text-[10px] mb-1">{{ video.subtitle || 'MASTERED BY FIRE' }}</p>
                  <h4 class="text-lg font-cm-headline font-bold text-white line-clamp-1">{{ video.title }}</h4>
                </div>

                <!-- Active Status Gauge -->
                <div 
                  v-if="currentIndex === idx"
                  class="absolute top-0 left-0 w-full h-1 bg-cm-primary-container z-30"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onActivated, onUnmounted, nextTick } from 'vue'

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

const galleryRefs = ref([])
const currentIndex = ref(11) // Start at the middle section
const autoPlayTimer = ref(null)
const transitionEnabled = ref(true)

const campaignVideos = [
  { title: "The Living Fire", file: "The_Art_of_the_Living_Fire_version_1.mp4", subtitle: "BRAND NARRATIVE" },
  { title: "Honor The Flame", file: "Honor_Her_With_The_Flame_version_1.mp4", subtitle: "SIGNATURE STORY" },
  { title: "Modern Flame Mastery", file: "Mastery_Within_the_Modern_Flame_version_1.mp4", subtitle: "OUR TECHNIQUE" },
  { title: "Refined by Coal", file: "Refined_by_the_Coal_version_1.mp4", subtitle: "SIGNATURE GRILL" },
  { title: "Soil and Sea", file: "Sourced_from_Soil_and_Sea_version_1.mp4", subtitle: "OUR SOURCE" },
  { title: "Rooted in Earth", file: "Rooted_in_Earth,_Refined_by_Fire_version_1.mp4", subtitle: "THE ORIGIN" },
  { title: "Artisanal Textures", file: "Artisanal_Textures_in_Light_version_1.mp4", subtitle: "MODERN HEARTH" },
  { title: "Morning Ritual", file: "Elevate_Your_Morning_Ritual_version_1.mp4", subtitle: "MORNING CAFE" },
  { title: "Heritage Spread", file: "Morning_Heritage_Spread_version_1.mp4", subtitle: "MORNING CAFE" },
  { title: "Sustaining the Flame", file: "Sustaining_the_Flame_version_1.mp4", subtitle: "OUR COMMITMENT" },
  { title: "A Toast to the Evening", file: "A_Toast_to_the_Evening_version_1.mp4", subtitle: "EVENING BAR" },
]

const loopedVideos = computed(() => {
  // Triple buffer for infinite seamless scroll
  return [...campaignVideos, ...campaignVideos, ...campaignVideos]
})

const setVideoRef = (el, idx) => {
  if (el) galleryRefs.value[idx] = el
}

const nextSlide = (manual = false) => {
  if (manual) stopAutoPlayPermanently()
  currentIndex.value++
}

const prevSlide = (manual = false) => {
  if (manual) stopAutoPlayPermanently()
  currentIndex.value--
}

const isAutoPlayPaused = ref(false)
const isAutoPlayStopped = ref(false)

const stopAutoPlayPermanently = () => {
  isAutoPlayStopped.value = true
  stopAutoPlay()
}

const startAutoPlay = () => {
  if (isAutoPlayStopped.value) return
  stopAutoPlay()
  autoPlayTimer.value = setInterval(() => nextSlide(false), 5000)
}

const stopAutoPlay = () => {
  if (autoPlayTimer.value) clearInterval(autoPlayTimer.value)
}

const pauseAutoPlay = () => stopAutoPlay()
const resumeAutoPlay = () => startAutoPlay()

const updatePlayback = () => {
  if (galleryRefs.value && galleryRefs.value.length) {
    galleryRefs.value.forEach((v, idx) => {
      if (v) {
        if (idx === currentIndex.value) {
          v.muted = true
          v.play().catch(() => {})
        } else {
          v.pause()
        }
      }
    })
  }
}

// Logic for seamless jump
watch(currentIndex, (newVal) => {
  updatePlayback()
  
  // Boundary logic for the triple buffer
  if (newVal >= 22) { // 11 (offset) + 11 (original)
    setTimeout(() => {
      // 1. Disable transition FIRST
      transitionEnabled.value = false
      
      // 2. Jump index in the next frame
      requestAnimationFrame(() => {
        currentIndex.value = 11
        
        // 3. Re-enable transition after the jump is rendered
        requestAnimationFrame(() => {
          setTimeout(() => {
            transitionEnabled.value = true
          }, 50)
        })
      })
    }, 810) 
  }
  if (newVal < 11) {
    setTimeout(() => {
      transitionEnabled.value = false
      requestAnimationFrame(() => {
        currentIndex.value = 21
        requestAnimationFrame(() => {
          setTimeout(() => {
            transitionEnabled.value = true
          }, 50)
        })
      })
    }, 810)
  }
})

useHead({
  title: 'Menu | Cozina de Marray',
})

onMounted(() => {
  toggleMobile()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', toggleMobile)
  }
  setTimeout(updatePlayback, 100)
  startAutoPlay()
})

onActivated(() => {
  toggleMobile()
  setTimeout(updatePlayback, 100)
  startAutoPlay()
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', toggleMobile)
  }
  stopAutoPlay()
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
