

/*
  先说结论再证明结论：一个js文件就是一个模块，js文件的所有内容都其实写在了这个函数中：
  
0.   这些都是nodejs给我提供的使用的：
1.   注意我们在之前的01案例中已经说明了exports和module.exports的关系
2.   require就是我们想要导入别的模块使用的；
3.   __filename 和 __dirname 在下面的证明中会打印是什么； 
(function (exports ,require,module ,__filename,__dirname) {
        //当前模块的代码都会包装到这个函数中
})

*/


//1.证明是在函数中： 拿到函数必有的一个参数arguments 函数的参数集合
console.log(arguments);


//2.看一看 __filename是什么：   是我们当前文件的绝对路径
//打印结果：/Users/hhgz/my/code/js/nodejs_study/04_模块化/02_commonjs_底层逻辑.js
console.log(__filename);



//3.看一看 __dirname是什么：   是我们文件所在目录的绝对路径；
//打印结果：/Users/hhgz/my/code/js/nodejs_study/04_模块化
console.log(__dirname);