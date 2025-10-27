<template>
  <v-col cols="12" sm="6" md="3" class="mb-8">
    <div class="rounded-lg bg-white shadow-lg overflow-hidden">
      <!-- صورة البروفايل في الأعلى -->
      <div class="flex items-center space-x-2 p-2">
        <!-- صورة البروفايل الدائرية -->
        <v-avatar size="32">
          <img :src="image" alt="Profile" />
        </v-avatar>
        <!-- عنوان الكرت -->
        <div class="flex flex-col">
          <div class="font-bold text-xs flex items-center">
            {{ title }}
            <v-icon color="blue" class="text-sm ml-1" style="width: 7.65px; height: 7.58px;" >mdi-check-circle</v-icon>
          </div>
          <span class="text-gray-500 text-xs">{{ location }}</span>
        </div>
        <!-- ثلاث نقاط عرضية في أقصى اليمين -->
        <div class="ml-auto text-gray-500 cursor-pointer">
          <v-icon>mdi-dots-horizontal</v-icon>
        </div>
      </div>

      <!-- صورة الكرت الرئيسية (المحتوى الرئيسي) -->
      <div class="relative">
        <img :src="image" alt="Card Image" class="w-full h-70 object-cover" />
      </div>

      <!-- تفاصيل الكرت -->
      <div class="p-2">
  <!-- أيقونات التفاعل -->
  <div class="flex justify-between items-center mb-4">
    <!-- أيقونات التفاعل (الإعجاب، التعليق، المشاركة) -->
    <div class="flex space-x-1">
      <v-icon color="black" class="cursor-pointer">mdi-heart-outline</v-icon>
      <v-icon color="black" class="cursor-pointer">mdi-comment-outline</v-icon>
      <v-icon color="black" class="cursor-pointer">mdi-share-outline</v-icon>
    </div>

    <!-- النقاط في المنتصف -->
    <div class="flex   justify-center items-center flex-1 space-x-1 mr-10">
      <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
      <div class="w-1.5 h-1.5 bg-gray-100 rounded-full"></div>
      <div class="w-1.5 h-1.5 bg-gray-100 rounded-full"></div>
    </div>

    <!-- أيقونة الحفظ -->
    <v-icon color="black" class="cursor-pointer">mdi-bookmark-outline</v-icon>
  </div>

  <!-- صورة صغيرة واسم المكان -->
  <div class="flex items-center">
    <v-avatar size="28">
      <img :src="image" alt="Profile" />
    </v-avatar>
    <div class="ml-2">
      <div class="font text-sm" style="font-weight: 400; font-size: 10.05px; line-height: 13.92px; letter-spacing: -0.05px;">
  Liked by <span style="font-weight: 600; font-size: 10.05px; line-height: 13.92px; letter-spacing: -0.05px;">
  craig_love
</span>
 and <span style="font-weight: 600; font-size: 10.05px; line-height: 13.92px; letter-spacing: -0.05px;">
  44,686
</span>  others
</div>

    </div>
  </div>
  <div class="font text-sm ml-2" style="font-size: 10.05px; line-height: 13.92px; letter-spacing: -0.08px;">
    <span style="font-weight: 600; font-size: 10.05px; line-height: 13.92px; letter-spacing: -0.05px;"> Foodieland.</span>   The vegetables dishes need to have certain vitamin for those people
</div>
 <div class="text-gray-500 text-xs ml-2">{{ date }}</div>
</div>

    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    location: String,
    date: String,
  },
};
</script>

<style scoped>
/* تخصيص الكرت */
.v-col {
  max-width: 100%;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
