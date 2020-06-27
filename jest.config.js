module.exports = {
  testEnvironment: "node",
  collectCoverage: false,
  coveragePathIgnorePatterns: ["node_modules", "coverage", "test"],
  testResultsProcessor: "jest-sonar-reporter",
  coverageReporters: ["text", "lcov", "json", "clover", "cobertura"],
  "jest-sonar": {
    reportPath: "coverage",
    reportFile: "test-report.xml",
    indent: 4,
  },
};
