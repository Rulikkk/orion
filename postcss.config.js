module.exports = {
  plugins: [
    "tailwindcss",
    // [
    //   "@fullhuman/postcss-purgecss",
    //   {
    //     content: [
    //       "./pages/**/*.{js,jsx,ts,tsx}",
    //       "./components/**/*.{js,jsx,ts,tsx}"
    //     ],
    //     whitelistPatterns: [/bg-.*?-400/g],
    //     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    //   }
    // ],
    "postcss-preset-env"
  ]
};
