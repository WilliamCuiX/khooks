import gulp from 'gulp';
import babel from 'gulp-babel';
import ts from 'gulp-typescript';
import { deleteAsync } from 'del';

gulp.task('clean', async function () {
  await deleteAsync('lib/**');
  await deleteAsync('es/**');
  await deleteAsync('dist/**');
});

gulp.task('cjs', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'CommonJS',
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: './.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

gulp.task('es', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: './.babelrc',
      }),
    )
    .pipe(gulp.dest('es/'));
});

gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

export default gulp.series('clean', 'cjs', 'es', 'declaration');
