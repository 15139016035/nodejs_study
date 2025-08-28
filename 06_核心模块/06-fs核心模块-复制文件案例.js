//导入promise版本的fs核心模块
const fs = require('fs/promises');
const path = require("path");
const { buffer } = require('stream/consumers');


//1. appendFile,想文件中追加内容 不换行；  文件不存在会自动创建文件；
fs.appendFile(path.resolve(__dirname, "./99-hello.text"), ",我是追加的内容")
.then(res=>{
    console.log("appendFile调用成功，内容追加成功!")
})
.catch(error=>{
    console.log("appendFile出错啦");
})


//复制文件的案例 ，先读后写；

fs.readFile(path.resolve(__dirname, "./99-hello.text"))
.then(buffer=>{
    return fs.appendFile(path.resolve(__dirname, "98-复制文件案例的产物.text"),buffer);
})
.then(res=>{
    console.log("文件复制成功啦～～");
})
.catch(errr=>{
    console.log("出错啦～～");
});