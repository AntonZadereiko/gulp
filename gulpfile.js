import gulp from "gulp";
import { path } from "./gulp/config/path.js";


import  { copy } from "./gulp/tasks/copy.js"
gulp.task('default', copy);
global.app = {
    path: path,
    gulp: gulp
}