var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

gulp.task('default', function(){
  gulp.watch('./public/sass/**/*.scss', ['sass']);
});
