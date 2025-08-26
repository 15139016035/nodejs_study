
/**
 * 本节 主题：必须要使用回调函数来处理结果，复杂的调用会引出回调地狱；（引出问题，从而解决问题）
 * 解决回调地狱：Promise
 */




/**
 * 使用setTimeout模拟一个网络请求
 */


function sum (a,b,callback){
    setTimeout(()=>{
        callback(a+b);
    },1000);
}



/**
 * 使用sum函数进行N次调用,形成回调函数；
 */


sum(1,2,result=>{
    sum(result,3,result=>{
        sum(result,4,result=>{
            sum(result,5,result=>{
                sum(result,6,result=>{
                    sum(result,7,result=>{
                        console.log("1+2+3+4+5+6+7 等于：",result);
                    })
                })
            })
        })
    })

}) 