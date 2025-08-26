
/**
 * 本节 主题：主要为了引出异步的问题：回调地狱；
 */




/**
 * 使用setTimeout模拟一个网络请求
 */


function sum (a,b,cd){
    setTimeout(()=>{
        cd(a+b);
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