<template>
  <div class="bg-cm-surface text-cm-on-surface font-cm-body selection:bg-cm-primary-container selection:text-cm-on-primary-container">
    <!-- Hero Section -->
    <section class="relative h-[409px] min-h-[320px] w-full flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/cozina-de-marray/menu-hero.webp')"></div>
      <div class="relative z-20 text-center px-6">
        <h2 class="font-cm-headline text-6xl md:text-7xl font-bold tracking-tighter text-cm-on-surface mb-4">Our Menu</h2>
        <div class="h-1 w-24 bg-cm-primary-container mx-auto"></div>
      </div>
    </section>

    <!-- Interactive Tabs -->
    <nav class="sticky top-20 z-40 bg-cm-surface border-b border-cm-outline-variant/10">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex items-center justify-center gap-4 md:gap-16">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'py-5 text-xs md:text-sm font-bold tracking-widest uppercase border-b-2 transition-all duration-300',
              activeCategory === cat 
                ? 'border-cm-primary-container text-cm-on-surface' 
                : 'border-transparent text-cm-on-surface-variant hover:text-cm-on-surface'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Dynamic Menu Grid -->
    <main class="bg-cm-surface-container-low py-16 px-6 min-h-[600px]">
      <div class="max-w-6xl mx-auto">
        <div v-if="filteredMenuItems.length > 0" class="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div 
            v-for="item in filteredMenuItems" 
            :key="item.id"
            class="flex gap-5 bg-cm-surface-container p-4 rounded-cm-xl items-start group hover:bg-cm-surface-container-high transition-all"
          >
            <div 
              class="size-24 flex-shrink-0 bg-cover bg-center rounded-cm-lg grayscale group-hover:grayscale-0 transition-all shadow-md" 
              :style="{ backgroundImage: `url('${item.image}')` }"
            ></div>
            <div class="flex-grow">
              <div class="flex justify-between items-start mb-1">
                <h3 class="font-cm-headline text-lg font-bold text-cm-on-surface">{{ item.name }}</h3>
                <span class="text-cm-primary-container font-bold text-sm">{{ item.price }}</span>
              </div>
              <p class="text-cm-on-surface-variant text-sm leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-20">
          <p class="text-cm-on-surface-variant italic">No items found in this category.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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

useHead({
  title: 'Menu | Cozina de Marray',
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
