<script setup>
import profileImage from '/ZAYGA - 2.png';

// Data untuk kartu fitur
const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-blue-500 dark:text-dark-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code that follows best practices.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-blue-500 dark:text-dark-primary"><path d="M12 22a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"></path><path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="m15.5 13.5-3-3-3 3"></path></svg>`,
    title: "Creative Design",
    description: "Crafting beautiful user interfaces with attention to detail and user experience.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-blue-500 dark:text-dark-primary"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    title: "Performance",
    description: "Building fast, optimized applications that deliver exceptional user experiences.",
  },
]
</script>

<template>
  <section id="about" class="py-20 px-4 bg-white dark:bg-dark-background relative overflow-hidden">
    <!-- Elemen Latar Belakang Animasi -->
    <div class="absolute inset-0 -z-1 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 dark:bg-dark-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    <div class="container mx-auto">
      
      <!-- Judul Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-dark-text mb-6">
          About <span class="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
          I am a web developer passionate about creating digital solutions that bridge the gap between design and technology.
        </p>
      </div>

      <!-- Konten: Perjalanan & Foto -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h3 class="text-3xl font-bold text-gray-800 dark:text-dark-text mb-6">My Journey</h3>
          <p class="text-gray-600 dark:text-dark-text-secondary mb-4 leading-relaxed">
            Starting out as a student who fell in love with the world of coding, I have evolved into a developer enthusiastic about creating meaningful digital experiences.          </p>
          <p class="text-gray-600 dark:text-dark-text-secondary leading-relaxed">
            When I'm not coding, I'm usually exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.          </p>
        </div>
        <div class="flex justify-center">
          <img
            :src="profileImage"
            alt="Foto Zayga Ernesto"
            class="w-80 h-80 lg:w-96 lg:h-96 object-cover shadow-2xl rounded-[3rem] transform rotate-[-6deg] transition-all duration-500 hover:rotate-0 hover:scale-105"
          />
        </div>
      </div>

      <!-- Kartu Fitur -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white/60 dark:bg-dark-glass-bg backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center transition-all duration-300 hover:border-blue-500/50 dark:hover:border-dark-primary/50 hover:shadow-2xl hover:-translate-y-2"
        >
          <div class="mb-4 flex justify-center" v-html="feature.icon"></div>
          <h3 class="text-xl font-bold text-gray-800 dark:text-dark-text mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-dark-text-secondary leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
