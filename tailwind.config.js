/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./build/**/*.{html,js}', './src/**/*.{html,js}'],
   theme: {
      extend: {
         backgroundImage: {
            'background-Img':
               "url('https://images.unsplash.com/photo-1520176501380-9a174bf7c783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')",
         },
         colors: {
            'custom-transparent': 'rgba(0, 0, 0, 0.6)',
         },
      },
   },
   plugins: [],
};
