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