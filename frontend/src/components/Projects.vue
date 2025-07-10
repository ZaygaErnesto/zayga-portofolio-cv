<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const projects = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/projects')
    projects.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error)
  }
})
</script>

<template>
  <section id="proyek" class="py-20 px-4 bg-white dark:bg-dark-background relative overflow-hidden">
    <!-- Elemen Latar Belakang Animasi -->
    <div class="absolute inset-0 -z-1 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 dark:bg-dark-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    <div class="container mx-auto">
      
      <!-- Judul Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-dark-text mb-6">
          Featured <span class="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
          Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white/60 dark:bg-dark-glass-bg backdrop-blur-lg border border-white/20 dark:border-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:border-blue-500/50 dark:hover:border-dark-primary/50 hover:shadow-2xl hover:-translate-y-2"
        >
          <!-- Gambar dengan Gradien Overlay -->
          <div class="relative">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/500x300/cccccc/ffffff?text=Gagal+Muat'"/>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </div>

          <!-- Konten Kartu -->
          <div class="p-6 space-y-4">
            <h3 class="text-xl font-bold text-gray-800 dark:text-dark-text">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-dark-text-secondary leading-relaxed">{{ project.description }}</p>

            <!-- Tumpukan Teknologi -->
            <div class="flex flex-wrap gap-2">
              <span v-for="(tech, techIndex) in project.tech" :key="techIndex" class="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                {{ tech }}
              </span>
            </div>

            <!-- Tombol Aksi -->
            <div class="flex gap-4 pt-2">
              <a :href="project.github" target="_blank" class="flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg border border-blue-500 dark:border-dark-primary text-blue-600 dark:text-dark-primary hover:bg-blue-500/10 dark:hover:bg-dark-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
                Kode
              </a>
              <a :href="project.live" target="_blank" class="flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-dark-primary dark:hover:bg-dark-primary-hover text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
