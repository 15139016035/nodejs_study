
let a =10;
let b =20;
console.log("我是01模块");

//通过exports对象向外暴露，exports就是require的返回值； rexports默认是一个空对象{}
//  操作exports有两种方式

console.log(exports === module.exports);

/**
 * 但是 exports 和 module.exports 是有区别的； 你别看上面打印的是true；只是说明他俩指向同一块内存地址；
 *    -- 为什么他俩指向同一块内存地址：因为js文件就是一个模块，每个模块的开始 nodejs就会执行这么一行代码：let exports = module.exports;
 *      
 *    -- 好，知道了前置条件，接下来我们来看看他们的区别： 
 *      require 返回的一定是 module.exports; 而exports只是一个变量；
 *      看出来他们的区别了吗？
 *      如果您 执行这段代码： exports.a =10; 这是没问题的，相当于给 module.exports 添加了一个变量；会被暴露出去；
 *      如果您 执行这段代码： exports= {a:10} ;这就有问题了， 相当于你给exports重新赋值指向了另一块内存地址； 而module.exoprts并没有任何操作，所以暴露出去的还是一个{空对象};
 * 
 * 
 * 
 */

//向外暴露
module.exports ={
    a,
    b
}


