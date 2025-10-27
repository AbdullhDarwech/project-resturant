/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js , ts}"],
  theme: {
    extend: {
      lineHeight: {
        '16.94': '16.94px', // إضافة line-height بقيمة 16.94px
      },
      colors: {
        primary: '#1976D2', // اللون الأساسي
        secondary: '#E7FAFE', // اللون الثانوي
        accent: '#82B1FF', // لون إضافي إذا كنت بحاجة
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // اجعل Inter الخط الأساسي
    },
    container:{
     center: true,
     padding: "4rem",
    }
   },
  plugins: [],
};
