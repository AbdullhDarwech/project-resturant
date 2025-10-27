<!-- layouts/default.vue -->
<template>
    <v-app class="">
      <!-- Header -->
      <Header />
  
      <!-- محتوى الصفحة (سيتم استبداله حسب الصفحة) -->
      <v-main>
        <NuxtPage />
      </v-main>
  
      <!-- Footer -->
      <Footer />
    </v-app>
  </template>
  
  <script setup>
  // استيراد المكونات
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style scoped>
  /* تخصيص الأنماط هنا إذا لزم الأمر */
  </style>
  