<template>
  <main class="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto bg-cm-background text-cm-on-surface font-cm-body selection:bg-cm-primary-container selection:text-cm-on-primary-container">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <!-- Left Column: Branding & Imagery -->
      <div class="space-y-12">
        <div class="relative group">
          <div class="absolute -inset-4 bg-cm-secondary-container/10 rounded-cm-lg blur-2xl group-hover:bg-cm-secondary-container/20 transition duration-1000"></div>
          <img alt="Restaurant atmosphere" class="relative rounded-cm-lg w-full aspect-[4/5] object-cover shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu8ed-A1y9gTbpwwsAwCp-y2UizGLkJWcvxkP-a0ayZWk01VdzVnD1NnO5B2nP7ny5aXZw1C-fIGXt9YnlVxw9qNNiw-5QZwMD3d9qjVoZdfBWUNapTFCFUT_ggep9knNe6n41GsNfnvvp6zoBy0D66y87-yNiebcIdoewkdPXNxh4rsaCjHys6ghau_xGleBSIzcTyod2PYIpI6fF2kNIie9B4uS3CdvWy3XNQ0ABOLTnASAtVexMK7yFRuo55xZj4PakkCyoo2ts"/>
        </div>
        <div class="space-y-6">
          <h1 class="text-5xl md:text-6xl font-cm-headline font-bold tracking-tight leading-tight text-cm-on-surface">
            The table is set. <br/>
            <span class="text-cm-secondary">The fire is warm.</span>
          </h1>
          <p class="text-xl text-cm-on-surface-variant font-light max-w-md leading-relaxed">
            Join us for an evening of culinary storytelling where every dish speaks of heritage and heat.
          </p>
          <div class="pt-8 border-t border-cm-outline-variant/20 max-w-sm">
            <div class="flex items-center gap-4 text-cm-on-secondary-container">
              <span class="material-symbols-outlined">schedule</span>
              <span class="font-cm-headline font-medium tracking-wide text-xs uppercase">Operating Hours</span>
            </div>
            <p class="mt-2 text-cm-on-surface-variant">Mon-Sun: 8AM - 11PM</p>
          </div>
        </div>
      </div>

      <!-- Right Column: Booking Form -->
      <div class="lg:sticky lg:top-32">
        <div class="bg-cm-surface-container p-10 md:p-12 rounded-cm-xl shadow-2xl relative overflow-hidden">
          <!-- Subtle Glow Accent -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-cm-primary/5 rounded-cm-full blur-3xl -mr-16 -mt-16"></div>
          <h2 class="text-3xl font-cm-headline font-bold mb-8 text-cm-on-surface tracking-tight">Make a Reservation</h2>
          <form class="space-y-6">
            <div class="space-y-2">
              <label class="text-xs font-cm-label uppercase tracking-widest text-cm-on-secondary-container ml-1">Full Name</label>
              <input class="w-full bg-cm-surface-container-lowest border-none rounded-cm-lg p-4 text-cm-on-surface booking-input transition-all placeholder:text-cm-on-surface-variant/30" 
                placeholder="Giacomo Marray" type="text"/>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-cm-label uppercase tracking-widest text-cm-on-secondary-container ml-1">Phone Number</label>
                <input class="w-full bg-cm-surface-container-lowest border-none rounded-cm-lg p-4 text-cm-on-surface booking-input transition-all placeholder:text-cm-on-surface-variant/30" 
                  placeholder="+1 (555) 000-0000" type="tel"/>
              </div>
              <div class="space-y-2">
                <label class="text-xs font-cm-label uppercase tracking-widest text-cm-on-secondary-container ml-1">Guests</label>
                <select class="w-full bg-cm-surface-container-lowest border-none rounded-cm-lg p-4 text-cm-on-surface booking-input transition-all appearance-none">
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5-6 Guests</option>
                  <option>Large Party (7+)</option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-cm-label uppercase tracking-widest text-cm-on-secondary-container ml-1">Date</label>
                <div class="relative">
                  <input class="w-full bg-cm-surface-container-lowest border-none rounded-cm-lg p-4 text-cm-on-surface booking-input transition-all" type="date"/>
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-xs font-cm-label uppercase tracking-widest text-cm-on-secondary-container ml-1">Time</label>
                <select class="w-full bg-cm-surface-container-lowest border-none rounded-cm-lg p-4 text-cm-on-surface booking-input transition-all appearance-none">
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
            </div>
            <div class="pt-6">
              <button class="w-full bg-gradient-to-br from-cm-primary-container to-cm-on-primary-fixed-variant py-5 rounded-cm-full font-cm-headline font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-cm-primary-container/20 text-white" type="button">
                Confirm Reservation
              </button>
            </div>
            <p class="text-center text-xs text-cm-on-surface-variant/60 font-light mt-4">
              For parties larger than 8, please contact our concierge directly.
            </p>
          </form>
        </div>

        <!-- Featured Badges -->
        <div class="space-y-4 mt-8">
          <div class="p-6 bg-cm-surface-container-low rounded-cm-lg flex items-center gap-6">
            <div class="w-16 h-16 rounded-cm-full bg-cm-surface-container-highest flex items-center justify-center text-cm-secondary shrink-0 text-3xl">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">restaurant</span>
            </div>
            <div>
              <h4 class="font-cm-headline font-bold text-cm-on-surface">Chef's Tasting Available</h4>
              <p class="text-sm text-cm-on-surface-variant leading-snug">Experience our seasonal 7-course journey curated by Giacomo himself.</p>
            </div>
          </div>
          <div class="p-6 bg-cm-surface-container-low rounded-cm-lg flex items-center gap-6">
            <div class="w-16 h-16 rounded-cm-full bg-cm-surface-container-highest flex items-center justify-center text-cm-secondary shrink-0 text-3xl">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">group</span>
            </div>
            <div>
              <h4 class="font-cm-headline font-bold text-cm-on-surface">Private Dining Rooms</h4>
              <p class="text-sm text-cm-on-surface-variant leading-snug">Host your next event in one of our intimate, wood-accented private spaces.</p>
            </div>
          </div>
          <div class="p-6 bg-cm-surface-container-low rounded-cm-lg flex items-center gap-6">
            <div class="w-16 h-16 rounded-cm-full bg-cm-surface-container-highest flex items-center justify-center text-cm-secondary shrink-0 text-3xl">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">card_giftcard</span>
            </div>
            <div>
              <h4 class="font-cm-headline font-bold text-cm-on-surface">Gift an Experience</h4>
              <p class="text-sm text-cm-on-surface-variant leading-snug">Cozina de Marray digital gift cards are now available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Make a Reservation | Cozina de Marray',
})
</script>

<style scoped>
.booking-input:focus {
  box-shadow: 0 0 0 2px rgba(212, 163, 115, 0.4);
  border: none;
  outline: none;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
