/**
 * 
*         
● 当：then(onFulfilled, onRejected) 或 .catch(onRejected) 被调用时，它会立即返回一个新的、处于 pending 状态的 Promise。，这是实现链式调用的基础。
  ○ 这个新的 Promise 初始状态一定是Pending但是 最终状态（fulfilled 或 rejected）取决于 onFulfilled 或 onRejected 这两个回调函数的执行情况

 *
 */
const promise1 = new Promise(()=>{console.log("异步任务的启动")});

/**
 *   情况一：当then/catch中的回调函数的调用并且没有任何返回值，也就是没有return语句，实际上就是会把Promise的状态确定为Fulfilled，并且存储的值为undefined
 */
const prmoise2 =promise1.then(res=>{});
setTimeout(()=>{console.log(promise2)},2000);


/**
 *   情况二：then/catch中的回调函数成功的执行了，并且返回了一个值,新返回的Promise会被确定为Fulfilled状态，并且存储的值就是回调函数返回的值；
 */
const prmoise3 =promise1.then(res=>{return "hello world!!!"});
setTimeout(()=>{console.log(prmoise3)},2000);

/**
 * 情况三：
 */
const prmoise4 =promise1.then(res=>{
    //会等待这个Promise的执行完成,确定了结果，这个结果会更新个promise1的链条；
   return new Promise(()=>{setTimeout(()=>{},2000)})
});
setTimeout(()=>{console.log(prprmoise4omise2)},2000);





/**
 *  这个案例想解决的疑问是： 
 *    - 我明明发现then的执行我哪怕什么都不返回，都会返回一个新的Promse并且是fulfilled状态的；（这是我看到的）
 *    - 但是应该是返回一个新的Pedning状态的Promise，通过这个案例我们来解决这个疑问：
 * 
 *  在 Promise中 ： .then(), .catch(), 和 .finally() 都会立即返回一个新的 pending 状态的 Promise，这是实现链式调用的基础。
 *      我们通过案例二的代码详细解释下这个过程，在案例二中以then举例子；
 *      let p2 =p1.then(res=>{}) 
 *          - 这行代码的执行完的一瞬间，就会立即返回一个状态为Pending全新的Promise即p2；
 *          - 同时把回调函数A 放到微任务队列中；计划在p1执行完成后执行回调函数A；
 *          - 关键点就是 这行代码执行完后，p2已经产生，但是回调函数A还没有被执行，因为p1可能是未完成，即使p1完成了，回调A也可能是待执行，并没有执行；
 *            而只有回调A被执行后，才能确定p2的状态是fulfilled还是rejected；
 *          - 至于我疑问中为啥看到的是一个新的fulfill的Promise，是因为这个过程太快了；
 *      
 * 案例二：
 */

let p1 = new Promise(()=>{ console.log("异步启动")});
let p2 =p1.then(res=>{ /*回调函数A*/ });