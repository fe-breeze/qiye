var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var imagemin = require('gulp-imagemin');
var del = require('del');
var babel = require('gulp-babel');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat'); //- 多个文件合并为一个；
var rev = require('gulp-rev'); //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector'); //- 路径替换

gulp.task('html', function() {
  var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
  };
  gulp.src('./*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  var plugins = [
    autoprefixer({ browsers: ['last 2 version', 'ie>= 10'] }),
  ];
  return gulp.src('./css/*.css')
    .pipe(postcss(plugins))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', () => {
  gulp.src('./js/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
gulp.task('img', () =>
  gulp.src('./img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
);
gulp.task('copyfont', function() {
  return gulp.src('./fonts/*')
    .pipe(gulp.dest('dist/fonts'))
});
gulp.task('clean', function(cb) {
  del([
    'dist/*'
  ], cb);
});

gulp.task('default', ['clean', 'css', 'js', 'html', 'img', 'copyfont']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务