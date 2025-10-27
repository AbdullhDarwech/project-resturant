<template>
    <v-col cols="12" sm="4" md="2" lg="2" class="mb-8 flex justify-center">
      <div class="flex flex-col items-center space-y-4 bg-white rounded-3xl  p-4" :style="{ background: gradientColor }" >
        <v-avatar size="120" class="">
          <img :src="image" alt="CategoryImage" />
        </v-avatar>
        <h3 class="text-lg font-semibold text-gray-800">{{ name }}</h3>
      </div>
    </v-col>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      name: String,
      color: String,
      
    },
    computed: {
      gradientColor() {
  return `linear-gradient(180deg, ${this.color}00 0%, ${this.color}1A 100%)`;
}

    },
  };
  </script>
  