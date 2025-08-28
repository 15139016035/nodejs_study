//导入promise版本的fs核心模块
const fs = require('fs/promises');
const path = require("path");


//1. appendFile,想文件中追加内容 不换行；  文件不存在会自动创建文件；
fs.appendFile(path.resolve(__dirname, "./99-hello.text"), ",我是追加的内容")
.then(res=>{
    console.log("appendFile调用成功，内容追加成功!")
})
.catch(error=>{
    console.log("appendFile出错啦");
})

