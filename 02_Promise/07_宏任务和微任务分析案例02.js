
/**
 * ● 案例一：执行顺序分析
   ○ 整个js文件就是第一个宏任务，宏任务的执行过程中：
  ○ 先遇到settimeout ，告诉运行环境0秒后，将回调函数添加到宏任务队列
  ○ 继续往下执行遇到同步代码 直接执行 打印222
  ○ 遇到代码Promise.resolve("hello")这段代码的执行就确认了Promise的状态，状态一旦确认，就会把then中的回调函数放到微任务队列
  ○ 宏任务执行完成，将微任务队列的任务拿出来执行，打印333
  ○ 微任务队列被清空，执行下一个循环，取出宏任务队列的第一个任务执行 打印111
 */
setTimeout(()=>{
 console.log(111);
})



console.log(222);


Promise.resolve("hello").then(res=>{console.log(333)});

