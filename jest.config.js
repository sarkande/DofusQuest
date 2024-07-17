module.exports = {
  moduleNameMapper: {
    "^@styles/(.*)$": "<rootDir>/src/assets/styles/$1",
    "^@interfaces/(.*)$": "<rootDir>/src/interfaces/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testEnvironment: "jsdom",
};
