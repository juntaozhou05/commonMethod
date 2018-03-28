//继承方法
//1.原型链继承
function A() {
  this.name = "A";
}
function B() {
  this.age = 1;
}
B.prototype = new A();
let b = new B();
console.log(b.name); //A

//2.构造函数继承
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
