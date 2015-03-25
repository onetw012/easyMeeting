var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	connect = require('gulp-connect');

gulp.task('sass', function() {
	return sass('assets/')
	.on('error', function (err) {
		console.log(err.message);
	})
	.pipe(gulp.dest('public/css'))
	.pipe(connect.reload());
});

//gulp.task('dev-build', function () {
//	gulp.src('**/*.js')
//	.pipe(connect.reload());
//});

/*gulp.task('connect', function () {
	connect.server({
		port: 4000,
		livereload: true,
		root: './public'
	});
});
*/
gulp.task('watch', function () {
	gulp.watch('assets/*.scss', ['sass']);
	//gulp.watch('**/*.js', ['dev-build']);
});


gulp.task ('default', [/*'connect',*/ 'watch']);
