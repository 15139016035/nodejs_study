/**
 * window 是浏览器的宿主对象，node中没有
 * global 时nodejs环境中的全局对象；
 * 无论是window还是 global 都不是ES6中规定的标准名，window时浏览器自己起的一个名，global时nodejs自己起的名字；
 * ES规范的标准名字时 ：globalThis；
 *      此时：在nodejs中访问globalThis就是global， 在浏览器中访问globalThis就是window
 */


console.log(global);
console.log(globalThis);