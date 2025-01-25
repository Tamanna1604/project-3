module.exports = { 
  mode: 'jit', 
  content: [ 
      "./index.html", 
      "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  theme: { 
        extend: {
          colors: {
            primary:'#FF3357'
          }
        }, 
  },  
  plugins: [], 
};