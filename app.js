/**
 * 入口文件
 */

import a from "./module/a.js"
import b from "./module/b.js"
import c from "./module/c.js"

a();

b();

console.log(c);

document.getElementById("btn").onclick = c;

console.log("app.js")

