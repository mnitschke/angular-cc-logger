var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    return gulp.src('./src/**/*.js')
        .pipe(concat('angular-cc-logger.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

//gulp.task('start',  'scripts']);