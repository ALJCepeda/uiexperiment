"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');//Runs a local dev server
var open = require('gulp-open');//Open a URL in a web browser
var babel = require('babelify');;//transforms es6 to es5
var sourcemaps = require('gulp-sourcemaps');//sourcemaps for debugging
var concat = require('gulp-concat');//concatenates files
var lint = require('gulp-eslint');//Lint js files, including JSX
var extend = require('extend');
var sourcemaps = require('gulp-sourcemaps');
var through = require('through2');
var named = require('vinyl-named');
var webpackStream = require('webpack-stream');
//"redbox-react": "^1.2.2", check this out for displaying stacktraces in browser

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost:8098',
  paths: {
    html: './src/timeOff/management/managetimeoff.html',
    js: './src/**/*.js',
    css: [
      './src/styles/*',
      './src/**/*.css'
    ],
    dist: './deployment/',
    indexJs: './src/index.js',
    images: './src/images/*',
  }
};

gulp.task('js', function() {
  var webpackConfig = extend({}, require('./webpack.config.dev.js'), {
    devtool: "source-map",
  });
  return gulp.src(config.paths.indexJs)
    .pipe(named())
    .pipe(webpackStream(webpackConfig))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(through.obj(function (file, enc, cb) {
      // Dont pipe through any source map files as it will be handled
      // by gulp-sourcemaps
      var isSourceMap = /\.map$/.test(file.path);
      if (!isSourceMap) this.push(file);
      cb();
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./deployment/js'))
    .pipe(connect.reload())
})

gulp.task('jsProd', function() {
  var webpackConfig = extend({}, require('./webpack.config.prod.js'));
  return gulp.src(config.paths.indexJs)
    .pipe(named())
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('./deployment/js'))
})

//Start a local development server
gulp.task('connect', function() {
  connect.server({
    root: ['deployment/'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

//depends on connect task
gulp.task('open', ['connect'], function() {
  gulp.src('deployment/index.html')
      .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/', app: 'Chrome'}));
});

//build and deploy to dist.  Reload the page
gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(connect.reload());
});

gulp.task('images', function(){
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());

    //publish favicon.  Nice icon in the URL and in bookmarks
    gulp.src('./src/favicon.ico')
      .pipe(gulp.dest(config.paths.dist));
});

gulp.task('testData', function(){
  gulp.src(config.paths.testData)
    .pipe(gulp.dest(config.paths.dist + '/testData'))
    .pipe(connect.reload());
});

gulp.task('css', function(){
  gulp.src(config.paths.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'));
});


gulp.task('lint', function(){
  return gulp.src(config.paths.js)
            .pipe(lint({config: 'eslint.config.json'}))
            .pipe(lint.format());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'lint']);
  gulp.watch(config.paths.css, ['css', 'js']);//webpack builds css-module files
});

gulp.task('prodBuild', ['html', 'jsProd', 'css', 'images', 'testData'], function() {});

gulp.task('build', ['html', 'js', 'css', 'images', 'testData'], function() {});

gulp.task('default', ['html', 'js', 'css', 'images', 'testData', 'lint', 'open', 'watch']);
