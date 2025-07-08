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
    console.error(error)
  }
})
</script>
<template>
  <section id="proyek" class="py-20">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white/60 dark:bg-dark-glass-bg backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-dark-primary/30 hover:-translate-y-2"
        >
          <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/500x300/cccccc/ffffff?text=Gagal+Muat'"/>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-dark-text mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-dark-text-secondary mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full"
                >{{ t }}</span
              >
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 dark:text-dark-primary font-semibold hover:underline"
              >Lihat Detail &rarr;</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
