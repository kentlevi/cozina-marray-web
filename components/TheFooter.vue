<template>
  <footer class="bg-[#0E0E0E] w-full py-16 px-8 border-t border-[#E5E2E1]/10">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
      <div class="col-span-1 md:col-span-1">
        <span class="text-xl font-bold text-[#D4A373] mb-4 block font-cm-headline">COZINA DE MARRAY</span>
        <p class="text-[#E5E2E1]/70 text-sm leading-relaxed mb-6">
          Crafting culinary experiences where tradition meets the modern flame.
        </p>
        <div class="flex gap-4">
          <a class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors" href="#"><span class="material-symbols-outlined">public</span></a>
          <a class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors" href="#"><span class="material-symbols-outlined">alternate_email</span></a>
          <a class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
        </div>
      </div>
      <div class="space-y-4">
        <h4 class="text-[#C1272D] font-cm-headline font-bold uppercase tracking-widest text-xs">Contact</h4>
        <ul class="space-y-3">
          <li><NuxtLink class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors text-sm" to="/contacts">Reservations</NuxtLink></li>
          <li><a class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors text-sm" href="#">Location: Ginatilan</a></li>
          <li><a class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors text-sm" href="#">Hours: 8AM - 11PM</a></li>
        </ul>
      </div>
      <div class="space-y-4">
        <h4 class="text-[#C1272D] font-cm-headline font-bold uppercase tracking-widest text-xs">Navigation</h4>
        <ul class="space-y-3">
          <li><NuxtLink class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors text-sm" to="/">Home</NuxtLink></li>
          <li><NuxtLink class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors text-sm" to="/menu">Menu</NuxtLink></li>
          <li><NuxtLink class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors text-sm" to="/about">About</NuxtLink></li>
        </ul>
      </div>
      <div class="space-y-4">
        <h4 class="text-[#C1272D] font-cm-headline font-bold uppercase tracking-widest text-xs">Social</h4>
        <ul class="space-y-3">
          <li><a class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors text-sm" href="#">Facebook</a></li>
          <li><a class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors text-sm" href="#">Instagram</a></li>
          <li><a class="text-[#E5E2E1]/60 hover:text-[#D4A373] transition-colors text-sm" href="#">Twitter</a></li>
        </ul>
      </div>
    </div>
    <div class="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-[#1b1b1b] flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-[#E5E2E1]/40 text-xs">© 2024 Cozina de Marray. Ginatilan. 8AM-11PM</p>
      <div class="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-[#E5E2E1]/30">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.font-cm-headline {
  font-family: 'Space Grotesk', sans-serif;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
