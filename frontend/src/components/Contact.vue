<script setup>
import SectionTitle from './SectionTitle.vue'
</script>
<template>
  <footer id="kontak" class="py-20 bg-gray-800 dark:bg-dark-background-light text-white">
    <div class="container mx-auto px-6 text-center">
      <h2 title="Hubungi Saya" class="text-4xl font-bold text-gray-300 dark:text-dark-text mb-4">Hubungi Saya</h2>
      <p class="text-xl text-gray-300 dark:text-dark-text-secondary mb-8">Jangan ragu untuk terhubung atau bertanya.</p>
      <a
        href="mailto:emailanda@example.com"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 dark:bg-dark-primary dark:hover:bg-dark-primary-hover transition-colors duration-300 inline-block mb-12"
      >
        Kirim Email
      </a>
      <div class="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/ZaygaErnesto"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
          >GitHub</a
        >
        <a
          href="https://linkedin.com/in/muhammad-zayga-ernesto"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
          >LinkedIn</a
        >
      </div>
      <p class="text-gray-500 dark:text-dark-text-secondary">
        &copy; {{ new Date().getFullYear() }} Zayga Ernesto. All rights reserved.;
      </p>
    </div>
  </footer>
</template>