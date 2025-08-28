

//引入 01模块
const m1 =require("./01_commonjs01");

//引入 核心模块，Nodejs自带的，直接写模块名即可,两种写法如下，一样的效果
const path1 =require("path")
const path2 =require("node:path")

console.log(m1);
console.log(m1.a);