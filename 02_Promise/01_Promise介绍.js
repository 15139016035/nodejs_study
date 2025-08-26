/**
 * js必须要使用回调函数来处理结果，复杂的调用会引出回调地狱
 * 
 * 引出我们的Promise；
 *  
 */




/**
 * 
 * 
 * 案例一：
 *      创建了一个立刻成功的Promise；也可以说是立即完成的Promise，完成的结果是成功，状态对应fulfilled；
 *      为什么说立刻完成，因为传递的是一个同步的回调函数，Promise的创建就是回调函数的执行，这个函数的执行本来是为了启动异步操作；
 *      但是我们在函数中没有任何异步操作，而是直接存储数据，状态直接确定为Fulfilled；函数调用结束，也就等同于Promise创建完成；
 *      Promise直接就是成功的状态并且又了存储的数据，所以说是立刻完成的；
 * 
 */


const promise1 =new Promise((resolve,reject)=>{
    resolve("hello ,world!");
})

//上面的代码等价于：

const promise2 =Promise.resolve("hello world!!");


/**
 * 案例二：一个立即失败的Promise ； 也可以说是一个立即完成的Promise，只不过完成的结果是失败，状态为Rejected；
 */

const promise3 = new Promise((resolve,reject)=>{
    reject("error worlf!");
})

const promise4 = Promise.reject("error worlf!!");




/**
 * 案例三：
 * 
 * 创建一个未来某一时刻完成的Promise，但是完成的结果不确定，可能是成功fulfilled，也可能是失败Rejected； （本案例中一定是成功fulfilled）
 *      为什么说是创建一个未来某一时刻完成的Promise，Promise的创建会立即执行我们传入的函数，函数执行完成就代表Promise的创建完成；
 *      我们的传入的函数本意是为了启动一个异步操作，例如本案例中，我们在函数中利用setTimeOut模拟了，异步的操作，这个异步的操作耗时2秒；
 *      在本案例中我们的函数执行完成，创建的promise还是Pending状态，因为resolve或者reject的调用是在异步结束后；
 *      未来的某一时刻异步结束后，本案例中是未来的2秒，会调用resolve()并存入数据，当resolve调用的时候在胡哥promise才算是完成；
 *      所以说创建了一个未来某一时刻完成的Promise；
 * 
 * 1. 需要给Promise中传递一个立即执行回调函数这个函数的作用是启动我们的异步操作；     
 *         
 * 
 * 2. 异步请求结束后，拿到了异步请求的结果，存储进Promise中；
 * 
 */

const promise = new Promise((resolve,reject)=>{
    //1.1 生命一个变量 用于接收异步请求的结果
    let data;
    //1.2使用setTimeout模拟异步操作,这个请求2秒后,获得结果并且把结果赋值给data；
    setTimeout(()=>{
        data = "hello world!";

    //2.1 模拟成功,存入成功的数据，让状态确定为Fulfilled；（也代表着Promise的数据存储会在未来的某一时刻存入数据，这个时刻就是异步调用的返回）
    resolve(data);
    },2000);

});

//3.获得promise的第一时间打印，这是一个空容器，因为它的数据会在未来某一时刻到来；
console.log(promise)


//4.取数据 使用.then，传入回调函数，函数中是我们处理数据的逻辑，未来的某一时刻数据到达，会调用这个函数处理数据；
promise.then(data=>{
    //成功的回调函数的处理逻辑
  console.log(data);
},err=>{
    //失败的回调函数的处理逻辑
    console.log(err);
})






