<template>
  <v-app>

  
    <v-container>
      <v-row class="d-flex justify-center align-center">
        <!-- العنوان الكبير -->
        <v-col cols="12" class="text-center">
          <h1 class="display-1 font-weight-bold mb-4">Your Title Here</h1>
        </v-col>
      </v-row>
  
      <v-row class="d-flex justify-center align-center">
        <!-- البروفايل والتاريخ -->
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-avatar size="50">
            <img src="../assets/Ellipse2.png" alt="Profile Picture" />
          </v-avatar>
          <div class="ml-3">
            <div class="font-weight-bold">John Doe</div>
            <div class="text-caption grey--text">12 Jan 2025</div>
          </div>
        </v-col>
      </v-row>
  
      <v-row class="d-flex justify-center mt-6">
        <!-- الشرح -->
        <v-col cols="12" md="8" class="text-center">
          <p class="text-body-1">
            This is a detailed explanation of the content. You can add additional
            information or details that explain what this page is about. It can
            also include instructions, background, or any other relevant
            information.
          </p>
        </v-col>
      </v-row>
  
      <v-row class="d-flex justify-center mt-6">
        <!-- الصورة الكبيرة -->
        <v-col cols="12" class="text-center">
          <v-img
            src="../assets/image61.png"
            alt="Large Image"
            class="rounded-lg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  <v-app>
    <v-container>
    <v-row class="d-flex justify-center align-center ">
      <!-- القسم الأول -->
      <v-col cols="12" md="9" class="m-2">
        <!-- السؤال والجواب الأول -->
        <v-row>
          <v-col cols="12">
            <h3 class="font-bold text-lg">How did you start out in the food industry?</h3>
            <p class="text-body-1 text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>
          </v-col>
        </v-row>

        <!-- السؤال والجواب الثاني -->
        <v-row>
          <v-col cols="12">
            <h3 class="font-weight-bold">How do we find happiness?</h3>
            <p class="text-body-1">
              Happiness comes from within, through gratitude, positive
              relationships, and meaningful activities.
            </p>
          </v-col>
        </v-row>

        <!-- السؤال وصورة -->
        <v-row>
          <v-col cols="12">
            <h3 class="font-weight-bold">What is the role of nature in life?</h3>
            <v-img
              src="../assets/Rectangle23.png"
              alt="Nature"
              class="rounded-lg"
            ></v-img>
            <p class="text-body-1">
              Nature provides us with the peace, beauty, and tranquility that
              we need to reconnect with ourselves and the world around us.
            </p>
          </v-col>
        </v-row>

        <!-- السؤال والجواب الرابع -->
     

        <!-- صندوق الاقتباس -->
        <v-row class="mt-6">
          <v-col cols="12">
            <v-card class="pa-4" elevation="2">
              <blockquote class="font-italic">
                "The only way to do great work is to love what you do." - Steve Jobs
              </blockquote>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3 class="font-weight-bold">What is the future of humanity?</h3>
            <p class="text-body-1">
              The future of humanity is bright, with advancements in technology
              and medicine paving the way for a better quality of life.
            </p>
          </v-col>
        </v-row>
      </v-col>

      <!-- القسم الثاني -->
      <v-col cols="12" md="2" class="text-center">
        <div class="font-weight-bold mb-4">Share This :</div>

        <!-- أيقونات مواقع التواصل الاجتماعي -->
        <v-row class="d-flex d-flex justify-start items-start">
          <v-col cols="12" class="mb-2">
         
              <v-icon>mdi-facebook</v-icon>
             </v-col>
          <v-col cols="12" class="mb-2">
           
              <v-icon>mdi-twitter</v-icon>
       
          </v-col>
        
          <v-col cols="12" class="mb-2">
           
              <v-icon>mdi-whatsapp</v-icon>
           
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
  <deliciousness />
  <v-app>
  <!-- واجهة جديدة -->
  <div class="min-h-screen flex flex-col justify-center bg-light p-8">
    <v-container>
      <!-- قسم العنوان والوصف -->
      <v-row class="w-full flex justify-center  mb-12">
        <!-- العنوان على أقصى اليسار -->
        <h1 class="text-4xl  font-semibold text-black">You may like these recipe too</h1>
        <!-- الوصف على أقصى اليمين -->
       
      </v-row>

      <v-row class="d-flex flex-wrap justify-center">
        <!-- عرض فقط 4 بطاقات -->
        <RecipeCard
          v-for="(recipe, index) in highlightedRecipes"
          :key="index"
          :image="recipe.image"
          :title="recipe.title"
          :time="recipe.time"
          :category="recipe.category"
          :cols="12"
          :smCols="6"
          :mdCols="6"
          :lgCols="3"
        />
      </v-row>
    </v-container>
  </div>
</v-app>
  
  </template>
  <script>
  import deliciousness from '../components/deliciousness.vue';
  import RecipeCard from '../components/RecipeCard.vue';
  export default {
    components:{
      deliciousness , RecipeCard
    },
    name: "ProfilePage",
    data(){
      return{
         highlightedRecipes: [
    { image: '/_nuxt/assets/image41.png', title: 'Big and Juicy Wagyu Beef Cheeseburger Wagyu', time: '30 Minutes', category: 'Chicken' },
      { image: '/_nuxt/assets/image45.png', title: 'Fresh Lime Roasted Salmon with Ginger Sauce', time: '40 Minutes', category: 'Beef' },
      { image: '/_nuxt/assets/image43.png', title: 'Strawberry Oatmeal Pancake with Honey', time: '20 Minutes', category: 'Vegetarian' },
      { image: '/_nuxt/assets/image44.png', title: 'Fresh and Healthy Mixed Mayonnaise Salad', time: '20 Minutes', category: 'Vegetarian' },
    ],
      }
    }
  };
  </script>
  
  <style scoped>
  .font-weight-bold {
    font-weight: bold;
  }
  .text-body-1 {
    font-size: 1rem;
  }
  .text-caption {
    font-size: 0.8rem;
  }
  </style>
  