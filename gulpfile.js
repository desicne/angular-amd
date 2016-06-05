
var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('tasks/develop');

gulp.task('default', ['develop']);
