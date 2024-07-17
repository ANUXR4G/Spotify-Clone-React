# npm install

# install tailwind in project
1. npm install -D tailwindcss<br>
2. npx tailwindcss init

# Tailwindconfig.js
/** @type {import('tailwindcss').Config} */<br>
module.exports = {<br>
  content: ["./src/**/*.{html,js}"],<br>
  theme: {<br>
    extend: {},<br>
  },<br>
  plugins: [],<br>
} <br>


# Add The Code Given Below In Index.css
@tailwind base;<br>
@tailwind components;<br>
@tailwind utilities; <br>


# npm i react-icons

# npm i react-router-dom

# npm i @iyaroslav/play-pause-button