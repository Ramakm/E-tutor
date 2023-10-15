import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:"#FF6636",
        secondary:"#FFEEE8",
        "secondary-50":"#1D2026",
        accent:"#F5F7FA",
        neutral:"#fff"
      },
      textColor:{
         primary:"#FF6636",
        secondary:"#FFEEE8",
        "secondary-50":"#1D2026",
        accent:"#F5F7FA",
        neutral:"#fff"
      },
      borderColor:{
         primary:"#FF6636",
        secondary:"#FFEEE8",
        "secondary-50":"#1D2026",
        accent:"#F5F7FA",
        neutral:"#fff"
      },
    },
  },
  plugins: [],
}
export default config
