/**
 * 类型判断
 */
function getType(target) {
    //先处理最特殊的Null
    if(target === null) {
      return 'null';
    }
    //判断是不是基础类型
    const typeOfT = typeof target
    if(typeOfT !== 'object') {
      return typeOfT;
    }
    //肯定是引用类型了
    const template = {
      "[object Object]": "object",
      "[object Array]" : "array",
      "[object Function]": "function",
      // 一些包装类型
      "[object String]": "object - string",
      "[object Number]": "object - number",
      "[object Boolean]": "object - boolean"
    };
    const typeStr = Object.prototype.toString.call(target);
    return template[typeStr];
  }