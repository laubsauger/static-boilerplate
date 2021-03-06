var cover = require('browserify-istanbul');
// Karma configuration
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon-chai', 'browserify'],

        // list of files / patterns to load in the browser
        files: [
            'src/js/**/*.js',
            'test/**/*.js'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.spec.js': ['browserify']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {
                    type: 'html',
                    subdir: 'phantom',
                    file: 'index.html',
                    ignore: ['**/*spec.js'],
                    defaultIgnore: true
                },
                {
                    type: 'text'
                }
            ]
        },

        browserify: {
            debug: true,
            transform: ['browserify-istanbul']
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // Browserify Config
        //browserify: {
        //    debug: true,
        //    extensions: [".js"],
        //    configure: function(bundle){
        //        bundle.on('prebundle', function(){
        //            bundle.transform(cover(coverOptions));
        //        });
        //    }
        //},
        junitReporter: {
            outputFile: "spec/reports/test-results.xml"
        }
    })
};
