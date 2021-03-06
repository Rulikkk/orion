const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelist: ["svg-inline--fa"],
    whitelistPatterns: [/fa-$/]
  }
];
module.exports = {
  plugins: [
    "tailwindcss",
    [
      "postcss-preset-env",
      {
        features: {
          "nesting-rules": true
        }
      }
    ],
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
