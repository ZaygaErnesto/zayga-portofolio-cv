<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skillCategories = ref([])

// Ambil data kategori dari API
onMounted(async () => {
  try {
    const response = await axios.get('/api/skills')
    skillCategories.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data skills:', error)
  }
})

// Buat daftar logo datar untuk marquee dari data kategori
const allLogos = computed(() => {
  if (skillCategories.value.length === 0) return []
  const logos = skillCategories.value.flatMap(category => category.skills.map(skill => ({
    name: skill.name,
    logo: skill.logo
  })));
  // Duplikasi untuk efek loop yang mulus
  return [...logos, ...logos]
})
</script>

<template>
  <section id="skill" class="py-20 px-4 bg-white dark:bg-dark-background relative overflow-hidden">
    <!-- Elemen Latar Belakang Animasi -->
    <div class="absolute inset-0 -z-1 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 dark:bg-dark-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    <div class="container mx-auto">
      
      <!-- Judul Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-dark-text mb-6">
          Skills & <span class="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical skills and proficiency levels across different technologies.
        </p>
      </div>

      <!-- Bagian 1: Marquee Logo (Tetap Dipertahankan) -->
      <div class="relative overflow-hidden group mb-16">
        <div class="marquee flex space-x-16">
          <div
            v-for="(logo, index) in allLogos"
            :key="index"
            class="flex-shrink-0"
          >
            <img :src="logo.logo" :alt="logo.name" class="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform duration-300 hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/80x80/cccccc/ffffff?text=Err'"/>
          </div>
        </div>
      </div>

      <!-- Bagian 2: Kartu Kategori dengan Progress Bar -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(category, index) in skillCategories"
          :key="index"
          class="bg-white/60 dark:bg-dark-glass-bg backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg"
        >
          <h3 class="text-2xl font-bold text-gray-800 dark:text-dark-text mb-6 text-center">{{ category.title }}</h3>
          <div class="space-y-5">
            <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
              <div class="flex justify-between mb-1">
                <span class="text-base font-medium text-gray-700 dark:text-dark-text">{{ skill.name }}</span>
                <span class="text-sm font-medium text-blue-700 dark:text-dark-primary">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  class="bg-blue-600 dark:bg-dark-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi untuk logo skills */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee {
  animation: marquee 40s linear infinite;
}
.marquee:hover {
  animation-play-state: paused;
}
</style>
