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
