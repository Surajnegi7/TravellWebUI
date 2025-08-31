# TravellWebUI
Created UI Design of A Travel Website
Step:1 - Keep All working components under src folder
Step:2-Keep All routes in App.jsx 
Step:3- Keep All images in the images folder which is under the src folder
Step:4- Change your directory to my-app
Step:5- Then type npm start in your command prompt terminal.

Keep your external.css file into src folder
Dont forget to install tailwind css 

Install Tailwind CSS
Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.

Terminal

npm install -D tailwindcss@3
npx tailwindcss init
Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
Start your build process
Run your build process with npm run start.

Terminal

npm run start
Start using Tailwind in your project
Start using Tailwind’s utility classes to style your content.

App.js

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
