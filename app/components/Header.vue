<template>

  <v-app-bar
  app
  color="white"
  flat
  class="shadow-md lg:px-10 md:px-0 "
  >
  <!-- اللوغو -->
  <v-toolbar-title class="flex items-center space-x-2 relative" style="">
  <!-- <img src="/" alt="Restaurant Logo" class="h-10 w-10" /> -->
  <span 
    class="text-xl font-bold text-gray-800" 
    style="font-family: 'Lobster', cursive; font-weight: 400; font-size: 24px; line-height: 30px;">
    Foodieland <span class="text-red-500">.</span>
  </span>
</v-toolbar-title>
      <!-- الروابط -->
      
      <div class="hidden flex-1 font-medium justify-start lg:mr-48 md:flex  text-black space-x-2">
        <v-btn text class=" hover:text-gray-800 " href="/">Home</v-btn>
        <v-btn text class=" hover:text-gray-800" href="/recipeDetails">Recipes</v-btn>
        <v-btn text class=" hover:text-gray-800" href="/blogListPage">Blog</v-btn>
        <v-btn text class=" hover:text-gray-800" href="/contact">Contact</v-btn>
        <v-btn text class=" hover:text-gray-800" href="/blogPostPage">About us</v-btn>
      </div>

      <!-- أيقونات مواقع التواصل -->
      <div class="hidden md:flex space-x-4">
        <v-btn icon href="https://facebook.com" target="_blank" class="text-gray-600 hover:text-gray-800">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="https://twitter.com" target="_blank" class="text-gray-600 hover:text-gray-800">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon href="https://instagram.com" target="_blank" class="text-gray-600 hover:text-gray-800">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </div>

      <!-- زر القائمة (Mobile) -->
      <v-btn
      icon
        class="hidden-md hidden-lg"
        @click="menuOpen = !menuOpen" 
      >
        <v-icon  v-model="menuOpen"  >mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- القائمة في الشاشات الصغيرة -->
       <v-navigation-drawer class="hidden-lg "
      v-model="menuOpen"
      app
      temporary
      right
      color="white"
    >
      <v-list>
        <v-list-item link href="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/menu">
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/contact">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link href="https://facebook.com" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-facebook</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Facebook</v-list-item-title>
        </v-list-item>
        <v-list-item link href="https://twitter.com" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-twitter</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Twitter</v-list-item-title>
        </v-list-item>
        <v-list-item link href="https://instagram.com" target="_blank">
          <v-list-item-icon>
            <v-icon>mdi-instagram</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Instagram</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false, // حالة القائمة المنسدلة للجوال
    };
  },
};
</script>

<style scoped>
/* تخصيص بسيط إذا لزم الأمر */
</style>
