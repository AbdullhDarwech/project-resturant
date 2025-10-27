<template>
    <v-app>
      <v-container>
        <v-row class="d-flex justify-center align-center" style="height: 50vh;">
          <!-- القسم الذي يحتوي على العنوان وحقل الإدخال مع الزر -->
          <v-col cols="12" md="12" class="d-flex flex-column align-center">
            <!-- العنوان الكبير -->
            <h1 class="display-1 text-3xl font-weight-bold text-center mb-4">
                Blog & Article
            </h1>
            <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
  
            <!-- الحقل مع الزر المتداخل -->
            <v-row class="d-flex justify-center align-center">
                <v-col cols="12" md="12">
          <v-col class="d-flex align-center custom-input-group">
            <!-- حقل الإدخال -->
            <v-text-field
              v-model="inputValue"
              placeholder="Enter text"
              outlined
              hide-details
              dense
              solo-inverted
              class="input-field"
            />

            <!-- الزر المتداخل -->
            <v-btn
              color="black"
              class="button-field"
              @click="submitInput"
            >
              Submit
            </v-btn>
        </v-col>
        </v-col>
          </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
    <v-app>
    
        <v-container>
    <v-row>
      <!-- القسم الأول -->
      <v-col cols="12" md="7">
        <CardBlog
          v-for="(blog, index) in blogs"
          :key="index"
          :image="blog.image"
          :title="blog.title"
          :description="blog.description"
          :profileImage="blog.profileImage"
          :author="blog.author"
          :date="blog.date"
        />
        <v-divider class="my-4" v-if="index < blogs.length - 1" />
      </v-col>

      <!-- القسم الثاني -->
      <v-col cols="12" md="5">
          <v-row>
            <v-col>
              <h3 class="font-weight-bold text-2xl">Other Recipe</h3>
            </v-col>
          </v-row>

          <!-- الصورة والعنوان -->
          <v-row>
            <v-col cols="12" sm="5">
              <v-img src="../assets/image31.png" alt="Other Recipe Image" class="rounded-lg"></v-img>
            </v-col>

            <v-col cols="12" sm="5">
              <v-row>
                <v-col>
                  <div class="font-weight-bold">Recipe Title</div>
                  <div class="text-caption grey--text">Short description of the recipe.</div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img src="../assets/image31.png" alt="Other Recipe Image" class="rounded-lg"></v-img>
            </v-col>

            <v-col cols="12" sm="5">
              <v-row>
                <v-col>
                  <div class="font-weight-bold">Recipe Title</div>
                  <div class="text-caption grey--text">Short description of the recipe.</div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img src="../assets/image31.png" alt="Other Recipe Image" class="rounded-lg"></v-img>
            </v-col>

            <v-col cols="12" sm="5">
              <v-row>
                <v-col>
                  <div class="font-weight-bold">Recipe Title</div>
                  <div class="text-caption grey--text">Short description of the recipe.</div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-col cols="12" sm="10">
            <v-img src="../assets/Ads.png" alt="Other Recipe Image" class="rounded-lg"></v-img>
          </v-col>
        </v-col>
    </v-row>

    <!-- Pagination -->
    <v-row class="justify-center mt-6">
      <v-pagination v-model="page" black class="text-black" length="5" total-visible="5" circle></v-pagination>
    </v-row>
    </v-container>
  </v-app>
  <Deliciousness />
  </template>
  
 
<script>
import CardBlog from "@/components/CardBlog.vue";
import Deliciousness from "~/components/deliciousness.vue";
export default {
  components: {
    CardBlog,
    Deliciousness,
  },
  data() {
    return {
      page: 1,
      blogs: [
        {
          image: "/_nuxt/assets/image51.png",
          title: "Blog Title 1",
          description: "This is a brief description of the blog content.",
          profileImage: "/_nuxt/assets/Ellipse51.png",
          description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
       
          author: "John Doe",
          date: "12 Jan 2025",
        },
        {
          image: "/_nuxt/assets/image52.png",
          title: "Blog Title 2",
          description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
          profileImage: "/_nuxt/assets/Ellipse52.png",
          author: "Jane Smith",
          date: "14 Jan 2025",
        },
        {
          image: "/_nuxt/assets/image53.png",
          title: "Blog Title 3",
          description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
          profileImage: "/_nuxt/assets/Ellipse53.png",
          author: "Emily Johnson",
          date: "16 Jan 2025",
        },
        {
          image: "/_nuxt/assets/image54.png",
          title: "Blog Title 3",
          description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim.",
          profileImage: "/_nuxt/assets/Ellipse54.png",
          author: "Emily Johnson",
          date: "16 Jan 2025",
        },
        {
          image: "/_nuxt/assets/image56.png",
          title: "Blog Title 3",
          description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
          profileImage: "/_nuxt/assets/Ellipse55.png",
          author: "Emily Johnson",
          date: "16 Jan 2025",
        },
        {
          image: "/_nuxt/assets/image57.png",
          title: "Blog Title 3",
          description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
          profileImage: "/_nuxt/assets/Ellipse56.png",
          author: "Emily Johnson",
          date: "16 Jan 2025",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
  .custom-input-group {
    position: relative;
    display: flex;
    width: 100%;
    background-color: white; /* لون الخلفية */
    border-radius: 25px; /* حواف مستديرة */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* ظل خفيف */
  }
  
  .input-field {
    flex: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: white; /* لون الحقل */
    border: none;
    outline: none;
    box-shadow: none;
  }
  
  .button-field {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 100%;
  }
  </style>
  