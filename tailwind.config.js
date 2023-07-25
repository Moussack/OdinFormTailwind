/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./build/*'],
   theme: {
      extend: {
         backgroundImage: {
            'background-Img':
               "url('https://images.unsplash.com/photo-1680402809428-507ad4e45ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80')",
         },
         colors: {
            'custom-transparent': 'rgba(0, 0, 0, 0.5)',
         },
      },
   },
   plugins: [],
};
