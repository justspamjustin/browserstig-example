module.exports = {

  // Required

  // The browser to automate
  // - Chrome
  // - ChromeCanary
  // - Firefox
  // - Opera
  // - Safari (only Mac)
  // - PhantomJS
  // - IE (only Windows)
  browser: 'Chrome',

  files: ['tests/*.js'], // List of files and patterns to load in the browser

  automatedUrl: 'http://amazon.com/', // The base Url for the site you are automating.

  // Optional

  basePath: '', // The base path where all files are resolved from.

  main: 'main.js', // A file that will load in the browser before other files

  framework: 'mocha', // Test runner. Options are: jasmine, mocha, qunit

  reporters: ['dots'], // 'dots', 'progress', 'junit', 'growl'

  exclude: [] // A file that will be excluded from the loaded files

};