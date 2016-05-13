var gulp = require('gulp');
var webpack = require('webpack');
var $ = require('gulp-load-plugins')();
var uglify = require('gulp-uglify')

var piklaneSeller = {
  app: require('./bower.json').appPath || 'app',
  dist: 'dist'
};

var paths = {
	scripts: [piklaneSeller.app + '/js/**/*.js'],
	styles: [piklaneSeller.app + '/style/**/*.css'],
	views: {
    	main: piklaneSeller.app + '/index.html'
    }  
}

gulp.task('bower', function () {
  return gulp.src(paths.views.main)
    .pipe(wiredep({
      directory: piklaneSeller.app + '/bower_components',
      ignorePath: '..'
    }))
  .pipe(gulp.dest(piklaneSeller.app + '/'));
});

gulp.task('webpack',function(){

})

gulp.task('compress',function(){
	return gulp.src('app/client.min.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
})