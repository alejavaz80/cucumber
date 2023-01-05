const reporter = require('cucumber-html-reporter')


//OPTIONS DOCUMENTATION:
//https://www.npmjs.com/package/cucumber-html-reporter

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: './reports/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metada: {
        "App Version" : '2.0.12345',
        "Test Enviroment" : 'e2e-testing',
        Browser: 'Chrome 100.10.2',
        Platform: 'Windows 11'
    }
}

reporter.generate(options)