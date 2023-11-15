const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // Additional setupNodeEvents logic if needed
    },
  },
  reporter: 'mochawesome', // Set the Mochawesome reporter
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome', // Set the directory for Mochawesome reports
    overwrite: false, // Set to true if you want to overwrite existing reports
    html: false, // Set to true if you want HTML reports alongside the JSON files
    json: true, // Set to true to generate JSON reports
  },
});