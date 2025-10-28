<template>
  <v-app >
    <div class="min-h-screen flex items-center justify-center bg-white m-5 md:m-0">
      <!-- الحاوية الرئيسية -->
      <div class="flex items-center justify-center">
        <v-row class="   overflow-hidden flex flex-col md:flex-row m-auto md:m-0  md:px-1">
          <!-- العمود الأيسر -->
          <v-col cols="1" class="w-10 relative   rounded-full d-none-md colhidden md:d-none md:block hidden">
            <div class="w-10 absolute left-0  h-full rounded-full" style="background-color: #E7FAFE">
              <!-- محتوى العمود الأيمن -->
            </div>
          </v-col>

          <!-- العمود الرئيسي -->
          <v-col cols="11" md="5" class="p-6 border-main  m-auto md:m-0" style="background-color: #E7FAFE;  ">
            <div class="hidden md:flex bg-black rounded-full px-12 py-12 w-[100px] h-[100px] justify-center items-center absolute top-[20%] left-[47%]">
  <!-- دائرة بيضاء -->
  <div class="bg-white rounded-full flex justify-center items-center ">
    <!-- زر لايك داخل الدائرة البيضاء -->
    <v-btn icon>
      <img src="../assets/image15.png" />
    </v-btn>
  </div>
</div>


            <div class="flex md:center text-black leading-[16.94px] bg-white w-fit px-2 py-3 rounded-3xl m-5  ">
              <Img src="../assets/image14.png" />
              <h4 class="font-bold ml-1 font-semibold text-sm  ">Hot Recipes</h4>
            </div>
            <!-- العنوان الكبير -->
            <h1 class=" text-4xl md:text-6xl leading-[77.45px] tracking-[-0.04em] font-semibold pl-5  text-black mb-4">
              Spicy delicious <br> chicken wings
            </h1>

            <!-- الوصف -->
            <p class="text-lg mb-4 font-normal" style="color: #00000099">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
            </p>

            <!-- أيقونة الوقت -->
            <div class="flex items-center space-x-4 mb-6">
              <!-- أيقونة وساعات -->
              <div class="flex items-center space-x-2 p-2 bg-black/5 rounded-3xl " style="color: #0000000D">
                <v-icon color="black" class="text-2xl">mdi-clock</v-icon>
                <span class="text-black/60 font-medium">30 Minutes</span>
              </div>

              <!-- أيقونة شوكة وسكين -->
              <div class="flex items-center space-x-2 p-2 bg-black/5 rounded-3xl">
                <v-icon color="gray" class="text-2xl">mdi-silverware-fork-knife</v-icon>
                <span class="text-black/60 font-medium">Chicken</span>
              </div>
            </div>
        
            <!-- صورة البروفايل والاسم والتاريخ -->
            <div class="flex items-center mb-6 mt-12">
              <!-- صورة البروفايل -->
              <v-avatar size="50" class="mr-0  md:mr-3">
                <img src="../assets/Ellipse2.png" alt="Profile" />
              </v-avatar>

              <!-- الاسم والتاريخ -->
              <div>
                <h2 class="text-gray-800 font-semibold text-sm md:text-lg">John Doe</h2>
                <p class="text-gray-500 text-sm">January 10, 2025</p>
              </div>

              <!-- الزر -->
              <v-btn class="rounded-full ml-auto bg-black py-3   md:py-6 px-2 md:px-5 d-flex align-center justify-center ">
  <div class="font-normal text-sm  md:mr-2">View Recipes</div>
  <v-icon class=" tetx-xl md:text-2xl">mdi-play-circle</v-icon>
</v-btn>


            </div>
          </v-col>

          <!-- القسم الأيمن (الصورة) -->
          <v-col 
  cols="11" 
  md="5" 
  class="py-0 px-0 rounded-lg overflow-hidden m-auto md:m-0"
  style=" border-radius: 0 80px 40px 0 ;"
>
  <img
    src="../assets/plate.png"
    alt="Food Image"
    class="w-full h-full object-cover"
  />
</v-col>
       
          <!-- العمود الأيمن -->
          <v-col cols="1" class="w-10 relative   rounded-full md:block hidden colhidden">
            <div class="w-10 absolute right-0  rounded-full  h-full" style="background-color: #E7FAFE;">
              <!-- محتوى العمود الأيمن -->
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-app>
  
  <!-- الحاوية الرئيسية -->
  <div class="min-h-screen flex flex-col items-start bg-white p-8">
    <!-- العنوان وزر View All Categories -->
 

    <!-- شبكة الفئات -->
    <v-container>
      <div class="w-full flex justify-between items-center md:flex-row flex-col mb-10" >
      <h1 class="text-3xl text-center mb-8  font-semibold text-black">Categories</h1>
      <v-btn 
  class="mb-8 p-28 " 
  color="#E7FAFE" 
  text="black"
   
  rounded 
  style=" font-weight: 600; font-size: 16px; line-height: 19.36px; letter-spacing: -0.02em; text-transform: capitalize ; ">
  View All Categories
