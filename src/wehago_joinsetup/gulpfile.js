"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var cleancss = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("join_setup", function (done) {
  gulp
    .src("scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({ sourcemap: true, outputStyle: "expanded" }).on(
        "error",
        sass.logError
      )
    )
    // .pipe(prefix({browser:["last 2 version", "> 1%", "ie 8", "ie 7"],cascade:false,flexbox:false}))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleancss({ format: "keep-breaks" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("../../../css/svc"));
  done();
});

gulp.task("join_setup:watch", function (done) {
  gulp.watch("scss/**/*.scss", gulp.series("join_setup"));
  done();
});
