const gulp = require("gulp");
const minify = require('gulp-minify');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const merge2 = require("merge2");
const fs = require("fs");
const connect = require('gulp-connect');
const { watch } = require('gulp');

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


function buildPro() {
    let ts = tsProject.src().pipe(tsProject(reporter));
    let js = ts.js.pipe(inject.replace('var fgui;', ''))
    .pipe(inject.prepend('window.fgui = {};\nwindow.fairygui = window.fgui;\n'))
    .pipe(inject.replace('var __extends =', 'window.__extends ='))
    .pipe(minify({ ext: { min: ".min.js" } }))
    .pipe(gulp.dest('./bin'));

    return js;
}

function buildDev() {
    let ts = tsProject.src().pipe(tsProject(reporter));
    let js = ts.js.pipe(gulp.dest('./dist/js'));

    return js;
}


function server(cb) {
    let c = connect.server({
        root : "dist",
        port : 8080,
        livereload : true,
    });

    cb();
}

function reload() {
    console.log("hot update");
    connect.reload();
}

function watchTask(cb) {
    const srcWatcher = watch(["src/**/*.ts"]);
    srcWatcher.on('change', async function (path, stats) {
        buildDev();
    });

    srcWatcher.on('add', async function (path, stats) {
        buildDev();
    });

    srcWatcher.on('unlink', async function (path, stats) {
        buildDev();
    });

    const distWatcher = watch(["dist/**/*"]);
    distWatcher.on('change', async function (path, stats) {
        reload();
    });

    distWatcher.on('add', async function (path, stats) {
        reload();
    });

    distWatcher.on('unlink', async function (path, stats) {
        reload();
    });

    cb();
}


exports.build = buildPro;
exports.serve =  gulp.series(buildDev, watchTask,  server);