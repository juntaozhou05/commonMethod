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
console.log(b.name); //A

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
console.log(d.name); //C

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
console.log(desk.name); //box
console.log(desk.age); //66

//原型式继承
function obj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

let box = {
  name: "Lee",
  age: 88
};
let box1 = obj(box);
console.log(box1.name); //Lee

//寄生组合继承
function object(o) {
  function F() {}
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
