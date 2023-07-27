const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@images": path.resolve(__dirname, "./src/images"),
      "@variables": path.resolve(__dirname, "./src/common/_variables.scss"),
      "@fonts": path.resolve(__dirname, "./src/fonts/index.js"),
      "@global": path.resolve(__dirname, "./src/layout/global/global.scss")
    },
  },
};
