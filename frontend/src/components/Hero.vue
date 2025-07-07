<script setup>
// Pastikan path ini benar sesuai lokasi file Anda di dalam src/assets
import profileImage from '/public/ZAYGA - 2.png';
</script>

<template>
  <section id="profil" class="relative container mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center min-h-screen overflow-hidden md:overflow-visible">
    <!-- Kolom Teks -->
    <div class="w-full md:w-6/12 lg:w-5/12 z-10">
      <h1
        class="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-dark-text mb-4 animate-slide-in-left"
        style="animation-delay: 200ms"
      >
        Halo, Saya <span class="text-blue-600 dark:text-dark-primary"><br>Muhammad Zayga Ernesto</span>
      </h1>
      <p class="text-xl text-gray-600 dark:text-dark-text-secondary mb-8 animate-slide-in-left" style="animation-delay: 400ms">
        Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
      </p>
      <a
        href="#kontak"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 dark:bg-dark-primary dark:hover:bg-dark-primary-hover transition-all duration-300 inline-block animate-slide-in-left shadow-lg hover:shadow-xl hover:-translate-y-1"
        style="animation-delay: 600ms"
      >
        Hubungi Saya
      </a>
    </div>
    
    <!-- Kolom Gambar -->
    <!-- Posisi disesuaikan untuk tata letak yang lebih baik -->
    <div class="w-full md:w-7/12 lg:w-8/12 h-full md:absolute md:top-0 md:right-0 lg:right-[-4rem]">
      <div class="relative w-full h-full flex justify-center md:justify-end items-center">
        <img
          :src="profileImage"
          alt="Foto Profil Zayga Ernesto"
          class="animate-slide-in-right w-auto h-[28rem] md:h-[32rem] lg:h-[40rem] max-w-none drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Menghapus style yang tidak diperlukan lagi */
</style>
