'use strict';

let gulp = require('gulp');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');

gulp.task('minify', function (){
    return gulp.src('./DD.js')
        .pipe(uglify())
        .pipe(rename({
            suffix:'.min'
            }))
        .pipe(gulp.dest('./'));
    })