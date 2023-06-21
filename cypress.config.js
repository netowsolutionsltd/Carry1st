const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "baseUrl":"https://shop.carry1st.com/",
      "defaultCommandTimeout":9000,
      "pageLoadTimeout": 70000,
     "viewportHeight": 800,
     "viewportWidth": 1500
    //setupNodeEvents(on, config) {
      // implement node event listeners here
    },
});
