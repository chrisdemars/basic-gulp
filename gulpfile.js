// Gulp packages

var gulp     = require('gulp');
    concat   = require('gulp-concat');
    imagemin = require('gulp-imagemin');
    jshint   = require('gulp-jshint');
    strip    = require('gulp-strip-debug');
    uglify   = require('gulp-uglify');
    stylish  = require('jshint-stylish')

// Configure the JS tasks.

gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
    .pipe(gulp-strip-debug())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp-uglify())
    .pipe(gulp-concat('scripts.js'))
    .pipe(gulp.dest('prod/dist/js'));
    });

// Configure CSS stuff

gulp.task('css', function() {
    return gulp.src('src/css/**/*.js')
    .pipe(gulp-uglify())
    .pipe(gulp.dest('prod/dist/css');
    })

// Configure image tasks.

gulp.task('images', function() {
    return gulp.src('src/img/**/*.jpg')
    .pipe(gulp-imagemin())
    .pipe(gulp.dest('prod/dist/img');
    })

// Configure which files to watch and what tasks to use on file changes.
// The watch task can be added later before the build task officially runs.

//gulp.task('watch', function() {
//   gulp.watch('srouce/javascript/**/*.js', ['jshint']);
//    });

// Define the default task and add the watch task to it.

gulp.task('default', ['js', 'css', 'images']);

