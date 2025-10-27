<template>
    <v-app>
      <v-container>
        <!-- العنوان الكبير في البداية -->
        <v-row class="mb-6">
          <v-col cols="12" class="text-center">
            <h1 class="display-1 font-weight-bold">Contact Us</h1>
            <p class="text-body-1 text-gray-600">
              We would love to hear from you! Please fill out the form below to get in touch.
            </p>
          </v-col>
        </v-row>
  
        <!-- القسم الأول (أقل من نصف الواجهة) -->
        <v-row class="mb-6">
          <v-col cols="12" md="4" >
            <v-img
              src="../assets/Layer1.png"
              alt="Contact Image"
              class="rounded-lg"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6" class="rounded-full">
            <v-card class="pa-6" elevation="2">
              <v-row>
                <!-- الاسم -->
                <v-col cols="12" md="6">
                    <div class="flex"> Name</div>
                  <v-text-field
                    label="Full Name"
                    outlined
                    dense
                    placeholder="Enter your name"
                  ></v-text-field>
                </v-col>
  
                <!-- البريد الإلكتروني -->
                <v-col cols="12" md="6" class="rounded-full">
                    <div class="flex"> Email Address</div>
                  <v-text-field
                    label="Email"
                    outlined
                    dense
                    placeholder="Enter your email"
                  ></v-text-field>
                </v-col>
              </v-row>
  
              <v-row>
                <!-- الموضوع -->
                <v-col cols="12" md="6" class="">
                    <div class="flex">Subject</div>
                  <v-text-field
                    label="Subject"
                    outlined
                    dense
                    placeholder="Enter the subject"
                    
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="">
                    <div class="flex">Enquiry type</div>
                  <v-text-field
                    label="Subject"
                    outlined
                    dense
                    placeholder="Enter the subject"
                    
                  ></v-text-field>
                </v-col>
              </v-row>
              
                <!-- الموضوع -->
                
            
  
              <v-row>
                <!-- الرسالة -->
                <v-col cols="12">
                    <div class="flex">Messages</div>
                  <v-textarea
                    label="Message"
                    outlined
                    dense
                    placeholder="Enter your message"
                    rows="4"
                  ></v-textarea>
                </v-col>
              </v-row>
  
              <!-- زر إرسال -->
              <v-row class="justify-center">
                <v-col cols="12" class="text-center">
                  <v-btn color="black" large>Send Message</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
      
        </v-row>
  
        <!-- القسم الثاني (نموذج إدخال بيانات العميل) -->
        <v-row class="mb-6">

        </v-row>
      </v-container>
    </v-app>
    <deliciousness />
    <v-app>
  <!-- واجهة جديدة -->
  <div class=" flex flex-col justify-center bg-light ">
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
    name: "ContactPage",
    components:{deliciousness , RecipeCard},
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
    line-height: 1.5;
  }
  
  .text-gray-600 {
    color: #4a4a4a;
  }
  
  .v-img {
    border-radius: 10px;
  }
  
  .v-btn {
    width: 200px;
  }
  </style>
    