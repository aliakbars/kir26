var gulp = require('gulp');
var data = require('gulp-data');
var pug = require('gulp-pug');
var gutil = require('gulp-util');

gulp.task('pug', function build() {
    return gulp.src('pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('.'))
});

gulp.task('default', ['pug']);