<template>
  <div class="bg-cm-background text-cm-on-surface">
    <header class="relative h-[175vh]">
      <div class="sticky top-0 h-screen overflow-hidden">
        <div class="absolute inset-0 z-0">
          <video
            ref="heroVideo"
            autoplay
            loop
            muted
            playsinline
            preload="metadata"
            poster="/videos/cozina-de-marray/video-hero-poster.png"
            class="hero-video w-full h-full object-cover object-center"
          >
            <source src="/videos/cozina-de-marray/video-hero.mp4" type="video/mp4" />
          </video>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,163,115,0.16),transparent_40%)]"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-cm-background"></div>
        </div>

        <div class="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-20 md:px-12 md:pb-10 md:pt-20">
          <div class="max-w-3xl space-y-5 pt-[3vh] md:pt-[5vh]">
            <p class="text-xs font-semibold uppercase tracking-[0.45em] text-cm-secondary/90">
              Cebu Fire Kitchen
            </p>
            <h1 class="max-w-4xl font-cm-headline text-5xl font-black leading-[0.84] tracking-[-0.05em] text-white md:text-[5.5rem] xl:text-[7rem]">
              COZINA DE MARRAY
            </h1>
            <p class="max-w-lg text-base font-light leading-relaxed text-white/75 md:text-lg">
              A slow-burn dining story shaped by charcoal, sea air, and a room that reveals itself one scene at a time.
            </p>
          </div>

          <div class="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/menu"
                class="inline-flex min-w-[180px] items-center justify-center rounded-cm-xl bg-cm-primary-container px-8 py-3.5 font-cm-headline text-base font-bold text-cm-on-primary-container shadow-xl transition-all hover:scale-[1.02]"
              >
                View Menu
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="inline-flex min-w-[180px] items-center justify-center rounded-cm-xl border border-white/20 px-8 py-3.5 font-cm-headline text-base font-bold text-white backdrop-blur-md transition-all hover:border-cm-primary-container/60 hover:bg-white/5"
              >
                Our Story
              </NuxtLink>
            </div>

            <div class="flex items-center gap-4 text-white/70">
              <div class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                <span class="material-symbols-outlined text-2xl">south</span>
              </div>
              <div>
                <p class="text-[11px] uppercase tracking-[0.35em] text-white/50">Scroll to Explore</p>
                <p class="font-cm-headline text-sm">{{ activeFeatureLabel }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="relative pb-24">
      <section
        v-for="(feature, index) in featureSections"
        :id="feature.id"
        :key="feature.id"
        :ref="setFeatureSectionRef(index)"
        class="feature-band relative min-h-[145vh]"
      >
        <div class="sticky top-20 mx-auto flex min-h-[calc(100vh-5rem)] max-w-screen-2xl items-center px-6 py-12 md:px-10">
          <div
            :class="[
              'grid w-full items-center gap-8 lg:gap-16',
              index % 2 === 0 ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'lg:grid-cols-[0.85fr_1.15fr]'
            ]"
          >
            <div :class="[index % 2 === 0 ? 'lg:order-1' : 'lg:order-2']" class="relative">
              <div
                :class="[
                  'feature-panel overflow-hidden rounded-[2rem] border border-white/8 bg-white/5 shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-700',
                  activeFeature === feature.id ? 'opacity-100 translate-y-0 scale-100' : 'opacity-60 translate-y-8 scale-[0.98]'
                ]"
              >
                <img
                  :src="feature.image"
                  :alt="feature.title"
                  :loading="index === 0 ? 'eager' : 'lazy'"
                  :fetchpriority="index === 0 ? 'high' : 'auto'"
                  decoding="async"
                  class="h-[55vh] w-full object-cover md:h-[68vh]"
                />
              </div>
            </div>

            <div :class="[index % 2 === 0 ? 'lg:order-2' : 'lg:order-1']" class="relative">
              <div
                :class="[
                  'feature-copy max-w-xl transition-all duration-700',
                  activeFeature === feature.id ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-8'
                ]"
              >
                <p class="mb-6 text-xs font-bold uppercase tracking-[0.38em] text-cm-secondary">{{ feature.kicker }}</p>
                <h2 class="font-cm-headline text-5xl font-black leading-[0.94] tracking-[-0.04em] md:text-7xl">
                  {{ feature.title }}
                </h2>
                <p class="mt-8 text-lg leading-relaxed text-cm-on-surface-variant md:text-xl">
                  {{ feature.description }}
                </p>
                <NuxtLink
                  :to="feature.link"
                  class="mt-10 inline-flex items-center gap-3 font-cm-headline text-lg font-bold text-cm-primary-container"
                >
                  {{ feature.cta }}
                  <span class="material-symbols-outlined transition-transform duration-300" :class="activeFeature === feature.id ? 'translate-x-1' : ''">
                    arrow_right_alt
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 pt-8 md:px-10">
        <div class="mx-auto max-w-screen-2xl rounded-[2rem] border border-white/8 bg-cm-surface-container-lowest px-6 py-12 md:px-10 md:py-16">
          <div class="mb-12 flex items-end justify-between gap-6">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.38em] text-cm-secondary">Chef's Selection</p>
              <h2 class="mt-4 font-cm-headline text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Final Frame
              </h2>
            </div>
            <NuxtLink
              to="/menu"
              class="hidden rounded-cm-full border border-cm-secondary px-6 py-3 font-cm-headline font-bold text-cm-secondary transition-all hover:bg-cm-secondary hover:text-cm-on-secondary md:inline-flex"
            >
              Explore Full Menu
            </NuxtLink>
          </div>

          <div class="grid gap-6 md:grid-cols-3">
            <article
              v-for="dish in featuredDishes"
              :key="dish.name"
              class="overflow-hidden rounded-[1.5rem] bg-cm-surface-container shadow-2xl transition-transform duration-500 hover:-translate-y-1"
            >
              <img
                :src="dish.image"
                :alt="dish.name"
                loading="lazy"
                decoding="async"
                class="h-64 w-full object-cover"
              />
              <div class="space-y-4 p-8">
                <div class="flex items-start justify-between gap-4">
                  <h3 class="font-cm-headline text-2xl font-bold">{{ dish.name }}</h3>
                  <span class="rounded-full bg-cm-primary-container px-3 py-1 text-sm font-bold text-cm-on-primary-container">{{ dish.price }}</span>
                </div>
                <p class="text-sm leading-relaxed text-cm-on-surface-variant">{{ dish.description }}</p>
              </div>
            </article>
          </div>

          <NuxtLink
            to="/menu"
            class="mt-10 inline-flex rounded-cm-full border border-cm-secondary px-6 py-3 font-cm-headline font-bold text-cm-secondary transition-all hover:bg-cm-secondary hover:text-cm-on-secondary md:hidden"
          >
            Explore Full Menu
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
const heroVideo = ref(null)
const featureSectionEls = ref([])
const activeFeature = ref('signature-grill')
let featureObserver

