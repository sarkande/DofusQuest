const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@styles/(.*)$": "<rootDir>/src/assets/styles/$1",
        "^@interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
      },
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
    },
  },
};
