'use strict';

var gulp = require('gulp');

var config = require('../config.js');

var preTasks = [
  'sass',
  'browserify',
  'webserver',
];

/**
 * Sets the watchers and starts webserver.
 * Intended for development.
 */
module.exports = gulp.task('develop', preTasks, function() {
  gulp.watch(config.sass, ['sass']);
  gulp.watch(config.js, ['browserify']);
  gulp.watch('app/**/*.html', ['browserify']);
});
