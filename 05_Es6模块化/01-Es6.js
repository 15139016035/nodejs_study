
/**
 * 我们已经配置了 package.json 开启了ES6模块化；此时已经没有了module对象了，没有外面函数的包裹了，没有arguments了；
 */




//因为导出的时候是命名式， 要通过同样的名字接收，但是可以起别名；
import {name ,age as ages} from './02-Es6-命名式的导出.js';


//导入默认的导出，可以随便起名字，还不用{}了；
import helloname from './03-Es6-默认导出方式.js';

