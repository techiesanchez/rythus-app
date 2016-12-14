var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var jsoncombine = require('gulp-jsoncombine');
var jsonlint = require('gulp-jsonlint');
var cardBundler = require('./lib/card-bundler');
var csslint = require('gulp-csslint');
var image = require('gulp-image');
var jshint = require('gulp-jshint');
var ghPages = require('gulp-gh-pages');


gulp.task('deploy', function() {
    gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('browserify', function() {
    browserify('./lib/main.js')
	.bundle()
	.pipe(source('main.js'))
	.pipe(streamify(uglify()))
	.pipe(rename('bundle.js'))
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream())
});

gulp.task('lint.scripts', function() {
    gulp.src('./lib/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('lint.cards', function() {
    gulp.src('./cards/**/*.json')
	.pipe(jsonlint())
        .pipe(jsonlint.reporter());
});

gulp.task('build.cards', function() {
    gulp.src('./cards/**/*.json')
        .pipe(jsoncombine("cards.json", cardBundler))
	.pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

gulp.task('build.images', function() {
    gulp.src('./contrib/**/*.{png,jpg,jpeg,svg}')
	.pipe(image())
	.pipe(gulp.dest('./dist/img/'));
});

gulp.task('watch.images', function() {
    gulp.watch('./contrib/**/*.{png|jpg|jpeg|gif}', ['build.images']);
});

gulp.task('watch.cards', function() {
    gulp.watch('cards/**/*.json', ['build.cards']);
});


gulp.task('watch', function() {
    gulp.watch('lib/**/*.js', ['browserify']);
    gulp.watch('./*.css', ['styles.build']);
});


gulp.task('browser-sync', function() {
    browserSync.init({
	server: {
	    baseDir: './dist'
	}
    });
});

gulp.task('styles.build', function() {
    gulp.src('./*.css')
	.pipe(csslint({
	    'ids': false
	}))
	.pipe(csslint.formatter())
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream())
});


gulp.task('default', ['lint.scripts', 'browserify', 'watch', 'watch.images', 'watch.cards', 'browser-sync']);
gulp.task('build', ['browserify', 'styles.build', 'lint.cards', 'build.cards', 'build.images']);
