'use strict';

var util = require('util');

module.exports = {
    src: './src/images/sprite/**/*.{png,gif,jpg}',
    destImage: './build/images/sprite.png',
    destCSS: './src/scss/generated/_sprite.scss',
    padding: 2,
    algorithm: 'top-down',
    algorithmOpts: { sort: false }
};