const featureSections = [
  {
    id: 'signature-grill',
    kicker: 'The Main Event',
    title: 'Signature Grill',
    description: 'Prime cuts, native charcoal, and a room perfumed with smoke. This is the moment the evening settles in and the table begins to glow.',
    image: '/images/cozina-de-marray/signature-grill.jpg',
    cta: 'Explore Grill Menu',
    link: '/menu',
  },
  {
    id: 'morning-cafe',
    kicker: 'Sun-Drenched Sips',
    title: 'Morning Cafe',
    description: 'Soft light, bamboo-roasted lattes, and pastries arriving warm from the kitchen. The calm before the fire becomes the story itself.',
    image: '/images/cozina-de-marray/morning-cafe.jpg',
    cta: 'View Breakfast Selection',
    link: '/menu',
  },
  {
    id: 'evening-bar',
    kicker: 'Liquid Alchemy',
    title: 'Evening Bar',
    description: 'A darker scene layered with tropical botanicals, polished glass, and slow-poured cocktails built to linger long after the first course.',
    image: '/images/cozina-de-marray/evening-bar.jpg',
    cta: 'Discover the Bar',
    link: '/menu',
  },
]

const featuredDishes = [
  {
    name: 'Smoked Beef Ribs',
    price: 'PHP 850',
    image: '/images/cozina-de-marray/smoked-beef-ribs.jpg',
    description: 'Twelve-hour slow-cooked ribs with a coffee rub and hickory glaze.',
  },
  {
    name: 'Seafood Linguine',
    price: 'PHP 620',
    image: '/images/cozina-de-marray/seafood-linguine.jpg',
    description: 'Fresh coastal catch tossed in white wine reduction and sun-dried tomato.',
  },
  {
    name: 'Heritage Salad',
    price: 'PHP 450',
    image: '/images/cozina-de-marray/heritage-salad.jpg',
    description: 'Organic greens, roasted beets, and whipped goat cheese with bright acidity.',
  },
]

const activeFeatureLabel = computed(() => {
  return featureSections.find((section) => section.id === activeFeature.value)?.title ?? 'Signature Grill'
})

const resumeHeroVideo = () => {
  heroVideo.value?.play?.().catch(() => {})
}

const setFeatureSectionRef = (index) => (el) => {
  featureSectionEls.value[index] = el
}

const initFeatureObserver = () => {
  featureObserver?.disconnect()

  featureObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visibleEntry?.target?.id) {
        activeFeature.value = visibleEntry.target.id
      }
    },
    {
      threshold: [0.35, 0.55, 0.75],
      rootMargin: '-12% 0px -12% 0px',
    }
  )

  featureSectionEls.value.filter(Boolean).forEach((section) => {
    featureObserver.observe(section)
  })
}

useHead({
  title: 'Cozina de Marray | Premium Grill & Bar',
  htmlAttrs: {
    class: 'dark',
  },
})

onMounted(() => {
  resumeHeroVideo()
  initFeatureObserver()
})

onActivated(() => {
  resumeHeroVideo()
  initFeatureObserver()
})

onBeforeUnmount(() => {
  featureObserver?.disconnect()
})

onDeactivated(() => {
  featureObserver?.disconnect()
})
</script>

<style scoped>
.hero-video {
  transform: scale(1.02);
  object-position: center 58%;
}

.feature-band::before {
  content: '';
  position: absolute;
  inset: 9% 4% auto;
  height: 70%;
  border-radius: 2rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0));
  opacity: 0.7;
  pointer-events: none;
}

.feature-panel img,
.feature-copy,
.hero-video {
  will-change: transform, opacity;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
