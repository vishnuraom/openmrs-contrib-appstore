var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var merge = require('merge-stream');
var webserver = require('gulp-webserver');

gulp.task('copy', function() {
    var bower = gulp.src([
            'app/index.html',
            'app/bower_components/webcomponentsjs/webcomponents-lite.min.js',
            'app/bower_components/platinum-sw/service-worker.js',
            'app/sw-import.js'
        ], {
            base: 'app'
        })
        .pipe(gulp.dest('dist'));

    var swtoolbox = gulp.src('app/bower_components/platinum-sw/bootstrap/*.js')
        .pipe(gulp.dest('dist/src/bootstrap'));

    var sw = gulp.src('app/bower_components/sw-toolbox/sw-toolbox.js')
        .pipe(gulp.dest('dist/src/sw-toolbox'));

    return merge(bower, swtoolbox,sw);
});

gulp.task('vulcanize', function() {
    return gulp.src('app/src/elements.html')
        .pipe(vulcanize({
            stripComments: true,
            inlineScripts: true,
            inligneCss: true
        }))
        .pipe(gulp.dest('dist/src'));
});

gulp.task('serve', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('default', ['copy', 'vulcanize']);
