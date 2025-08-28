/**
 * 第五个版本迭代：
 *    Promise可以实现链式调用，并且返回的都是一个新的Promise；
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
  #callback = [];

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
    //状态已经是fulfiiled，可以放入到微任务队列了；
    this.#callback.length > 0 &&
      queueMicrotask(() => {
        this.#callback.forEach((fun) => {
          fun();
        });
      });
  }
  #reject(value) {}

  //then方法
  then(onFuilfilled, onRejected) {
    /**
     * 返回一个新的Promise，并且注入数据,回调函数的返回值会成为新的Promise的数据
     */
    return new MyPromise((resolve,reject) => {
      //如果是等待状态，暂存回调；
      if (this.#state === state.PENDING) {
        //存储成一个包装过的；
        this.#callback.push(() => {
          resolve(onFuilfilled(this.#reject));
        });
      }

      //如果状态是成功，才执行成功的回调
      if (this.#state === state.FULFILLED) {
        //状态已经是fulfiiled，可以放入到微任务队列了；
        queueMicrotask(() => {
          resolve(onFuilfilled(this.#result));
        });
      }
    });
  }
}

//测试功能可用性
