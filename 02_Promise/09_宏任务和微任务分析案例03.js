
/**
 * 
● 案例三：执行流程分析
  ○ 第一个宏任务创建并执行，整个js代码
  ○ Promise.resolve() 的执行就确定了Promise的状态，并且把then的回调函数，放到微任务队列中
  ○ 执行到queueMicrotask(),是往微任务队列添加任务的，将回调函数放到微任务中
  ○ 执行完毕，检查微任务队列：
  ○ 取出第一个微任务，是then的回调函数，里面执行了setTimeout函数，让运行时环境0秒后将回调函数放到宏任务队列
  ○ 取出第二个微任务， 打印2；微任务队列清空
  ○ 执行下一个宏任务：setTimeout的回调函数，打印1
 */

Promise.resolve().then(()=>{
    setTimeout(()=>{
        console.log(1)
    })
})


queueMicrotask(()=>{
    console.log(2)
})