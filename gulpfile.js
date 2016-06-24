'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  debug = require('gulp-debug'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync').create();
;



gulp.task('sass', function() {
  return gulp.src('src/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('build/css'));
});

gulp.watch('src/styles/**', function(event) {
       gulp.run('sass');
   });

// gulp.task('serve', function() {
//   browserSync.init({
//     server: 'build'
//   });
//
//   gulp.watch('src/styles/**', ['sass']);
//   gulp.watch("build/**").on('change', browserSync.reload);
// });
