const gulp = require("gulp");
const { series } = require("gulp");

const concat = require("gulp-concat");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const image = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const stripCss = require("gulp-strip-css-comments"); 
// const { pipe } = require("stdout-stream");
// const { contains } = require("jquery");
const reload = browserSync.reload;

function tarefasCSS(cb) {
  gulp
    .src([
      "./node_modules/bootstrap/dist/css/bootstrap.css",
      "./node_modules/@fortawesome/fontawesome-free/css/fontawesome.css",
      "./vendor/owl/css/owl.css",
      "./vendor/jquery-ui/jquery-ui.css",
      // "./src/css/style.css",
    ])
    .pipe(stripCss()) // remove comentários do css
    .pipe(concat("styles.css")) // mescla arquivos
    .pipe(cssmin()) // minifica css
    .pipe(rename({ suffix: ".min" })) // libs.min.css
    .pipe(gulp.dest("./dist/css")); // cria arquivo em novo diretório
  cb();
}

function tarefasSASS(cb) {
  gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass()) // transforma o sass para css
    .pipe(gulp.dest("./dist/css"));

  cb();
}

function tarefasJS(callback) {
  gulp
    .src([
      "./node_modules/jquery/dist/jquery.js",
      "./node_modules/bootstrap/dist/js/bootstrap.js",
      "./vendor/owl/js/owl.js",
      "./vendor/jquery-mask/jquery.mask.min.js",
      // "./vendor/jquery-ui/jquery-ui.js",
      // "./vendor/jequery/jquery-3.6.1.js",
      "./src/js/custom.js",
    ])
    .pipe(
      babel({
        comments: false,
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" })) //libs.min.js
    .pipe(gulp.dest("./dist/js"));
  callback();
}

function tarefasImagem(callback) {
  return gulp
    .src("./src/images/*")
    .pipe(
      image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true,
      })
    )
    .pipe(gulp.dest("./dist/images"));
}

gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
  gulp.watch("./src/**/*").on("change", process); // repete o processo quando alterar algo em src
  gulp.watch("./dist/**/*").on("change", reload);
});

// POP
function tarefasHTML(callback) {
  gulp
    .src("./src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));

  return callback();
}

function end(cb) {
  console.log("tarefas concluídas");
  return cb();
}

const process = series(tarefasHTML, tarefasJS, tarefasCSS, tarefasSASS, end);

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
exports.images = tarefasImagem;
exports.sass = tarefasSASS;

exports.default = process;
