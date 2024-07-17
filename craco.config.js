const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
    },
  },
};
