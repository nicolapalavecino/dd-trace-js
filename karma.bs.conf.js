const base = require('./karma.conf')

module.exports = config => {
  base(config)

  config.set({
    reporters: ['dots', 'BrowserStack'],

    browsers: ['bs_chrome_mac'],

    // https://github.com/karma-runner/karma-browserstack-launcher
    browserStack: {
      project: 'dd-trace-js'
    },

    customLaunchers: {
      bs_chrome_mac: {
        base: 'BrowserStack',
        browser: 'Chrome',
        browser_version: '76.0',
        os: 'Windows',
        os_version: '10'
      }
    }
  })
}
