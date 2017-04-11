var gulp = require('gulp');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('tslint', function () {
    gulp.src(['wkwebview.ios.ts', './src/**/*.ts'])
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

gulp.task('compile', function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./'));
});
