module.exports = {
  purge: [
    './src/*/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'hero-theme': "url('https://images.unsplash.com/photo-1612729893775-6049985bb332?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
