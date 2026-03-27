<template>
  <div class="min-h-screen bg-cm-surface text-cm-on-surface font-cm-body selection:bg-cm-primary-container selection:text-cm-on-primary-container">
    <TheHeader />
    <main :class="[(route.path === '/' || route.path === '/about') ? '' : 'pt-[73px]']">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
const route = useRoute()
</script>

<style>
/* Global Styles */
.font-cm-headline {
  font-family: 'Space Grotesk', sans-serif;
}

.font-cm-body {
  font-family: 'Inter', sans-serif;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
