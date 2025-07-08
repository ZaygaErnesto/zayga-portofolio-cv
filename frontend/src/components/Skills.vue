<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const skills = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('/api/skills')
    skills.value = [...response.data, ...response.data] // Duplikasi untuk loop
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section id="skill" class="py-20">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="relative overflow-hidden group">
        <div class="absolute -inset-2 bg-gradient-to-r from-dark-glow-start to-dark-glow-end rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div class="marquee flex space-x-16">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="flex-shrink-0"
          >
            <img :src="skill.logo" :alt="skill.name" class="h-20 w-20 object-contain transition-transform duration-300 hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/80x80/cccccc/ffffff?text=Err'"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
