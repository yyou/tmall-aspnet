/// <binding AfterBuild='sass, concat-js' />
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('sass', function() {
    gulp.src('./Content/Sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./Content/'))
});

gulp.task('concat-js', function() {
    gulp.src('./Views/**/*.js')
	.pipe(concat('site.js'))
	.pipe(gulp.dest('./Scripts'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('./Content/Sass/**/*.scss', ['sass']);
    //gulp.watch('*.html', ['html']);
});

gulp.task('default', ['webserver', 'watch']);
