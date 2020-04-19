const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

console.log("!!!!!!!!!!!!!!!!!!!!!!! TETEGS SDG !!!");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      optimizeImagesInDev: true
    }
  ]

  // your other plugins here
]);
