'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

var gutil = require('gulp-util');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourceMaps = require('gulp-sourcemaps');

/**
 * Compiles sass files into css.
 */

module.exports = gulp.task('sass', function () {
  gulp.src('app/sass/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('dist/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('dist/'));
});
