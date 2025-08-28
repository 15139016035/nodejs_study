/**
 * 第一版本：搭载一个最基础的框架；但是也不完整；
 *          
 */

class MyPromise {
  //创建私有变量存储成功 的结果
  #result;
  #state = "pending"; //pending fulfilled rejected

  //1.构造函数，接收一个执行器
  constructor(executor) {
    //3.调用执行起，并传入函数，让内部可以存储数据；
    //3.1 bind()作用：锁定函数内部的this指向；永远指向myPromise实例；
    executor(this.#resolve.bind(this), this.#reject.bind(this));
  }


  //2.私有方法：存储数据的函数，供外部使用
  #resolve(value) {
    if (this.#state === "pending") {
      this.#result = value;
      this.#state = "fulfilled";
    }
  }
  #reject(value) {
  
  }

//then方法
  then(onFuilfilled, onRejected) {
    if (this.#state === "fulfilled") {
      onFuilfilled(this.#result);
    }

  }
}
