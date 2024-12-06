
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://painel.stg.destrava.ai/',
    video: true, 
    reporter: 'mochawesome',
    reporterOptions:{
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyy_HHMMss"
    }
  },
});
