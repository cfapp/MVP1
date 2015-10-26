exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  allScriptsTimeout: 11000,

  specs: ['protractorMockTest.js'],

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};