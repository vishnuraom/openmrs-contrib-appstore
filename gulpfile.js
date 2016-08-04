var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var merge = require('merge-stream');
var webserver = require('gulp-webserver');

gulp.task('copy', function() {
    var bower = gulp.src([
            'app/index.html',
            'app/bower_components/**/*',
            'app/images/**/*',
            'app/sw-import.js'
        ], {
            base: 'app'
        })
        .pipe(gulp.dest('dist'));

    var platinumsw = gulp.src('app/bower_components/platinum-sw/bootstrap/*.js')
        .pipe(gulp.dest('dist/src/bootstrap'));

    var swtoolbox = gulp.src('app/bower_components/sw-toolbox/**/*')
        .pipe(gulp.dest('dist/sw-toolbox'));

    return merge(bower,platinumsw,swtoolbox);
});

gulp.task('vulcanize', function() {
    return gulp.src('app/src/elements.html')
        .pipe(vulcanize({
            stripComments: true,
            inlineScripts: true,
            inlineCss: true
        }))
        .pipe(gulp.dest('dist/src'));
});

gulp.task('serve', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('default', ['copy', 'vulcanize']);
