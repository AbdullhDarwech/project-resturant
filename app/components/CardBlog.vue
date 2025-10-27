<template>
    <v-row>
      <!-- الصورة -->
      <v-col cols="4">
        <v-img
          :src="image"
          alt="Blog Image"
          class="rounded-lg"
        ></v-img>
      </v-col>
  
      <!-- النصوص -->
      <v-col cols="8">
        <h3 class="font-weight-bold text-xl">{{ title }}</h3>
        <p class="text-body-1 text-sm line text-gray-500">{{ description }}</p>
  
        <v-row class="align-center">
          <!-- البروفايل -->
          <v-col cols="auto">
            <v-avatar size="40">
              <img :src="profileImage" alt="Profile Picture" />
            </v-avatar>
          </v-col>
          <v-col>
            <div class="font-weight-bold">{{ author }}</div>
          </v-col>
          <!-- التاريخ -->
          <v-col cols="auto" class="text-right">
            <div class="text-caption grey--text">{{ date }}</div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: "CardBlog",
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      profileImage: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .font-weight-bold {
    font-weight: bold;
  }
  .text-xl {
    font-size: 1.25rem;
  }
  .text-body-1 {
    font-size: 1rem;
  }
  .rounded-lg {
    border-radius: 12px;
  }
  .text-caption {
    font-size: 0.8rem;
  }
  </style>
  