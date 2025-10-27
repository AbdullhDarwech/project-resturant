// services/api.js
export const fetchCategories = async () => {
  return [
    { image: '/_nuxt/assets/image20.png', name: 'Carrots', color: '#708246' },
    { image: '/_nuxt/assets/image21.png', name: 'Broccoli', color: '#CC261B' },
    { image: '/_nuxt/assets/image22.png', name: 'Tomatoes', color: '#F09E00' },
    { image: '/_nuxt/assets/image23.png', name: 'Spinach', color: '#000000' },
  ];
};

export const fetchRecipes = async () => {
  return [
    { image: '/_nuxt/assets/image26.png', title: 'Big and Juicy Wagyu Beef Cheeseburger', time: '30 Minutes', category: 'Chicken' },
    { image: '/_nuxt/assets/image27.png', title: 'Fresh Lime Roasted Salmon with Ginger Sauce', time: '40 Minutes', category: 'Beef' },
    { image: '/_nuxt/assets/image28.png', title: 'Strawberry Oatmeal Pancake', time: '20 Minutes', category: 'Vegetarian' },
  ];
};
