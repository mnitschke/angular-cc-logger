var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    karma = require('gulp-karma'),
    bower = require('bower');

var testFiles = [
    './node_modules/angular/angular.js',
    './node_modules/angular-mocks/angular-mocks.js',
    './src/**/*.js',
    './tests/**/*.js'
];

gulp.task('scripts', function() {
    return gulp.src('./src/**/*.js')
        .pipe(concat('angular-cc-logger.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});

gulp.task('test', function(){
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            throw err;
        });
});

gulp.task('build',  ['test', 'scripts']);