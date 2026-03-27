<template>
  <div class="bg-cm-surface text-cm-on-surface font-cm-body selection:bg-cm-primary-container selection:text-cm-on-primary-container">
    <!-- Hero Section -->
    <section v-reveal.fast class="relative h-[409px] min-h-[320px] w-full flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-black/60 z-10"/>
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="/images/cozina-de-marray/menu-hero.webp"
          alt="Menu hero"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        >
      </div>
      <div v-reveal.fast class="relative z-20 text-center px-6">
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
      <div v-reveal class="max-w-6xl mx-auto">
        <div v-if="paginatedMenuItems.length > 0" class="space-y-12">
          <div class="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div 
              v-for="item in paginatedMenuItems" 
              :key="item.id"
              v-reveal.fast
              class="flex gap-5 bg-cm-surface-container p-4 rounded-cm-xl items-start group hover:bg-cm-surface-container-high transition-all"
            >
              <div class="size-24 flex-shrink-0 relative overflow-hidden rounded-cm-lg grayscale group-hover:grayscale-0 transition-all shadow-md bg-cm-surface-container-high">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                >
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
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZu2flGD-5AM5mBYCtXzew4xwMPBVBbsFvrniiqS_6_PQdKg_0HrfNKarwMyK0LVGDAj1PlPtlR-iQwpxgOa6EvrOqMHd7Sy3SRJ_HFuQ3tbTsr-7DegpjXNHKu1C9FwYti1-8ChR0-oT7P6ioopRUgoVqZOLfBN_JPNQbQ2J1TL2SmH7Tqx2lez6jL1ez2ges_tOESBzntneGgPLllJ0NV6jvi69a9jmc_g6EO1mARxCp2MJgux4dq38KAj49aKGht6mXIztnxj0r"
  },
  {
    id: 2,
    name: "Pastry Basket",
    price: "₱450",
    category: "MORNING CAFE",
    description: "Selection of house-made buttery croissants and seasonal fruit danishes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-DpHtv246p7iPm_HNdt9ZH8Z6SiPXXNR5tFUm0i9CV5kLW7OABdv4vQstaf0mK2-LTjpN2AZidYr7_CCeItuykUGwRmk5F_NUmiRnZrlrDSIAMYTgoZb_pqv_vf_1XvtH0-HjYPfA6yqZpyVeIItAj2gJdSPm41y4OYqZ_YgdtAspQ2SAeS0YJ6JMeQSDP1pQZ_B-e3QP5LoXhX3kIioxbkSLrYwiSyLvjUOamLNNTq5yEVtff76R2W-pnW9wINJDGPwTA122btIu"
  },
  {
    id: 3,
    name: "Ginatilan Hot Choco",
    price: "₱150",
    category: "MORNING CAFE",
    description: "Traditional local tablea chocolate frothed to perfection.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-NdDaTA42vdAThb1HEURyIB0y5SGCynnW_wpfg-LcB8M32WXdoAoVngS1zbjhCNTKntO0MEH6_mGVW-mBctVs-tSrYkt1lBymI36AXHtEWBKu_n6qyLKXpCvTn5yyOyVPvAi9Z81-p-IWJZQYEyxBEugANNs3jJWIylbZyjW402-ptQNzJ7RuMm7CtsMctabnLCWYWiC2Zi16AoUkRqfiC3KO4-Gh1mEhHJ4zLf-01FJ__KNRN3oIWEX7jYhXQbpPyT1jZmROlX68"
  },
  // SIGNATURE GRILL
  {
    id: 4,
    name: "Grilled Sea Bass",
    price: "₱1,250",
    category: "SIGNATURE GRILL",
    description: "Fresh caught, herb crusted with charred lemon and sea salt flakes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYSsvgF5Y_2XtsTRV2EDIfzREIwxpbshIFlK-CIbVEImkd9E0p-1Gq1Tsx_f9zQUqwcD0w62ay6MDHmoPnO5ONqGzXBIQqDRkcNZDUbJ_1IndCGIrFckWFwDpwKdEiO8s5Qhd_wumeYOXLrwnKuVkg_Dob-fruNHU1g3s0DrTWuuXYzzOuhGAaxuesNA6Lq9NQcxaIlEK-ghJ5M2L_6r1eLQwJWXig1m-CkMlRoUzSkx4e0vJ_lD4Dg2C9w0jwA9Ez496DpqoL8i1d"
  },
  {
    id: 5,
    name: "Wagyu Ribeye",
    price: "₱3,200",
    category: "SIGNATURE GRILL",
    description: "Aged 28 days, marble score 7+, finished with roasted garlic bone marrow butter.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4hA4k1wsf4esJD0lwE06H5vEoBJPBF2vOyMcpH3mPUVloTbIN7zL7YpePbl5CbmpBkyK6Eh-wfWy_M3VvJVmab2K0ES1MnmxSRwYXmCWGqFr9nY0sS4p13OpoYWVDCXW5azGZAjfIlP0RPCbdhGau2gYi6R0Vv8-sZ5bM16tsjAvA36fmRFiytKHdsyyyjNLvxw-fkjOWcrVUruPBMsd9Up2M5L7XTIzwehWPJTAX6u9vw1ScBFnUaNy1Qb10EHj9rHr0r1EsvnL3"
  },
  {
    id: 6,
    name: "Truffle Tagliatelle",
    price: "₱850",
    category: "SIGNATURE GRILL",
    description: "Hand-rolled daily, creamy parmesan emulsion, fresh shaved seasonal truffles.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwDYwyyt1C_ftmtTOI8fdEv39cH9tCoeXtBvwacCNcCrx6ukCmfnZv6iC0TLEIQqgKd4enpJKb3Fgnwn56_YHMoOewM0oNrBXDlZqp0K_YJHisYLq-rEo3vAb_5LxKnIO63W62Tchvlx792B07eR8WeIQlOd_c1T9tUhN09uoWgAOexpoGNgWshVJwst0E2m9609ecOo3pWA3DxZ30KrRP7-kBfJQZyUnmLgKbakYViUWoU_-4OUtu_4u40zzNgRtJ-oWIjWfSfvTS"
  },
  {
    id: 7,
    name: "Pan-Seared Scallops",
    price: "₱920",
    category: "SIGNATURE GRILL",
    description: "Hokkaido scallops, sweet pea purée, mint oil, and crispy serrano ham shards.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZWLMY4Jbeu_hsnw83YzJTIRkl-yOkfWxGGKBhKl23g7egh-GCe2hbCYhaGTlWurCCtwiDmw65EH4YLFbV0-nHn_3lk7k0HY2r9GDdJD26kvEu9PgZ1ol3_zJMZXMMmLMS7Fj4X1q0nCVQvagDvMfNcvOvJpK747indXzwOrpJ3Xi-Ljc95F_3blvoMdnzeyfd106SPeQyg2ied3q-_GtDZK5moWsOP5zlK6ZLETe9hMBjI4jLN3Za1Sw9rKcoW4nWRq6Lh_PxHvHz"
  },
  {
    id: 8,
    name: "Heritage Smoked Pork",
    price: "₱780",
    category: "SIGNATURE GRILL",
    description: "Slow-smoked for 24 hours over native wood, served with a citrus soy glaze.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCymM_kWQFhYP_i5klxtxvh-Cakg-b5dpTB94qesCQz7tq-VC-WlQLO-D65hY9xXNzD_VQsgn2QwlpR2aV9SY6FvrHDYMLW0ZiALjqqves6xoUf_ujiNid9XmQJEeejI5yEzFNL0ZPPHAihmR_x-GCoMSjAkYsdt7h2WYH1hBRM08kh1NR7X64jrEI-3X9Z8VygJsHxLiiwHVae8G-0Rg211T0Sv7CdTpp7POSYKwEn2AAycFF7T0i1NvERuO2-HoLQ9TWDYCD_b92S"
  },
  {
    id: 9,
    name: "Balsamic Glazed Salmon",
    price: "₱980",
    category: "SIGNATURE GRILL",
    description: "Pan-seared Atlantic salmon with a honey-balsamic reduction.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyU8w1V1KxQC8a2afdAsz4vZtfVjcd7xKZLIL9WdqKzOFA-yVsmWYDKMYm2G4oZP5KNL-d4qtF7y-ZiI3QQAeutLfUnpoavP9dwOzU9jtc7O3aDEUUfVyjSQTPyYb8Qzbj59RnEjH4ngNsNOLbejp7wzCCfzIuI2_96V4saDH1PyNk_K1Pwa3v6bFaWXWFoMRrR19zEDjIbFilNUp4YjL-o6r7-PeDNxtRb6HZvr8NUcEm3gxSwm6yyu-SrJp0mPjnYlw0g2v4QwAl"
  },
  // EVENING BAR
  {
    id: 10,
    name: "Evening Botanical",
    price: "₱420",
    category: "EVENING BAR",
    description: "Infused small-batch gin with lavender, elderflower, and artisanal tonic.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHsKcGLXWUHMvodDWAMEo7my5GkqqM-dZOwHYmy35S9uJEQuYrHAIADZBiTan6nWzugXXvuYIQjlPrfDKeY963r1mWU3h9Br8d_SDrSNnlOeZejFLK3hBBdSU5xdfKYe1-Ej8r_C8c9VKntTxCYe20WaOBymojIDvXBvhj88_iWYlV8hQZDLiOtF4KdA2oluO0OFJ_qSZRSla7nx__DqqN9ZVkSnwFjBPW5bkd0_fA1RFUtVk7fo73uBtKPAHZfMyfBX_1I9em1fj6"
  },
  {
    id: 11,
    name: "Heirloom Burrata",
    price: "₱580",
    category: "EVENING BAR",
    description: "Creamy burrata, colorful heirloom tomatoes, aged balsamic, and basil crystals.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyU8w1V1KxQC8a2afdAsz4vZtfVjcd7xKZLIL9WdqKzOFA-yVsmWYDKMYm2G4oZP5KNL-d4qtF7y-ZiI3QQAeutLfUnpoavP9dwOzU9jtc7O3aDEUUfVyjSQTPyYb8Qzbj59RnEjH4ngNsNOLbejp7wzCCfzIuI2_96V4saDH1PyNk_K1Pwa3v6bFaWXWFoMRrR19zEDjIbFilNUp4YjL-o6r7-PeDNxtRb6HZvr8NUcEm3gxSwm6yyu-SrJp0mPjnYlw0g2v4QwAl"
  },
  {
    id: 12,
    name: "Native Craft Beer",
    price: "₱280",
    category: "EVENING BAR",
    description: "Small-batch amber ale brewed with local honey and roasted malts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyB_t4beA2zVcKfNjxdBpOCLWZCNmo9RI89wnFoaiQtvWC2ypRH4hCzeL5Gq6gYefuqnyw2nQPuPoKWGm0WPy8WyIE18IGihS66j9e2Gu23IIuIUrPYq2Lekf5l_BmjnrO6IC3Ym-kfiodYEgScERkUaSzAM-Pxfo9EZBIcFUyNyzvhk8m1YhBhJI1QSzLQrKYOGbx9HiXpwVYCrIiA_K1RUHkVBqquUsB2y5puJMUgVJyq_q5bkD2_dkBFdqEtmwt65siIbpoEZrD"
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
