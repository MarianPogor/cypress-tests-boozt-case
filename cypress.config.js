const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

const options = {
  webpackOptions: {
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'ts-loader',
              options: { transpileOnly: true },
            },
          ],
        },
      ],
    },
  },
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', webpackPreprocessor(options));
    },
    chromeWebSecurity: false,
    experimentalOriginDependencies: true,
    projectId: "BooztDkMarianPogor_Case_765",
    baseUrl: "https://www.boozt.com/dk/da",
    video: false,
    screenshotOnRunFailure: true, // Automatically capture screenshots on test failure
  },
  screenshotsFolder: "cypress/screenshots",
  viewportWidth: 1280, // Set width for desktop
  viewportHeight: 720,
});
