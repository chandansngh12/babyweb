// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

var concat = require('gulp-concat');
gulp.task('JqScripts', function() {
  gulp.src(['./js/jquery/jquery.js','./js/jquery/*.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./build/jqueryScripts/'));
});

var concat = require('gulp-concat');
gulp.task('AngularScripts', function() {
  gulp.src(['./js/angular/angular.js','./js/angular/*.js'])
    .pipe(concat('AngularScript.js'))
    .pipe(gulp.dest('./build/AngularScripts/'));
});

var concat = require('gulp-concat');
gulp.task('controllerScripts', function() {
  gulp.src(['./js/controller/indexController.js','./js/controller/*.js'])
    .pipe(concat('controllerScript.js'))
    .pipe(gulp.dest('./build/controllerScripts/'));
});


gulp.task('default', ['JqScripts','AngularScripts','controllerScripts'], function() {
});

// watch for JS changes
  gulp.watch('./js/jquery/*.js', function() {
    gulp.run('jshint', 'JqScripts');
      });

    gulp.watch('./js/angular/*.js', function() {
      gulp.run('jshint', 'AngularScripts');
    });

      gulp.watch('./js/controller/*.js', function() {
        gulp.run('jshint', 'controllerScripts');

        });
