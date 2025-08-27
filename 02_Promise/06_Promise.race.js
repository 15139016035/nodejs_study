//定义sum函数,返回的是Promise
function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

//定义可迭代对象，元素都是Promise
let arr =[sum(1,2),sum(3,4),sum(5,6),Promise.resolve("我是一个立即成功的Promise，所以肯定我最快！")];


const res =Promise.race(arr);

res.then(res=>{
    console.log(res);
})


