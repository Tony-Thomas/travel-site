var gulp = require('gulp'), 
watch = require('gulp-watch'),
browserSync = require('browser-Sync');

gulp.task('default', function() {
	console.log("Hooray - You created a Gulp task!");
});

gulp.task('html', function() {
	console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(browserSync.stream());
});