</v-btn>
    </div>
      <v-row class="d-flex flex-row justify-center flex-wrap p-5">
        <CategoryCard 
          v-for="(category, index) in categories" 
          :key="index"
          :image="category.image"
          :name="category.name"
          :color="category.color"
        />
      </v-row>
    </v-container>
  </div>


  <div class="min-h-screen flex flex-col items-center justify-center bg-white p-8">
    <!-- عنوان الصفحة -->
    <div class="text-center mb-12 w-full">
      <h1 class="text-4xl font-semibold text-black mb-4">Simple and tasty recipes</h1>
      <p class="text-sm max-w-[40rem] text-center m-auto text-gray-500">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </p>
    </div>

    <!-- حقل البحث -->
    <v-row class="mb-6 w-full justify-center">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-text-field
  v-model="searchQuery"
  label="Search for a recipe"
  append-icon="mdi-magnify"
  outlined
  :clearable="true"
/>
      </v-col>
    </v-row>

    <!-- عرض الوصفات -->
    <v-container>
      <v-row class="d-flex flex-wrap justify-center">
        
        <RecipeCard
          v-for="(recipe, index) in filteredRecipes.slice(0, 9)"
          :key="index"
          :image="recipe.image"
          :title="recipe.title"
          :time="recipe.time"
          :category="recipe.category"
          :cols="12"
          :smCols="4"
          :mdCols="4"
          :lgCols="4"
          @click="goToRecipe(recipe.id)"
        />
      </v-row>
    </v-container>
  </div>


  <v-container>
    <div class="min-h-screen flex items-center justify-center bg-white">
      <!-- الحاوية الرئيسية -->
      <div class="w-full max-w-screen-lg">
        <v-row class="bg-white overflow-hidden flex flex-col md:flex-row md:px-1">
          <!-- العمود الأيسر (عنوان، وصف، وزر) -->
          <v-col cols="12" md="6" class="p-6">
            <!-- العنوان الكبير -->
            <h1 class=" text-3xl md:text-5xl leading-[77.45px] font-semibold text-black mb-4">
              Everyone can be a <br>  chef in their own kitchen
            </h1>

            <!-- الوصف -->
            <p class="text-lg mb-4 font-normal" style="color: #00000099">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <!-- الزر -->
            <v-btn class="rounded-full bg-black text-white">
             Learn more
            </v-btn>
          </v-col>

          <!-- القسم الأيمن (الصورة) -->
          <v-col cols="12" md="6" class="py-0 px-0">
            <img
              src="../assets/portraier.png"
              alt="Food Image"
              class="w-full h-full object-cover rounded-lg"
            />
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>


  <div class="min-h-screen flex flex-col items-center justify-center bg-white p-8">
    <!-- العنوان والوصف في المنتصف -->
    <div class="text-center mb-12 w-full">
      <h1 class="text-4xl font-semibold text-black">Welcome to Our Platform</h1>
      <p class="text-lg text-gray-600 mt-4">Discover amazing content, connect with others, and explore the world through our platform.</p>

      <!-- زر Visit Our Instagram -->
   
    </div>

    <!-- الكروت -->
    <v-container>
      <v-row class="d-flex flex-wrap justify-center">
        <CardComponent 
          v-for="(card, index) in cards" 
          :key="index"
          :image="card.image"
          :title="card.title"
          :location="card.location"
          :date="card.date"
        />
      </v-row>
      <div class="button-visit flex justify-center items-center my-6 ">
      <v-btn 
        
        href="https://www.instagram.com" 
        target="_blank" 
         
        color="black" 
        rounded 
        size="large">
        Visit Our Instagram
        <v-icon class="mx-1" >mdi-instagram</v-icon>
      </v-btn>
    </div>
    </v-container>
  </div>


    <div class="min-h-screen flex flex-col items-start bg-white p-8">
   

      <!-- وصفات -->
      <div class="min-h-screen flex flex-col items-center justify-center bg-white p-8 w-full m-auto
      
      ">
        <div class="text-center mb-12 w-full">
          <h1 class="text-4xl font-semibold text-black mb-4">Simple and tasty recipes</h1>
          <p class="text-sm max-w-[40rem] text-center m-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <v-container>
          <v-row class="d-flex flex-wrap justify-center">
    
            <RecipeCard  
                v-for="(recipe, index) in recipes.slice(0, 8)"
              :key="index"
              :image="recipe.image"
              :title="recipe.title"
              :time="recipe.time"
              :category="recipe.category"
              :cols="12"
              :smCols="4"
              :mdCols="4"
              :lgCols="3"
            />
          </v-row>
        </v-container>
      </div>
    </div>

<Deliciousness />


</template>


