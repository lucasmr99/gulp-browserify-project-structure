const gulp = require('gulp');
const brawserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

const paths = {
    source: "./src",
    build: "./build"
}

function javascriptBuild(){
    return(
        brawserify({
            entries: [`${paths.source}/main.js`],
            transform: [babelify.configure({ presets: ["@babel/preset-env"] })]
        })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(`${paths.build}`))
    );
}

exports.build = javascriptBuild

