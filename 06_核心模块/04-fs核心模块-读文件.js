/**
 * fs 核心模块：
 *      - 功能： 该模块提供的功能就是文件操作，即I/O操作；
 */

/*
引入核心模块 fs 并且也要引入path；

   因为读写磁盘文件，一定离不开路径
 如果我们通过相对路径去读写文件，相对路径是基于我们的工作目录的相对路径；
 而我们在path的学习中知道通过不同方式的调用，工作路径是变化的；
*/
const fs = require("fs");
const fsPrmoise = require("fs/promises");
const path = require("path");




/**
 * 1.readFileSync()同步阻塞的方式读取文件的方法;
 *   读取到的数据会以Buffer（缓冲区）对象的形式返回；
 */
const buf = fs.readFileSync(path.resolve(__dirname, "./99-hello.text"));
console.log("缓冲区数据:", buf);
console.log("toString:", buf.toString());










/**
 * 2.fs.readFile(),异步的读取方式，需要传入一个回调函数作为参数，因为是异步的；
 *      回调函数能够接收两个参数，
 *          第一个error ：错误信息，
 *          第二个buf ：缓冲区
 */
//2.1 普通版本的异步调用
fs.readFile(path.resolve(__dirname, "./99-hello.text"), (err, buf) => {
  if (err) {
    console.log("读取的时候出错了");
  } else {
    console.log("普通的异步调动方式",buf.toString());
  }
});
//2.2 Promise版本的异步调用，需要导入promise版本的fs
fsPrmoise.readFile(path.resolve(__dirname, "./99-hello.text"))
.then(buffer=>{
    console.log("promise的异步方式：",buffer.toString());
})
.catch(err=>{
    console.log("读取的时候出错了");
});

//2.3使用async方式的异步
(async ()=>{
    try{
       const buffer=   await fsPrmoise.readFile(path.resolve(__dirname, "./99-hello.text"));
       console.log("async/await的异步方式：",buffer.toString());
    }catch(e){
        console.log("读取的时候出错了");
    }
})()

