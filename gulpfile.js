// Gulp packages

var gulp     = require('gulp');
    concat   = require('gulp-concat');
    imagemin = require('gulp-imagemin');
    jshint   = require('gulp-jshint');
    strip    = require('gulp-strip-debug');
    uglify   = require('gulp-uglify');
    stylish  = require('jshint-stylish')

// Configure the jshint task.

gulp.task('jshint', function() {
    return gulp.src('source/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
    });

// Configure which files to watch and what tasks to use on file changes.

gulp.task('watch', function() {
    gulp.watch('srouce/javascript/**/*.js', ['jshint']);
    });

// Define the default task and add the watch task to it.

gulp.task('default', ['watch']);

