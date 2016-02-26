 // Gulp packages

 var gulp = require('gulp');
 var concat = require('gulp-concat');
 var imagemin = require('gulp-imagemin');
 var jshint = require('gulp-jshint');
 var strip = require('gulp-strip-debug');
 var uglify = require('gulp-uglify');
 var stylish = require('jshint-stylish');
 var size = require('gulp-sizereport');
 var cssmin = require('gulp-cssmin');

 // Check the size of the files (imgs, css, js)

 gulp.task('size', function() {
   return gulp.src('./prod/dist/**/*')
     .pipe(size());
 });

 // Configure the JS tasks.

 gulp.task('js', function() {
   return gulp.src('src/js/**/*.js')
     // .pipe(strip - debug())
     .pipe(jshint())
     .pipe(jshint.reporter('jshint-stylish'))
     .pipe(uglify())
     .pipe(concat('scripts.js'))
     .pipe(gulp.dest('prod/dist/js'));
 });

 // Configure CSS stuff

 gulp.task('css', function() {
   return gulp.src('src/css/**/*.css')
     .pipe(cssmin())
     .pipe(gulp.dest('prod/dist/css'));
});

// Configure image tasks.

gulp.task('images', function() {
  return gulp.src('src/img/**/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('prod/dist/img'));
});

// Configure which files to watch and what tasks to use on file changes.
// The watch task can be added later before the build task officially runs.

//gulp.task('watch', function() {
//   gulp.watch('srouce/javascript/**/*.js', ['jshint']);
//    });

// Define the default task and add the watch task to it.

gulp.task('default', ['js', 'css', 'images', 'size']);
