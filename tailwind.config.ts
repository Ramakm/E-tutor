import type { Config } from 'tailwindcss'

const config: Config = {
  important:true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:"#FF6636",
        "primary-50":"#FFEEE8",
        secondary:"#FFEEE8",
        "secondary-100":"#1D2026",
        "secondary-75":"#EBEBFF",
        "secondary-50":"#EBEBFF",
        success:"#E1F7E3",
        warning:"#FFF2E5",
        error:"#FFF0F0",
        Gray:"#FFFFFF",
        "Gray-50":"#F5F7FA",
        accent:"#F5F7FA",
        neutral:"#fff"
      },
      textColor:{
        primary:"#FF6636",
        "primary-50":"#FFEEE8",
        secondary:"#FFEEE8",
        "secondary-100":"#1D2026",
        "secondary-75":"#EBEBFF",
        "secondary-50":"#EBEBFF",
        "secondary-30":"#342F98",
        success:"#E1F7E3",
        "success-100":"#15711F",
        warning:"#65390C",
        error:"#882929",
        Gray:"#FFFFFF",
        "Gray-50":"#F5F7FA",
        accent:"#F5F7FA",
        neutral:"#fff"
      },
      borderColor:{
         primary:"#FF6636",
        secondary:"#FFEEE8",
        "secondary-100":"#1D2026",
        accent:"#F5F7FA",
        neutral:"#fff"
      },
    },
  },
  plugins: [],
}
export default config
