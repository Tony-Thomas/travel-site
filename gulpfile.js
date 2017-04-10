var gulp = require('gulp'), 
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprfixer');

gulp.task('default', function() {
	console.log("Hooray - You created a Gulp task!");
});

gulp.task('html', function() {
	console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe([autoprfixer])
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

	watch('./app/index.html', function() {
		gulp.start('html');
	});

	watch('./app/assets/styles/styles.css', function() {
		gulp.start('styles');
	});
});
