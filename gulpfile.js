var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
//var uglify = require('gulp-uglify');
//var streamify = require('gulp-streamify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var jsoncombine = require('gulp-jsoncombine');
var jsonlint = require('gulp-jsonlint');
var cardBundler = require('./lib/card-bundler');
var image = require('gulp-image');
var ghPages = require('gulp-gh-pages');
//var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var csslint = require('gulp-csslint');
var concatCss = require('gulp-concat-css');


var paths = {
    scripts: ['./**/*.js', '!./dist/**/*.js', '!./node_modules/**/*.js'],
};

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('build.scripts', function() {
    browserify('./index.js', {debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
	.bundle()
	.pipe(source('index.js'))
	//.pipe(streamify(uglify())) 
        // see https://stackoverflow.com/a/28088306/1004931 when u want to add minifi+sourcemaps
	.pipe(rename('bundle.js'))
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream());
});

gulp.task('lint.styles', function() {
    return gulp.src('styles/**/*.css')
               .pipe(csslint({ 'ids': false }))
               .pipe(csslint.formatter());
});

gulp.task('lint.scripts', function() {
    return gulp.src(paths.scripts)
               .pipe(eslint())
               .pipe(eslint.format())
               .pipe(eslint.failAfterError());
});


gulp.task('lint.cards', function() {
    gulp.src('./cards/**/*.json')
	.pipe(jsonlint())
        .pipe(jsonlint.reporter());
});

gulp.task('build.cards', function() {
    gulp.src('./cards/**/*.json')
        .pipe(jsoncombine('cards.json', cardBundler))
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


gulp.task('watch.scripts', function() {
    gulp.watch(paths.scripts, ['lint.scripts', 'build.scripts']);
});

gulp.task('watch.styles', function() {
    gulp.watch('./styles/**/*.css', ['lint.styles', 'build.styles']);
});


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('build.styles', function() {
    return gulp.src('./styles/**/*.css')
               .pipe(concatCss('bundle.css'))               
               .pipe(gulp.dest('./dist'))
               .pipe(browserSync.stream());
});


gulp.task('build.domain', function() {
    gulp.src('./CNAME')
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', [
    'lint.scripts',
    'build.scripts', 
    'watch.styles',
    'watch.images',
    'watch.cards',
    'watch.scripts',
    'browser-sync'
]);

gulp.task('build', [
    'build.scripts',
    'build.styles',
    'lint.cards',
    'build.cards', 
    'build.images', 
    'build.domain'
]);
