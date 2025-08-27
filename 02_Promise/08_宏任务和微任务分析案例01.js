
/**
● 案例二：分析流程
● 先创建第一个宏任务，整个js文件代码，执行到setTimeout，告诉运行时环境，0秒后将回调函数放到宏任务队列
● 遇到console.log(222); 直接打印222，因为是同步代码
● 遇到new Promise，再创建的过程中立即执行传入的回调函数，执行函数时候遇到setTimeout，运行时环境1秒后将这个放到宏任务中；查看微任务队列没有任务；
● 下一个循环开始： 拿出第一个宏任务打印111；
● (加入已经过了1秒了)取出宏任务，执行回调打印444，执行到resolve()时确定了Promise的状态，将then的回调加入到了微任务；
● 宏任务执行完成，开始检查问任务队列，执行微任务打印333
 */

setTimeout(() => {
  console.log(111);
});


console.log(222);
new Promise((resolve) => {
  setTimeout(() => {
    console.log(444);
    resolve();
  },1000);
}).then((res) => {
  console.log(333);
});

