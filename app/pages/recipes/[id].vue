<template>
  <v-app>
    <v-container>
      <!-- العنوان الرئيسي -->
      <v-row class="mb-6">
        <v-col class="text-left">
          <h1 class="font-weight-bold text-2xl md:text-5xl my-3">
            {{ recipe?.title }}
          </h1>
        </v-col>
      </v-row>

      <!-- البروفايل والتفاصيل -->
      <v-row class="align-left md:flex-row  flex-col justify-evenly mb-6 ">
        <!-- البروفايل -->
        

        <v-col cols="auto" class="d-flex align-center justify-center md:justify-normal ">
          <v-avatar size="50">
            <img src="../../assets/Ellipse2.png" alt="Profile" />
          </v-avatar>
          <div class="ml-3  ">
            <div class="font-weight-bold">John Doe</div>
            <div class="text-caption grey--text">12 Jan 2025</div>
          </div>
        </v-col>

        <!-- الأعمدة الرأسية -->
        <v-col cols="auto" class="d-flex align-center justify-center md:justify-normal mx-4">
          <v-avatar size="50" class="d-flex justify-center align-center">
            <v-icon class="text-black">mdi-clock</v-icon>
          </v-avatar>
          <div class="ml-1">
            <div class="font-weight-bold text-sm">Cooking</div>
            <div class="grey-text text-sm">{{ recipe?.cookTime }} mins</div>
          </div>
        </v-col>

        <v-col cols="auto" class="d-flex align-center justify-center md:justify-normal  mx-4">
          <v-avatar size="50" class="d-flex justify-center align-center">
            <v-icon class="text-black">mdi-clock</v-icon>
          </v-avatar>
          <div class="ml-1">
            <div class="font-weight-bold text-sm">Preparation</div>
            <div class="grey-text text-sm">{{ recipe?.prepTime }} mins</div>
          </div>
        </v-col>

        <v-col cols="auto" class="d-flex align-center justify-center md:justify-normal  mx-4">
          <v-avatar size="50" class="d-flex justify-center align-center">
            <v-icon class="text-black">mdi-silverware-fork-knife</v-icon>
          </v-avatar>
          <div class="ml-2">
            <div class="font-weight-bold text-lg">
              {{ recipe?.mainIngredient }}
            </div>
          </div>
        </v-col>

        <!-- خيارات الطباعة والمشاركة -->
        <v-col cols="auto" class="d-flex  align-center justify-center md:justify-normal  mx-4">
          <div class="flex flex-col justify-center  ">
          <v-btn icon class="ma-2" size="60" color="#E7FAFE">
            <v-icon color="black">mdi-printer</v-icon>
          </v-btn>
          <div class="text-center">Print</div>
        </div>
        <div class="flex flex-col justify-center  ">
          <v-btn icon class="ma-2" size="60" color="#E7FAFE">
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
          <div class="text-center">Share</div>
          </div>
        </v-col>
      </v-row>

      <!-- الصورة والوصفات -->
      <v-row class="mb-6 flex-wrap">
        <!-- الصورة -->
        <v-col cols="12" sm="12" md="8" class="rounded-3xl" order-md="1">
          <v-img
            :src="recipe?.photoUrl"
            alt="Recipe Image"
            class="rounded-lg"
            style="
              width: 100%;
              height: auto;
              max-width: 770.656px;
              max-height: 577.984px;
              object-fit: cover;
              margin: auto;
            "
          ></v-img>
        </v-col>

        <!-- تفاصيل المكونات -->
        <v-col
          cols="12"
          sm="12"
          md="4"
          class="bg-blue-200 p-2 rounded-3xl"
          order-md="2"
        >
          <!-- عنوان المكونات -->
          <v-row class="p-3">
            <v-col cols="12">
              <div class="font-weight-bold text-2xl">Ingredient Name</div>
            </v-col>
            <v-divider></v-divider>
          </v-row>

          <!-- قائمة المكونات -->
          <v-row class="px-3">
            <!-- العنصر الأول -->
            <v-col cols="8">
              <div>calories</div>
            </v-col>
            <v-col cols="4" class="text-right">
              <div>{{ recipe?.calories }}</div>
            </v-col>
            <v-divider class="my-2 white"></v-divider>

            <!-- العنصر الثاني -->
            <v-col cols="8">
              <div>Total Fat</div>
            </v-col>
            <v-col cols="4" class="text-right">
              <div>{{ recipe?.fat }}</div>
            </v-col>
            <v-divider class="my-2 white"></v-divider>

            <!-- العنصر الثالث -->
            <v-col cols="8">
              <div>cholesterol</div>
            </v-col>
            <v-col cols="4" class="text-right">
              <div>{{ recipe?.cholesterol }}</div>
            </v-col>
            <v-divider class="my-2 white"></v-divider>
            <v-col cols="8">
              <div>sodium</div>
            </v-col>
            <v-col cols="4" class="text-right">
              <div>{{ recipe?.sodium }}</div>
            </v-col>
            <v-divider class="my-2 white"></v-divider>
            <v-col cols="8">
              <div>carbohydrate</div>
            </v-col>
            <v-col cols="4" class="text-right">
              <div>{{ recipe?.carbohydrate }}</div>
            </v-col>
            <v-divider class="my-2 white"></v-divider>
          </v-row>

          <!-- الشرح -->
          <v-row>
            <v-col cols="12" class="mt-6">
              <div class="flex flex-1 items-end">
                <p class="grey-text text-center text-sm flex-1 lg:mt-24">
                  These ingredients are essential for preparing the dish. Make
                  sure to measure accurately for the best results.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- الوصف -->
      <v-row>
        <v-col>
          <div class="mt-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  <v-app>
    <v-container>
      <v-row class="mb-6">
        <!-- القسم الأول -->
        <v-col cols="12" md="7">
          <!-- العنوان -->
          <v-row>
            <v-col>
              <h1 class="font-weight-bold text-3xl">Main Recipe Title</h1>
            </v-col>
          </v-row>

          <!-- input checkboxes + العبارة التي تظهر تحتها خط أسود -->
          <v-row class="mb-3">
            <!-- القيم الخاصة بكل checkbox -->
            <v-col>
              <h1 class="text-xl font-medium mb-5">For main dish</h1>
              <v-checkbox
                v-model="checkbox1"
                class=""
                label="Lorem ipsum dolor sit amet"
                color="black"
                :style="{ color: checkbox1 ? 'lightgray' : 'black' }"
              ></v-checkbox>
              <hr class="bg-gray-200 h-[1px]" />

              <v-checkbox
                v-model="checkbox2"
                label="Lorem ipsum dolor sit amet"
                color="black"
                :style="{ color: checkbox2 ? 'lightgray' : 'black' }"
              ></v-checkbox>
              <hr class="bg-gray-200 h-[1px]" />

              <v-checkbox
                v-model="checkbox3"
                label="Lorem ipsum dolor sit amet"
                color="black"
                :style="{ color: checkbox3 ? 'lightgray' : 'black' }"
              ></v-checkbox>
              <hr class="bg-gray-200 h-[1px]" />

              <v-checkbox
                v-model="checkbox4"
                label="Lorem ipsum dolor sit amet"
                color="black"
                :style="{ color: checkbox4 ? 'lightgray' : 'black' }"
              ></v-checkbox>
              <hr class="bg-gray-200 h-[1px]" />
            </v-col>
          </v-row>

          <!-- تكرار القسم الخاص بـ checkboxes -->
          <v-row class="my-15 flex">
            <v-col>
              <h1 class="text-xl font-medium">For the sauce</h1>
              <v-checkbox
                v-model="checkbox5"
                label="Lorem ipsum dolor sit amet"
                color="black"
                :style="{ color: checkbox5 ? 'lightgray' : 'black' }"
              ></v-checkbox>
              <hr class="bg-gray-200 h-[1px]" />

              <v-checkbox
                v-model="checkbox6"
                label="Lorem ipsum dolor sit amet"
                color="black"
                :style="{ color: checkbox6 ? 'lightgray' : 'black' }"
              ></v-checkbox>
              <hr class="bg-gray-200 h-[1px]" />

              <v-checkbox
                v-model="checkbox7"
                label="Lorem ipsum dolor sit amet"
                color="black"
                :style="{ color: checkbox7 ? 'lightgray' : 'black' }"
              ></v-checkbox>
              <hr class="bg-gray-200 h-[1px]" />

              <v-checkbox
                v-model="checkbox8"
                label="Lorem ipsum dolor sit amet"
                color="black"
                :style="{ color: checkbox8 ? 'lightgray' : 'black' }"
              ></v-checkbox>
              <hr class="bg-gray-200 h-[1px]" />
            </v-col>
          </v-row>
        </v-col>

        <!-- القسم الثاني: Other Recipe -->
        <v-col cols="12" md="5">
          <v-row>
            <v-col>
              <h3 class="font-weight-bold text-2xl">Other Recipe</h3>
            </v-col>
          </v-row>

          <!-- الصورة والعنوان -->
          <v-row>
            <v-col cols="12" sm="5">
              <v-img
                src="../../assets/image31.png"
                alt="Other Recipe Image"
                class="rounded-lg"
              ></v-img>
            </v-col>

            <v-col cols="12" sm="5">
              <v-row>
                <v-col>
                  <div class="font-weight-bold">Recipe Title</div>
                  <div class="text-caption grey--text">
                    Short description of the recipe.
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="../../assets/image33.png"
                alt="Other Recipe Image"
                class="rounded-lg"
              ></v-img>
            </v-col>

            <v-col cols="12" sm="5">
              <v-row>
                <v-col>
                  <div class="font-weight-bold">Recipe Title</div>
                  <div class="text-caption grey--text">
                    Short description of the recipe.
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img
                src="../../assets/image32.png"
                alt="Other Recipe Image"
                class="rounded-lg"
              ></v-img>
            </v-col>

            <v-col cols="12" sm="5">
              <v-row>
                <v-col>
                  <div class="font-weight-bold">Recipe Title</div>
                  <div class="text-caption grey--text">
                    Short description of the recipe.
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-col cols="12" sm="10" class="hidden md:block">
            <v-img
              src="../../assets/Ads.png"
              alt="Other Recipe Image"
              class="rounded-lg"
            ></v-img>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-app>

  <v-app>
    <v-container>
      <v-row class="mb-6">
    
        <v-col cols="12" md="8">
      
          <v-row>
            <v-col>
              <h1 class="font-weight-bold text-3xl">Title for the Left Side</h1>
              <v-checkbox
                v-model="checked"
                label="Lorem ipsum dolor sit amet "
                color="black"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-container class="mx-4">
            <!-- شرح طويل -->
            <v-row class="mt-4">
              <v-col>
                <p class="text-body-1">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </v-col>
            </v-row>

            <!-- صورة تحت الشرح -->
            <v-row class="mt-4">
              <v-col>
                <v-img
                  src="../../assets/Rectangle23.png"
                  alt="Sample Image"
                  class="rounded-lg"
                ></v-img>
              </v-col>
            </v-row>

            <!-- شرح آخر تحت الصورة -->
            <v-row class="mt-4">
              <v-col>
                <p class="text-body-1">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </v-col>
            </v-row>
          </v-container>
          <!-- التكرار مرة أخرى بدون صورة -->
          <v-row class="mt-2">
            <v-col>
              <v-checkbox
                v-model="checked"
                label="Lorem ipsum dolor sit amet"
                color="black"
              ></v-checkbox>
            </v-col>
          </v-row>

          <!-- شرح طويل بدون صورة -->
          <v-row class="mt-2 mx-5">
            <v-col>
              <p class="text-body-1">
                This is a long description under the title and checkbox. It
                explains the content in more detail, providing more context and
                information. The description can be as long as necessary.
              </p>
            </v-col>
          </v-row>

          <!-- التكرار للمرة الثانية بدون صورة -->
          <v-row class="  ">
            <v-col>
              <v-checkbox
                v-model="checked"
                label="Lorem ipsum dolor sit amet"
                color="black"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row class="mx-5">
            <v-col>
              <p class="text-body-1">
                This is a long description under the title and checkbox. It
                explains the content in more detail, providing more context and
                information. The description can be as long as necessary.
              </p>
            </v-col>
          </v-row>
        </v-col>

        <!-- شرح طويل آخر بدون صورة -->
      </v-row>
    </v-container>
  </v-app>
  <deliciousness />
  <v-app>
    <!-- واجهة جديدة -->
    <div class="min-h-screen flex flex-col justify-center bg-light p-8">
      <v-container>
        <!-- قسم العنوان والوصف -->
        <v-row class="w-full flex justify-center mb-12">
          <!-- العنوان على أقصى اليسار -->
          <h1 class="text-4xl font-semibold text-black">
            You may like these recipe too
          </h1>
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
import RecipeCard from "../../components/RecipeCard.vue";
import deliciousness from "../../components/deliciousness.vue";
export default {
  components: { RecipeCard, deliciousness },

  data() {
    return {
      recipes: [],
      recipe: null, // لتخزين الوصفة التي سيتم تحميلها
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checked: true,
      highlightedRecipes: [
        {
          image: "/_nuxt/assets/image41.png",
          title: "Big and Juicy Wagyu Beef Cheeseburger Wagyu",
          time: "30 Minutes",
          category: "Chicken",
        },
        {
          image: "/_nuxt/assets/image45.png",
          title: "Fresh Lime Roasted Salmon with Ginger Sauce",
          time: "40 Minutes",
          category: "Beef",
        },
        {
          image: "/_nuxt/assets/image43.png",
          title: "Strawberry Oatmeal Pancake with Honey",
          time: "20 Minutes",
          category: "Vegetarian",
        },
        {
          image: "/_nuxt/assets/image44.png",
          title: "Fresh and Healthy Mixed Mayonnaise Salad",
          time: "20 Minutes",
          category: "Vegetarian",
        },
      ],
    };
  },

  async mounted() {
    const id = this.$route.params.id; // استخدام $route للحصول على الـ id
    if (id) {
      const response = await fetch(
        `https://api.sampleapis.com/recipes/recipes/${id}`
      );
      const recipe = await response.json();
      this.recipe = recipe; // تخزين الوصفة في الـ data
      console.log(recipe);
    }
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.font-weight-bold {
  font-weight: bold;
}
.border-t-2 {
  border-top: 2px solid black;
}
</style>

  