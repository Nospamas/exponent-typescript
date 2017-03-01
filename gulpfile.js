var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function () {
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest(tsProject.options.outDir));
});

gulp.task('copy:assets', function () {
  return gulp
    .src('app/assets/**/*')
    .pipe(gulp.dest(path.join(tsProject.options.outDir, './assets')));
});

gulp.task('watch', [ 'build', 'copy:assets'  ], function () {
  // if any typescript, tsx-typescript or javascript files change, build
  gulp.watch([
      'app/**/*.ts',
      'app/**/*.tsx',
      'app/**/*.js' ],
    [ 'build']);
  // if anything changes in assets, copy them
  gulp.watch('app/assets/**/*', [ 'copy:assets' ])
});