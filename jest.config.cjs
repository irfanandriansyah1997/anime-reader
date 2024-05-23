module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/utils/test.tsx"],
  coverageReporters: ["json", "html"],
  moduleNameMapper: { "@/(.*)$": "<rootDir>/src/$1" },
  passWithNoTests: true,
  globals: {
    IS_REACT_ACT_ENVIRONMENT: true,
  },
  prettierPath: require.resolve("prettier-2"),
  resetMocks: false,
  roots: ["<rootDir>/src"],
  setupFiles: ["jest-localstorage-mock"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTest.ts"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/etc/test/file-transform.cjs",
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx$": "ts-jest",
    "^.+\\.es6$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg",
  },
};
