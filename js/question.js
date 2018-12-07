//1
function test(xxx) {
  console.log(xxx);
  var xxx = 123;
  function xxx() {}
  console.log(xxx);
}
test(444);

//2
var a = 1;
function test1() {
  console.log(a);
}
function test2() {
  var a = 2;
  test1();
}
test2();

//3
var fun = function() {
  this.a = "fun";
};
var myfun = function(test) {
  var a = "myfun";
  console.log(this.a);
  console.log(a);
  console.log(test);
};
myfun.call(fun, "test");

//输出1到10000的完美数

//JS函数调用的四种方法
//1.方法调用模式 2.函数调用模式 2.构造器调用模式 3.apply调用模式

//4.如何定义一个变量a，使 a==1 && a == 3 && a == 5 && a == 7 && a == 9这样的式子返回true？

const a = { value: -1 };
a.valueOf = function() {
  return (this.value += 2);
};
console.log(a == 1 && a == 3 && a == 5 && a == 7 && a == 9);
//其实啊，这个主要还是利用js引擎内部的一些机制，宽松相等在做比较时呢，会把较高等级的变量类型转化成原始的number，string，boolean等等，而内部实际上是调用了valueOf方法
