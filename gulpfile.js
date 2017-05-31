var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
 
gulp.task('inlinesource', function () {
    return gulp.src('./lcov-report/*.html')
        .pipe(inlinesource({attribute: false}))
        .pipe(gulp.dest('./lcov-report-inline'));
});
