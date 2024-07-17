const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        fs: false,
        path: require.resolve("path-browserify"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        assert: require.resolve("assert/"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        url: require.resolve("url/"),
      };
      return webpackConfig;
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
