import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_blue: "#1376F8",
        secondary_blue: "#11468D",
        accent_blue: "#2A57A7",
        dark_text_blue: "#011632",
        highlight_yellow: "#EC942C",
        primary_white: "#FFFFFF",
        secondary_white: "#F0FAFF",

        body_text_white: "#3C4959"
      },
    },
  },
  plugins: [],
};
export default config;
