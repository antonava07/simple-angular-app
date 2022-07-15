// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require("karma-htmlfile-reporter"),
      require("karma-docker-launcher")
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      outputFile: true,
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './test-output/coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ],
      //If the coverage drops below the number, the test execution fails even if all specs succeeded.
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 60,
          lines: 80,
        }
      }
    },
    reporters: ['progress', 'kjhtml', 'html'],
    htmlReporter: {
      outputFile: './test-output/unit-test/units.html',
            
      // Optional
      pageTitle: 'Unit Tests',
      //subPageTitle: 'A sample project description',
      //groupSuites: true,
      //useCompactStyle: true,
      //useLegacyStyle: true,
      //showOnlyFailed: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadlessDocker', 'Chrome'],
    customLaunchers: {
      ChromeHeadlessDocker: {
        base: 'Docker',   
        modemOptions: {
          socketPath: '/var/run/docker.sock'
        },
        createOptions: {
          Image: 'alpeware/chrome-headless-trunk',
          Env: ['CHROME_OPTS=$KARMA_URL'],
          HostConfig: {
            NetworkMode: 'host'
          }
        }
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
