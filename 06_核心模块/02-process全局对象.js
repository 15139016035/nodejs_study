/**
 * process:
 *  这个对象是什么？ ：代表的当前的node进程；
 *  作用 ： 通过该对象可以获取进程的信息（node版本，node状态等），也可以对node做各种操作；
 *  如果使用？
 *      -- 如何获取：process是一个全局变量，可以直接使用
 *      -- 有哪些属性和方法： （有很多，我们挑两个举例）
 *             process.exit(); 结束当前进程；
 *             process.nextTick(callback) 
 *          
 *      
 */



/**
 * 1.process.nextTick(callback)这个函数干啥的？
 *       - 我们使用queueMicrotask() 来对比结果，进行讲解， queueMicrotask()是向微任务队列中加入一个任务，任务就是它的回调函数；
 *       - 下面的代码打印结果： 3 2 1；
 *  问题来了： 为什么2 会在1前面？ 
 *  解释： 我们现在学习了微任务队列，和宏任务队列， 此时nextTick()的出现引出了一个新的队列 tick队列；它的优先级比微任务队列还高；
 *         执行逻辑的梳理： （忽略，process.exit(0)）
 *              0. 整个代码是第一个宏任务，开始同步执行
 *              1. 遇到queueMicrotask() 将它的回调函数加入到微任务队列；
 *              2. 遇到process.nextTick(),将它的回调函数放到tick队列中；
 *              3. 遇到console.log(3); 直接打印
 *              4. 当前宏任务执行完毕，先检查tick队列 取出任务执行 打印2；
 *              5. 然后在检查微任务队列，取出任务执行打印1；
 *  但是这个process.nextTick(）很少使用；
 */
queueMicrotask(()=>{
    console.log(1)
})


process.nextTick(()=>{
    console.log(2);
})

console.log(3);



//2. 结束当前进程 ,可以转入一个数字，这个数字其实代表我们的状态码，我可以根据这个数字判断 是因为什么原因结束的； 这个数字的含义我们自己定义即可；
// process.exit(0);

