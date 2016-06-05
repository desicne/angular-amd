'use strict';
var gulp = require('gulp');

var jspath = 'app/scripts/**/*.js';
var bundleBrowserify = require('../util/browserify.js');
var templateCache = require('gulp-angular-templatecache');

/**
 * Browserify task is dummy task serving only to call other
 * tasks that do actual compiling for both app and mobile pass reset page
 */
gulp.task('browserify', ['browserify:app']);

gulp.task('scriptsTemplatecache', function() {
  return gulp.src('app/scripts/**/*.html')
    .pipe(templateCache({
      standalone: true,
      module: 'angular-amd.templates',
      filename: 'script-templates.js',
      moduleSystem: 'Browserify',
      transformUrl: function(url) {
        return 'scripts/' + url;
      }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('browserify:app', ['scriptsTemplatecache'], function() {
  return bundleBrowserify({
    entry: 'app/scripts/index.js',
    debug: true,
    outFileName: 'index.js',
    dest: 'dist/'
  });
});
