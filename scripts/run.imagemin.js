const imagemin = require('imagemin');
const imageminJpegoptim = require('imagemin-jpegoptim');
const imageminOptipng = require('imagemin-optipng');
const fse = require('fs-extra');
const glob = require('glob');

const sourceDir = 'src/images/';
const outputDir = 'build/images/';

glob('**/*', {'cwd': 'src/images/', 'ignore':['sprite/**']}, function (err, files) {
    if (err) {
       return console.error(err);
    }

    console.log('Copying images to "%s"', outputDir);

    files.forEach(function(path) {
        console.log(' - %s', path);
        fse.copySync(sourceDir + path, outputDir + path);
    });

    minify();
});

function minify() {
    console.log('Minifying images at "%s"', outputDir);

    imagemin(['build/images/**/*'], outputDir, {
        plugins: [
            imageminJpegoptim(),
            imageminOptipng()
        ]
    }).then(function(file) {
        file.forEach(function(item) {
            console.log(' - %s', item.path);
        });
    });
}
