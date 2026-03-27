<template>
  <header id="main-nav-2027" class="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-cm-surface/80 border-b border-cm-surface-variant/30 px-6 md:px-16 py-4">
    <!-- Build v888 -->
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-4 text-cm-on-surface ring-0 outline-none hover:opacity-80 transition-opacity">
        <div class="flex items-center">
          <img src="/logo.png" alt="Cozina de Marray Logo" class="h-10 w-auto object-contain" />
        </div>
        <h2 class="font-cm-headline text-xl font-bold tracking-tight uppercase">Cozina de Marray</h2>
      </NuxtLink>
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink to="/" class="text-cm-on-surface text-sm font-medium hover:text-cm-secondary transition-colors" active-class="text-cm-secondary">Home</NuxtLink>
        <NuxtLink to="/menu" class="text-cm-on-surface text-sm font-medium hover:text-cm-secondary transition-colors" active-class="text-cm-secondary">Menu</NuxtLink>
        <NuxtLink to="/about" class="text-cm-on-surface text-sm font-medium hover:text-cm-secondary transition-colors" active-class="text-cm-secondary">About</NuxtLink>
      </nav>
      <div class="flex items-center gap-6">
        <NuxtLink to="/contacts" class="hidden sm:flex min-w-[120px] items-center justify-center rounded-cm-xl h-10 px-6 bg-gradient-to-r from-cm-primary-container to-cm-on-primary-fixed-variant text-white text-sm font-bold tracking-wide shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-all ring-0 outline-none">
          Book a Table
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.font-cm-headline {
  font-family: 'Space Grotesk', sans-serif;
}

header#main-nav-2027 {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
}
</style>
