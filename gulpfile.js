
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    less =   require('gulp-less'),
//sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),//Prevent pipe breaking caused by errors
    cssmin = require('gulp-cssmin'),
    connect = require('gulp-connect'),//to run a webserver
  //   uglify = require('gulp-uglify'),
  //   pump = require('pump'),
    rename = require('gulp-rename'),
    minifyHtml = require('gulp-minify-html'),
     watch = require('gulp-watch');

var lessSources = ['src/less/*.less'];
var htmlSources = ['src/ui-comps/*.html','src/index.html','src/ui-tabs/*.html'];
var jsSources = ['src/**/*.js'];
var allFiles = [lessSources,htmlSources,jsSources];
// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch(jsSources, ['jshint']);
    gulp.watch(lessSources,['less']);
    gulp.watch(htmlSources,['minify-html']);
  //  watch(allFiles).pipe(connect.reload());
    watch(jsSources).pipe(connect.reload());
    watch(lessSources).pipe(connect.reload());
    watch(htmlSources).pipe(connect.reload());
    watch('src/index.html').pipe(connect.reload());

});

gulp.task('less', function () {
    return gulp.src(lessSources)
        .pipe(plumber())
        .pipe(less())
        // .pipe(less().on('error', function (err) {
        //     console.log(err);
        // }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist/minified/'));
});


gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('index.html');
});

gulp.task('minify-html', function () {
    gulp.src(htmlSources) // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist/minified'));
});

// gulp.task('compress', function (cb) {
//   pump([
//         gulp.src('lib/*.js'),
//         uglify(),
//         gulp.dest('dist')
//     ],
//     cb
//   );
// });

gulp.task('default', ['less', 'watch','jshint','connect','html','minify-html']); //execute in parallel
//for sequenece use gulp-sequence
