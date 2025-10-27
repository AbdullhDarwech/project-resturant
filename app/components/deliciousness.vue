<template>
  <v-app>
    <div class="flex flex-col justify-center bg-light p-8">
      <v-container class="bg-blue-200 overflow-hidden rounded-3xl p-8">
        <!-- القسم العلوي -->
        <v-row class="mb-12">
          <v-col cols="12" class="text-center">
            <h1 class="text-4xl font-semibold text-black mb-4 p-8">Welcome to Our Platform</h1>
            <p class="text-lg text-gray-600">
              Discover exciting features and explore amazing content through our platform.
            </p>
          </v-col>
        </v-row>

        <!-- حقل الإدخال والزر -->
        <v-row class="mb-15  flex items-center w-full md:justify-end">
          <div class="flex w-full flex-1 justify-center items-center relative rounded-3xl">
            <div class="md:w-50  ">

           
            <input
              type="text"
              placeholder="Enter Text "
              class="w-full  flex-1  outline-none text-gray-800 md:px-1 px-5 py-4 rounded-2xl bg-white"
            />
          </div>
           <!-- الزر -->
    <button
      class="rounded-2xl h-12  m-1  w-28 md:w-32 absolute top-0 right-4  lg:right-[300px] md:right-[220px] sm:right-[160px] md:top-0 bg-black text-white"
    >
      Get Started
    </button>
          </div>
        </v-row>

        <!-- الصور -->
        <v-row class="relative">
          <!-- الصورة العلوية اليسرى -->
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-center bg-cover rounded-full hidden md:block"
            style="background-image: url('../_nuxt/assets/Photo-plate.png'); transform: translate(18%, -70%);"
          ></div>

          <!-- الصورة السفلية اليمنى -->
          <div
            class="absolute bottom-0 left-0 w-64 h-64 bg-center bg-cover rounded-full hidden md:block"
            style="background-image: url('../_nuxt/assets/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png'); transform: translate(-8%, 5%);"
          ></div>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>
