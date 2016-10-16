'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin')
 
gulp.task('sass', function () {
  gulp.src('./templates/flover/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('./templates/flover/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./templates/flover/scss/**/*.scss', ['sass']);
});