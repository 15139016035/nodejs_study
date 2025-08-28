/**
 * 第二个版本迭代：
 *         第一个版本中： executor中是一个异步操作的话 then就会失效；（通过#callback 私有属性来解决）
 *。        第一个版本中： 状态使用的字面量 (当前版本使用枚举来表示)
 *
 *
 *
 */

//枚举
const state = Object.freeze({
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
});

//定义类
class MyPromise {
  //0.创建私有变量
  #result; //结果
  #state = state.PENDING; //pending fulfilled rejected。
  #callback;

  //1.构造函数，接收一个执行器
  constructor(executor) {
    //3.调用执行起，并传入函数，让内部可以存储数据；
    //3.1 bind()作用：锁定函数内部的this指向；永远指向myPromise实例；
    executor(this.#resolve.bind(this), this.#reject.bind(this));
  }

  //2.私有方法：存储数据的函数，供外部使用
  #resolve(value) {
    if (this.#state !== state.PENDING) return;
    this.#result = value;
    this.#state = state.FULFILLED;
    this.#callback && this.#callback(this.#result);
  }
  #reject(value) {}

  //then方法
  then(onFuilfilled, onRejected) {
    //如果是等待状态，暂存回调；
    if (this.#state === state.PENDING) {
      this.#callback = onFuilfilled;
    }

    //如果状态是成功，才执行成功的回调
    if (this.#state === state.FULFILLED) {
      onFuilfilled(this.#result);
    }
  }
}

//测试功能可用性

new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("hello");
  }, 3000);
}).then((res) => {
  console.log(res);
});
