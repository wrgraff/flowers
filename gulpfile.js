var gulp = require('gulp'),
    sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	csso = require('gulp-csso'),
	postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
    browserSync = require('browser-sync').create();

gulp.task('scss', () => {
	return gulp.src('src/scss/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('dist/templates/flover/css/'))
        .pipe(browserSync.stream())
		.pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/templates/flover/css/'));
});

gulp.task('html', () => {
	return gulp.src('src/html/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('js', () => {
	return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/templates/flover/js'));
});

gulp.task('fonts', () => {
	return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/templates/flover/fonts'));
});

gulp.task('img', () => {
	return gulp.src('src/img/**/*{jpg,png,svg}')
		.pipe(imagemin([
			imagemin.svgo({
				plugins: [
					{cleanupIDs: true}
				]
			})
		]))
        .pipe(gulp.dest('dist/templates/flover/img'));
});

gulp.task('del', () => {
	return del('dist');
});

gulp.task('serve', () => {
	browserSync.init({
        server: "dist"
    });

    gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
});

gulp.task('build', gulp.series(
	'del',
	'scss',
	'html',
	'js',
	'img',
	'fonts'
));

gulp.task('start', gulp.series(
	'build',
	'serve'
));

gulp.task('default', gulp.series('serve'));
