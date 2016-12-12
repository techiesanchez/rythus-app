var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var port = process.env.PORT || 3001;




gulp.task('browserify', function() {
    var bundleStream = browserify('./lib/cards_rewards.js')
	.bundle()

    bundleStream
	.pipe(source('cards_rewards.js'))
	.pipe(streamify(uglify()))
	.pipe(rename('bundle.js'))
	.pipe(gulp.dest('./'))

});


gulp.task('watch', function() {
    gulp.watch('lib/**/*.js', ['browserify']);
});


gulp.task('browser-sync', function() {
    browserSync.init({
	server: {
	    baseDir: './',
	    port: port
	}
    });
});



gulp.task('default', ['browserify', 'watch', 'browser-sync']);
