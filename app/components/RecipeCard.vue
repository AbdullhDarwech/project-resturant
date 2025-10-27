<template>
  <v-col 
    :cols="cols" 
    :sm="smCols" 
    :md="mdCols" 
    :lg="lgCols" 
    cols-md="6" 
    class="mb-5"
  >
    <div
      :class="['card-container relative', title === 'Ads' ? 'ads-container' : 'default-container']"
    >
      <!-- حالة Ads -->
      <template v-if="title === 'Ads'">
        <div class="image-container shadow-lg">
          <img :src="image" alt="Ad_Image" class="image" />
        </div>
      </template>

      <!-- الحالة الافتراضية -->
      <template v-else>
        <!-- أيقونة القلب (محدثة) -->
        <div 
          class="absolute top-5 left-5 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-md cursor-pointer"
        >
          <v-icon class="text-red-500" size="20">
            mdi-heart
          </v-icon>
        </div>

        <!-- صورة العنصر -->
        <div class="image-container mb-4">
          <img :src="image" alt="Recipe_Image" class="image rounded-lg" />
          <div 
          class="absolute top-1 right-5 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-md cursor-pointer"
        >
          <v-icon class="text-red-500" size="20">
            mdi-heart
          </v-icon>
        </div>
        </div>

        <!-- النصوص -->
        <h3 class="text-md font-semibold text-gray-800 mb-2">{{ title }}</h3>
        <div class="flex justify-start gap-x-1 items-center">
          <div class="flex items-center space-x-1 p-2 rounded-full">
            <v-icon color="black" class="text-sm">mdi-clock</v-icon>
            <span class="text-gray-600 text-sm">{{ time }} min</span>
          </div>
          <div class="flex items-center space-x-1 p-1 rounded-full">
            <v-icon color="gray" class="text-sm">mdi-silverware-fork-knife</v-icon>
            <span class="text-gray-600 text-sm">{{ category }}</span>
          </div>
        </div>
      </template>
    </div>
  </v-col>

</template>

<style scoped>
/* الحاوية التي تحتوي على الصورة */
.image-container {
  width: 100%;
  height: 200px; /* يمكن تغيير هذا الارتفاع حسب التصميم */
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

/* الصورة نفسها */
.image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* تغطية الحاوية مع الحفاظ على النسبة */
  display: block;
}
</style>

<script>
export default {
  props: {
    image: String,
    title: String,
    time: String,
    category: String,
    cols: {
      type: Number,
      default: 12, // العرض الكامل الافتراضي (على الشاشات الصغيرة جدًا)
    },
    smCols: {
      type: Number,
      default: 6, // نصف العرض على الشاشات الصغيرة
    },
    mdCols: {
      type: Number,
      default: 4, // ثلث العرض على الشاشات المتوسطة
    },
    lgCols: {
      type: Number,
      default: 3, // ربع العرض على الشاشات الكبيرة
    },
  },
};
</script>
