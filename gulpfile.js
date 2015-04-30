var gulp = require("gulp");
var concat = require("gulp-concat");
var wrap = require("gulp-wrap");
var path = require("path");
var sass = require("gulp-ruby-sass");
var connect = require('gulp-connect-php');

var d = {
    main: ['j/_*.js', 'j/main.js'],
    sass: 'c/*.scss'
};

gulp.task('connect', function() {
    connect.server();
});

gulp.task('sass', function() {
    sass('c/main.scss')
        .on('error', function(err) { console.log(err.message); })
        .pipe(gulp.dest('c'));
});


gulp.task("main", function () {
	gulp.src(d.main)
		.pipe(concat("main.js"))
		.pipe(gulp.dest("js/min"));
});

gulp.task("build", [ "main"]);

gulp.task("watch", function () {
	gulp.watch(d.main, [ "main" ]);
	gulp.watch(d.sass, [ "sass" ]);
});

gulp.task("default", ['sass', 'watch', 'connect']);
