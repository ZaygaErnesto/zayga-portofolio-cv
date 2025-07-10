<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const text = ref("")
const fullText = "Full Stack Developer"
let timer;

onMounted(() => {
  let index = 0
  timer = setInterval(() => {
    setText(fullText.slice(0, index))
    index++
    if (index > fullText.length) {
      // Hentikan animasi setelah selesai
      clearInterval(timer)
    }
  }, 150) // Kecepatan ketik (ms)
})

onUnmounted(() => {
  // Pastikan interval dibersihkan saat komponen dihancurkan
  clearInterval(timer)
})

function setText(value) {
  text.value = value
}
</script>

<template>
  <section id="profil" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-dark-background">
    <!-- Elemen Latar Belakang Animasi -->
    <div class="absolute inset-0 -z-1 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 dark:bg-dark-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    <div class="text-center z-10 px-4">
      <div class="mb-8">
        <h1 class="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm
          <span class="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
            Zayga Ernesto
          </span>
        </h1>
        <div class="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 h-12 flex items-center justify-center">
          <span class="border-r-2 border-blue-500 dark:border-dark-primary pr-2 animate-blink">{{ text }}</span>
        </div>
      </div>

      <p class="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
        I create beautiful, functional, and user-centered digital experiences to solve real-world problems.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <a href="#proyek" class="px-8 py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-dark-primary dark:hover:bg-dark-primary-hover text-white">
          View My Work
        </a>
        <a href="/CV_ZaygaErnesto.pdf" download class="px-8 py-3 rounded-lg font-semibold border border-blue-500 dark:border-dark-primary text-blue-600 dark:text-dark-primary hover:bg-blue-500/10 dark:hover:bg-dark-primary/10">
          Download CV
        </a>
      </div>

      <div class="flex justify-center space-x-6">
        <a href="https://github.com/ZaygaErnesto" target="_blank" class="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-dark-primary hover:bg-blue-500/10 dark:hover:bg-dark-primary/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
        </a>
        <a href="https://linkedin.com/in/muhammad-zayga-ernesto" target="_blank" class="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-dark-primary hover:bg-blue-500/10 dark:hover:bg-dark-primary/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="mailto:emailanda@example.com" class="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-dark-primary hover:bg-blue-500/10 dark:hover:bg-dark-primary/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-blue-500 dark:text-dark-primary"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  </section>
</template>
