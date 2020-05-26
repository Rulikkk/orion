const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader"
    });
    return config;
  }
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      optimizeImagesInDev: true
    }
  ],
  // your other plugins here
  nextConfig
]);
