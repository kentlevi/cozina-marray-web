<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-cm-surface/80 border-b border-cm-surface-variant/30 px-6 md:px-16 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-4 text-cm-on-surface ring-0 outline-none hover:opacity-80 transition-opacity">
        <div class="size-6 text-cm-primary-container">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"/>
          </svg>
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
</style>
