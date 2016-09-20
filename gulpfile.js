var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',function(){
    return gulp.src('./inc/sass/style.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./'));
});

/* Task to watch sass changes */
gulp.task('watch', function () {
  gulp.watch('./inc/sass/**/*.scss', ['styles']);
});

/* Task when running `gulp` from terminal */
gulp.task('default', ['styles', 'watch']);