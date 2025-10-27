<template>
    <v-footer class="pt-6 pb-4" color=" lighten-4">
      <v-container>
        <v-row align-content="center" justify="space-between">
          <!-- الجزء الأول: الصورة والشرح -->
          <v-col cols="12" md="6" class="d-flex align-center mb-4 mb-md-0">
          
            <div>
              <p class="font-weight-bold mb-4">Our Platform</p>
              <p class="text-sm">Explore a world of opportunities with us. We're committed to bringing you the best digital experience.</p>
            </div>
          </v-col>
  
          <!-- الجزء الثاني: الروابط -->
          <v-col cols="12" md="6" class="d-flex justify-end">
     <v-row class="text-right mb-10" justify="end">
     <v-col cols="auto" class="d-flex">
      <a class="hover:text-gray-800 px-4" href="/">Home</a>
    </v-col>
    <v-col cols="auto" class="d-flex">
      <a class="hover:text-gray-800 px-4" href="/menu">Menu</a>
    </v-col>
    <v-col cols="auto" class="d-flex">
      <a class="hover:text-gray-800 px-4" href="/about">About</a>
    </v-col>
    <v-col cols="auto" class="d-flex">
      <a class="hover:text-gray-800 px-4" href="/contact">Contact</a>
    </v-col>
  </v-row>
   </v-col>
     </v-row>
  <hr class="m-10 w-full">
<!-- الجزء الثالث: العبارة وأيقونات التواصل الاجتماعي -->
<!-- الجزء الثالث: العبارة وأيقونات التواصل الاجتماعي -->
<v-row class="mt-6 d-flex justify-between align-center relative">
  <!-- العبارة في المنتصف -->
  <v-col cols="12" class="text-center">
    <p class="text-sm text-muted">© 2025 Our Platform. All Rights <span class="text-red-500"> Reserved </span></p>
  </v-col>

  <v-col
  cols="12"
  class="d-flex justify-center justify-md-end align-center"
>
  <v-btn icon href="https://facebook.com" target="_blank" class="footer-icon mx-2">
    <v-icon>mdi-facebook</v-icon>
  </v-btn>
  <v-btn icon href="https://twitter.com" target="_blank" class="footer-icon mx-2">
    <v-icon>mdi-twitter</v-icon>
  </v-btn>
  <v-btn icon href="https://linkedin.com" target="_blank" class="footer-icon mx-2">
    <v-icon>mdi-linkedin</v-icon>
  </v-btn>
  <v-btn icon href="https://instagram.com" target="_blank" class="footer-icon mx-2">
    <v-icon>mdi-instagram</v-icon>
  </v-btn>
</v-col>
</v-row>



      </v-container>
    </v-footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
  };
  </script>
  
<style>
</style>