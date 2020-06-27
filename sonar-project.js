const sonarqubeScanner = require("sonarqube-scanner");

sonarqubeScanner({
        serverUrl: "https://sonarcloud.io",
        options: {
            "sonar.projectKey": "one-aalam_workshop3-ci-cd",
            "sonar.projectName": "Workshop3",
            "sonar.projectVersion": "1.0",
            "sonar.organization": "one-aalam",
            "sonar.sources": "src",
            "sonar.tests": "__tests__",
            "sonar.exclusions": "node_modules/**, coverage/**, test/**",
            "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.textExecutionReportPaths": "test-report.xml"
        },
    },
    () => {}
);

module.exports = sonarqubeScanner;