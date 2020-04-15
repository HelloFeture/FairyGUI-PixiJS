'use strict';
const gulp = require("gulp");
const minify = require('gulp-minify');
const inject = require("gulp-inject-string");
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const merge2 = require("merge2");
const fs = require("fs");

class Reporter {
    error (error, ts)  {
        console.error(error.message);
        process.exit(1);
    }

    finish (){
        console.info("[ok] typescript compile finish");
    }
}
const reporter = new Reporter();

function version() {
    let data = fs.readFileSync("package.json");
    let ver =  JSON.parse(data).version;
    fs.writeFileSync("src/Version.ts", `namespace fgui{ export const version = "${ver}"; }`);
}

function build() {
    
    version();

    let ts = tsProject.src().pipe(tsProject(reporter));
    let tds = ts.dts.pipe(gulp.dest('./bin'));

    let js = ts.js.pipe(inject.replace('var fgui;', ''))
    .pipe(inject.prepend('window.fgui = {};\nwindow.fairygui = window.fgui;\n'))
    .pipe(inject.replace('var __extends =', 'window.__extends ='))
    .pipe(minify({ ext: { min: ".min.js" } }))
    .pipe(gulp.dest('./bin'));

    return merge2(tds, js);
}

function copy() {
    let lib = gulp.src('bin/**/*').pipe(gulp.dest('../demo/libs/fairygui/'));
    let dist = gulp.src('bin/**/*').pipe(gulp.dest('../demo/dist/js/fairygui/'));
    return merge2(lib, dist);
    //.pipe(gulp.dest('../demo/libs/fairygui/'));
}


exports.default = build;
exports.build = build;
exports.copy = gulp.series(build, copy);
