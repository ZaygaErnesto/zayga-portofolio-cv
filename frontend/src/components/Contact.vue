<script setup>
const navLinks = [
  { id: 'profil', text: 'Home' },
  { id: 'about', text: 'About' },
  { id: 'skill', text: 'Skills' },
  { id: 'proyek', text: 'Projects' },
  { id: 'kontak', text: 'Contact' },
]
</script>
<template>
  <footer id="kontak" class="py-5 px-4 bg-white/50 dark:bg-dark-background-light/50 border-t border-gray-200 dark:border-gray-800">
    <div class="container mx-auto">
      
      <!-- Konten Utama Footer dengan Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        <!-- Kolom 1: Tentang & CTA -->
        <div class="md:col-span-1">
          <h3 class="text-2xl font-bold text-gray-800 dark:text-dark-text mb-3">
            Zayga Ernesto
          </h3>
          <a
            href="mailto:zernesto04@gmail.com"
            class="text-blue-600 dark:text-dark-primary font-semibold hover:underline"
          >
            zernesto04@gmail.com
          </a>
        </div>

        <!-- Kolom 2: Navigasi Cepat -->
        <div>
          <h4 class="text-lg font-semibold text-gray-800 dark:text-dark-text mb-4">Navigasi</h4>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.id">
              <a :href="`#${link.id}`" class="text-gray-600 dark:text-dark-text-secondary hover:text-blue-600 dark:hover:text-dark-primary transition-colors">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Kolom 3: Media Sosial -->
        <div>
          <h4 class="text-lg font-semibold text-gray-800 dark:text-dark-text mb-4">Terhubung</h4>
          <div class="flex justify-center md:justify-start items-center space-x-4">
            <a
              href="https://github.com/ZaygaErnesto"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 bg-gray-200/80 dark:bg-dark-background rounded-full text-gray-700 dark:text-dark-text-secondary hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a
              href="https://linkedin.com/in/muhammad-zayga-ernesto"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 bg-gray-200/80 dark:bg-dark-background rounded-full text-gray-700 dark:text-dark-text-secondary hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

      </div>

      <!-- Garis Pemisah dan Copyright -->
      <div class="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8 text-center">
        <p class="text-sm text-gray-500 dark:text-dark-text-secondary">
          &copy; {{ new Date().getFullYear() }} Zayga Ernesto. All rights reserved.
        </p>
      </div>

    </div>
  </footer>
</template>
