var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style/'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss', ['sass']);
    //gulp.watch('*.html', ['html']);
});

gulp.task('default', ['webserver', 'watch']);
