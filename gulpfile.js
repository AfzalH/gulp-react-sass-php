var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babelify = require('babelify'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    browserify = require('browserify'),
    rename = require("gulp-rename"),
    autoprefix = require('gulp-autoprefixer');

gulp.task('styles', function () {
    gulp.src('src/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefix())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'));
});

gulp.task('buildcss',function(){
    gulp.src('src/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefix())
        .pipe(gulp.dest('css'));
});

gulp.task('buildjs',function(){
    return browserify({entries: ['./src/js/test.jsx'], debug: true})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('all.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('scripts', function () {
    return browserify({entries: ['./src/js/test.jsx'], debug: true})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('all.js'))
        .pipe(gulp.dest('./js'));
});



gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch(['src/js/**/*.js', 'src/js/**/*.jsx'], ['scripts']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);

gulp.task('build', ['buildcss','buildjs']);