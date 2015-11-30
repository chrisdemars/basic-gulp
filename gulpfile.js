// Gulp packages

var gulp   = require('gulp');
    jshint = require('gulp-jshint');

// Define the default task and add the watch task to it.

gulp.task('default', ['watch']);

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

