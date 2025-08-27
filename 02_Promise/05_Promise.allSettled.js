//定义sum函数,返回的是Promise
function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

//定义可迭代对象，元素都是Promise
let arr =[sum(1,2),sum(3,4),sum(5,6),Promise.reject("我是失败的产物！")];


const res =Promise.allSettled(arr);

res.then(res=>{
    console.log(res);
})


