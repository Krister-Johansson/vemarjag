var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
var bower = require('gulp-bower');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    fontawesomeDir: './bower_components/font-awesome',
    publicDir: './src/public',
    bowerDir: './bower_components'
}

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('fonts', function () {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('css', function () {
    return gulp.src('./public/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets', config.fontawesomeDir + '/scss'],
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.publicDir + '/stylesheets'));
});

gulp.task('js', function () {
    return gulp.src([
        config.bowerDir + '/jquery/dist/jquery.min.js',
        config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
    ])
        .pipe(uglify('assets.js', {
            compress: false,
            outSourceMap: true,
        }))
        .pipe(gulp.dest(config.publicDir + '/javascripts'));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch(config.publicDir + '/sass/**/*.scss', ['css']);
});

gulp.task('default', ['bower', 'fonts', 'css', 'js']);