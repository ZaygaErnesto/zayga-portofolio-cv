<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const educationHistory = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = [...response.data, ...response.data]
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section id="pendidikan" class="py-20">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative mt-12">
        <!-- Garis vertikal timeline -->
        <div class="absolute left-4 w-0.5 h-full bg-blue-200 dark:bg-gray-700"></div>

        <div v-for="edu in educationHistory" :key="edu.id" class="relative pl-12 mb-10">
          <!-- Titik pada timeline -->
          <div class="absolute left-4 top-1 w-4 h-4 bg-blue-600 dark:bg-dark-primary rounded-full transform -translate-x-1/2 border-4 border-gray-100 dark:border-dark-background-light"></div>
          
          <!-- Kartu konten -->
          <div class="bg-white/60 dark:bg-dark-glass-bg backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-dark-primary/30 hover:scale-[1.02]">
            <p class="font-semibold text-blue-600 dark:text-dark-primary mb-1">{{ edu.period }}</p>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-dark-text">{{ edu.institution }}</h3>
            <p class="text-gray-600 dark:text-dark-text-secondary">{{ edu.major }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
