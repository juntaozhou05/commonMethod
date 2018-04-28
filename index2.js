//阶乘
function factrol(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factrol(n - 1);
  }
}

//汉罗塔
function han(num, from, helper, to) {
  if (num > 0) {
    han(num - 1, from, to, helper);
    console.log(num + " from " + from + " to " + to);
    han(num - 1, helper, from, to);
  }
}

//驼峰和下划线互转
var s = "fooStyleCss";
s = s.replace(/([A-Z])/g, "-$1").toLowerCase();
console.log(s)

var s1 = "style-sheet-base";
var a = s1.split("-");
var o = a[0];
for (var i = 1; i < a.length; i++) {
  o = o + a[i].slice(0, 1).toUpperCase() + a[i].slice(1);
}
console.log(o)

//实现一个bind方法
Function.prototype.bind = function (context) {
  if (context.toString() !== "object Object" || context.toString() !== "object Window") {
    return false;
  }
  let _this = this;
  let args = [].slice.call(arguments, 1);
  return function () {
    _args = [].slice.call(arguments);
    _this.apply(context, _args.concat(args));
  }
}

//基础柯理化
function curry(fn) {
  if (typeof fn !== "function") {
    return false;
  }
  let args = [].slice.call(arguments, 1);
  return function () {
    let _args = [].slice.call(arguments);
    return fn.apply(this, _args.concat(args));
  }
}

//改进柯理化
// 比如说add这个函数接受两个参数，那么针对柯里化之后的函数，若传入的参数没有到达两个的话，
//就继续调用curry，继续接受参数。若参数到达2个了，就直接调用add函数。
function curry2(fn, args) {
  if (typeof fn !== "function") {
    return false;
  }
  let len = fn.length;
  let args = args || []
  return function () {
    newArgs = args.concat([].slice.call(arguments))
    if (newArgs.length < len) {
      return curry2.call(this, fn, newArgs);
    } else {
      return fn.apply(this.newArgs)
    }
  }
}

//进阶柯理化
// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6
// add(1, 2, 3)(4) = 10
// add(1)(2)(3)(4)(5) = 15
// 当我们返回函数的时候，会调用函数的toString来完成隐式转换，这样输出的就不是函数的字符串形式而是我们定义的toString返回的值。
//这样就既可以保持返回一个函数，又能够得到一个特定的值。
function add() {
  var args = [].slice.call(arguments);
  var fn = function () {
    var newArgs = args.concat([].slice.call(arguments));
    return add.apply(null, newArgs);
  }
  fn.toString = function () {
    return args.reduce(function (a, b) {
      return a + b;
    })
  }
  return fn;
}