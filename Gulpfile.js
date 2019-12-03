let gulp = require('gulp');
let sass = require('gulp-sass');


gulp.task('styles', function() {
  return gulp.src('./src/sass/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/css/'))
});


//Watch task
gulp.task('default',function() {
  return gulp.watch('./src/sass/style.scss',gulp.series('styles'));
});
