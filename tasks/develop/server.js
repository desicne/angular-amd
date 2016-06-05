'use strict';
var gulp = require('gulp');
var webserver = require('gulp-webserver');

/**
 * Spawns small web server for development purposes.
 * When started, it's address is http://localhost:9000
 */
module.exports = gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 9000,
      livereload: true,
      fallback: 'index.html'
    }));
});