/**
 *  本节：来解决回调地狱
 */

/**
 *
 * 回调地狱的代码
 */

//sum函数的定义
function sum(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

//多次调用sum形成回调地狱
sum(1, 2, (result) => {
  sum(result, 3, (result) => {
    sum(result, 4, (result) => {
      sum(result, 5, (result) => {
        sum(result, 6, (result) => {
          sum(result, 7, (result) => {
            console.log("1+2+3+4+5+6+7 等于：", result);
          });
        });
      });
    });
  });
});

/**
 * 使用Promise重构上面的代码
 */

//使用promise，定义sum
function sum_promise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

//多次调用promise版本的sum；

/**
 * 脑血栓写法：等于是写了一个promise版本的回调地狱；
 * 
sum_promise(1, 2).then((res) => {
  sum_promise(res, 3).then((res) => {
    sum_promise(res, 4).then((res) => {
      sum_promise(res, 5).then((res) => {
        sum_promise(res, 6).then((res) => {
            console.log("1+2+3+4+5+6 等于：", result);
        });
      });
    });
  });
});
 */





/**
 * 案例一：： 这个案例我们使用了promise，的链式调用去解决回调地狱的问题；并且用finally进行收尾的逻辑，catch来捕获整个链条的异常； 
 */
sum_promise(1, 2)
  .then((res) => sum_promise(res,3))
  .then((res) => sum_promise(res,4))
  .then((res) => sum_promise(res,5))
  .then((res) => sum_promise(res,6))
  .then((res) => sum_promise(res,7))
  .then((res)=>console.log("1+2+3+4+5+6+7 等于：", res))
  .finally(()=>console.log("收个尾"))
  .catch(error=> console.log("我来给整个调用链条，捕获异常！"))




