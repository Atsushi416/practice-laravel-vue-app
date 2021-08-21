module.exports = {
    transform: {
      ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    },
    moduleFileExtensions: ["js", "vue"],
    testEnvironment: "jsdom",
};