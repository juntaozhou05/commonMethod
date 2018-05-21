//异步方法1：回调函数
function fn(a, b, callback) {
  let c = a + b;
  if (callback) {
    callback(c);
  }
}
fn(1, 2, num => {
  console.log(num);
});

//异步方法2：事件监听
//异步方法3：观察者模式
//异步方法4：promise
let p = new Promise((resolve, reject) => {
  console.log("a");
  resolve("b");
  console.log("c");
});
p.then(val => {
  console.log(val);
});

//异步方法5：async
function asyncFn() {
  return new Promise(resolev => {
    console.log("aa");
    setTimeout(() => {
      resolev("bb");
    }, 2000);
  });
}
async function runFn() {
  console.log("cc");
  let value = await asyncFn();
  console.log("dd");
  return value;
}
runFn().then(val => {
  console.log(val);
});

//函数节流
function throttle(fn, delay) {
  delay = delay || 50;
  let statTime = 0;
  return function() {
    statTime === 0 && fn.apply(arguments);
    let currentTime = new Date();
    if ((currentTime = statTime > delay)) {
      fn.apply(arguments);
      statTime = currentTime;
    }
  };
}

let throttleFn = throttle(fn);
throttleFn();
throttleFn();
throttleFn();
throttleFn(); //只会执行一次

//防抖
function debounce(fn, delay) {
  delay = delay || 50;
  let timer = null;
  return function() {
    let self = this;
    clearTimeout(timer);
    timer = setTimeout(fn.bind(self, arguments), delay);
  };
}