<script>
import axios from 'axios'; // استيراد Axios
import Deliciousness from '../components/deliciousness.vue';
import Footer from '../components/Footer.vue';
import CardComponent from '../components/CardSocial.vue';
import CategoryCard from '../components/CategoryCard.vue';
import RecipeCard from '../components/RecipeCard.vue';
import { fetchCategories, fetchRecipes } from '../services/api';
export default {
  components: { CategoryCard, RecipeCard, CardComponent, Footer, Deliciousness  },
  data() {
    return {
      searchQuery: '', 
     // سيتم ملء الفئات من الـ API
      recipes: [], // سيتم ملء الوصفات من الـ API
       // بطاقات إضافية إذا كنت بحاجة إليها
      categories: [
      { image: '/images/image20.png', name: 'Carrots', color: '#708246' },
      { image: '/images/image21.png', name: 'Broccoli', color: '#CC261B' },
      { image: '/images/image22.png', name: 'Tomatoes', color: '#F09E00' },
      { image: '/images/image23.png', name: 'Spinach', color: '#000000' },
      { image: '/images//image24.png', name: 'Peppers', color: '#000000' },
      { image: '/images/image25.png', name: 'Cucumbers', color: '#708246' },
    ],
    fallbackRecipes : [
      { id: 1 , photoUrl: './_nuxt/assets/image26.png', title: 'Big and Juicy Wagyu Beef Cheeseburger Wagyu', cookTime: '30 Minutes', mainIngredient: 'Chicken' },
      { id: 2 , photoUrl: '/_nuxt/assets/image27.png', title: 'Fresh Lime Roasted Salmon with Ginger Sauce', cookTime: '40 Minutes', mainIngredient: 'Beef' },
      {id: 3 , photoUrl:  '/_nuxt/assets/image28.png', title: 'Strawberry Oatmeal Pancake with Honey Syrup', cookTime: '20 Minutes', mainIngredient: 'Vegetarian' },
      {id: 4 , photoUrl:  '/_nuxt/assets/image29.png', title: 'Fresh and Healthy Mixed Mayonnaise Salad', cookTime: '20 Minutes', mainIngredient: 'Vegetarian' },
      {id: 5 , photoUrl:  '/_nuxt/assets/image30.png', title: 'Chicken Meatballs with Cream Cheese Wagyu', cookTime: '20 Minutes', mainIngredient: 'Vegetarian' },
      { id: 6 , photoUrl:  '/_nuxt/assets/Ads.png', title: 'Ads', },
      
      {id: 7 , photoUrl:  '/_nuxt/assets/image31.png', title: 'Fruity Pancake with Orange & Blueberry', cookTime: '20 Minutes', mainIngredient: 'Vegetarian' },
      { id: 8 , photoUrl:  '/_nuxt/assets/image32.png', title: 'The Best Easy One Pot Chicken and Rice', cookTime: '20 Minutes', mainIngredient: 'Vegetarian' },
      { id: 9 , photoUrl:  '/_nuxt/assets/image33.png', title: 'The Creamiest Creamy Chicken and Bacon Pasta', cookTime: '20 Minutes', mainIngredient: 'Vegetarian' },
    ],
    cards: [
    {
          image: '/images/Rectangle.png',
          title: 'Spicy Chicken Wings',
          location: 'New York',
          date: 'January 10',
        },
        {
          image: '/images/Rectangle1.png',
          title: 'Fresh Salad',
          location: 'Los Angeles',
          date: 'February 5',
        },
        {
          image: '/images/Rectangle2.png',
          title: 'Delicious Pancakes',
          location: 'San Francisco',
          date: 'March 15',
        },
        {
          image: '/images/Rectangle3.png',
          title: 'Grilled Salmon',
          location: 'Chicago',
          date: 'April 20',
        },
      ],



    };
  },
  computed: {
    filteredRecipes() {
    if (this.searchQuery === '') {
      return this.recipes; // إذا لم يكن هناك بحث، عرض جميع الوصفات
    } else {
      const filtered = this.recipes.filter(recipe => 
        recipe.title && recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        recipe.category && recipe.category.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      if (filtered.length === 0) {
        return false; // إرجاع رسالة إذا كانت النتيجة فارغة
      }

      return filtered;
    }
  }
},
  methods: {
    async fetchData() {
      const categories = await fetchCategories();
      const recipes = await fetchRecipes();
      try {
        const response = await axios.get('https://api.sampleapis.com/recipes/recipes');
        const apiData = response.data;

        // معالجة البيانات وتحديث الفئات والوصفات
        this.recipes = apiData.map(recipe => ({
          id : recipe.id,
          image: recipe.photoUrl || this.fallbackRecipes.photoUrl,
          title: recipe.title || this.fallbackRecipes.title,
          time: recipe.cookTime || this.fallbackRecipes.cookTime,
          category: recipe.mainIngredient || this.fallbackRecipes.mainIngredient,
        }));

        
       
        
      } catch (error) {
        console.error('خطأ أثناء جلب البيانات:', error);
      }
    },
    getRandomColor() {
      const colors = ['#708246', '#CC261B', '#F09E00', '#000000', '#000000'];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    goToRecipe(id) {
      this.$router.push(`/recipes/${id}`);
    }
  },
  
  mounted() {
    this.fetchData(); // جلب البيانات عند تحميل الصفحة
  },
};
</script>

<style>
@media (max-width: 950px) {
  .colhidden{
  display: none !important;
}
}
@media (min-width: 1000px) {
  .border-main{
    
    border-radius: 40px 0 0 40px
  }
}

/* استيراد الأيقونات من Vuetify */
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css');
</style>
