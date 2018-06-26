//继承方法
//1.原型链继承
// 原型模式的每个实例都是访问同一属性同一函数，，函数不用重新创建
function A() {
  this.name = "A";
}
function B() {
  this.age = 1;
}
B.prototype = new A();
let b = new B();
//console.log(b.name); //A

function Person() {
  this.x = 1000;
}
Person.prototype.name = "person";

let Tom = new Person();
//2.构造函数继承
// new的过程做了三件事①创建了一个对象；②将this指向这个对象；③返回这个对象；
// 两个实例对象都有一个属性constructor(构造函数)，指向Person；这就是可以通过constructor判断对象类型的原理。
// 存在的问题：构造函数的每个方法都要在实例上重新创建一遍，虽然函数名是一样的，但是不相等的。
function C() {
  this.name = "C";
}
function D() {
  this.age = 2;
  C.call(this);
}
let d = new D();
//console.log(d.name); //C

//3.组合继承
function Box(age) {
  this.name = "box";
  this.age = age;
}
Box.prototype.getName = () => {
  console.log(this.name);
};
function Desk(age) {
  Box.call(this, age);
}

let desk = new Desk("66");
//console.log(desk.name); //box
// console.log(desk.age); //66

//原型式继承
function obj(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

let box = {
  name: "Lee",
  age: 88
};
let box1 = obj(box);
// console.log(box1.name); //Lee

//寄生组合继承
function object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}
function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype); //创建对象
  prototype.constructor = subType; //增强对象
  subType.prototype = prototype; //指定对象
}

//工厂模式
// 工厂函数的优势：避免的大量的重复代码；
// 工厂函数的劣势：其创建的对象不能标志为一种特定的类型，没有解决对象识别的问题，不知道对象的类型。构造函数能很好的解决这个问题。
function person(name, age) {
  let obj = {};
  (obj.name = name), (obj.age = age);
  obj.sayHello = () => {
    console.log("Hello");
  };
  return obj;
}
let obj1 = person("obj1", 11);

//浅拷贝
function copy1(o) {
  const obj = {};
  for (let i in o) {
    obj[i] = o[i];
  }
  return obj;
}
//test
const Obj1 = {
  a: "a",
  b: [1, 2, 3],
  c: { h: { i: 2 } }
};
let newObj = copy1(Obj1);
// console.log(newObj.a);
Obj1.b[0] = 5;
// console.log(newObj.b[0]);

//深拷贝 转字符串
//1.他无法实现对函数 、RegExp等特殊对象的克隆
// 2.会抛弃对象的constructor,所有的构造函数会指向Object
// 3.对象有循环引用,会报错
function copy2(o) {
  return JSON.parse(JSON.stringify(0));
}

//深拷贝
//判断对象类型
const isType = (obj, type) => {
  if (typeof obj !== "object") return false;
  const typeString = Object.prototype.toString.call(obj);
  let flag;
  switch (type) {
    case "Array":
      flag = typeString === "[object Array]";
      break;
    case "Date":
      flag = typeString === "[object Date]";
      break;
    case "RegExp":
      flag = typeString === "[object RegExp]";
      break;
    default:
      flag = false;
  }
  return flag;
};

const clone = parent => {
  // 维护两个储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = parent => {
    if (parent === null) return null;
    if (typeof parent !== "object") return parent;

    let child, proto;

    if (isType(parent, "Array")) {
      // 对数组做特殊处理
      child = [];
    } else if (isType(parent, "RegExp")) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (isType(parent, "Date")) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent);
      // 利用Object.create切断原型链
      child = Object.create(proto);
    }

    // 处理循环引用
    const index = parents.indexOf(parent);

    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index];
    }
    parents.push(parent);
    children.push(child);

    for (let i in parent) {
      // 递归
      child[i] = _clone(parent[i]);
    }

    return child;
  };
  return _clone(parent);
};

//缓存函数
var memoize = function (f) {
  var cache = {};
  return function () {
    var arg_str = JSON.stringify(arguments);
    return (cache[arg_str] = cache[arg_str] || f.apply(f, arguments));
  };
};
var sum = function () {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result = result * arguments[i];
  }
  return result;
};
let memo = memoize(sum);
console.log(memoize(sum)(1, 2, 3));
