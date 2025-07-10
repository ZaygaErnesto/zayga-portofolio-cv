<script setup>
// Pastikan path ini benar dan file gambar ada di dalam `src/assets/images/`
import profileImage from '/ZAYGA - 2.png';
</script>

<template>
  <!-- Section utama dibuat menjadi flex container untuk memusatkan konten secara vertikal -->
  <section id="profil" class="flex items-center min-h-screen py-20 px-6">
    <!-- Kontainer utama yang memusatkan konten -->
    <div class="container mx-auto">
      <!-- Menggunakan Flexbox untuk tata letak yang lebih terkontrol -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-x-8 lg:gap-x-16">
        
        <!-- Kolom Teks -->
        <div class="w-full md:w-5/12 lg:w-4/12 z-10 animate-slide-in-left text-center md:text-left">
          <h1
            class="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-dark-text mb-4"
          >
            Halo, Saya <span class="text-blue-600 dark:text-dark-primary"><br>Muhammad Zayga Ernesto</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-dark-text-secondary mb-8">
            Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
          </p>
          <a
            href="#kontak"
            class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 dark:bg-dark-primary dark:hover:bg-dark-primary-hover transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Hubungi Saya
          </a>
        </div>
        
        <!-- Kolom Gambar -->
        <div class="w-full md:w-6/12 lg:w-5/12 flex justify-center mt-12 md:mt-0 animate-slide-in-right">
          <img
            :src="profileImage"
            alt="Foto Profil Zayga Ernesto"
            class="w-auto h-80 md:h-96 lg:h-[32rem] drop-shadow-2xl"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tidak ada style tambahan yang diperlukan */
</style>
