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
  return function () {
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
  return function () {
    let self = this;
    clearTimeout(timer);
    timer = setTimeout(fn.bind(self, arguments), delay);
  };
}

//深拷贝1
function deepCopy(old, newObj) {
  var newObj = newObj || {};
  for (var i in old) {
    if (typeof old[i] === "object") {
      //要考虑深复制问题了
      if (old[i].constructor === Array) {
        //这是数组
        newObj[i] = [];
      } else {
        //这是对象
        newObj[i] = {};
      }
      deepCopy(old[i], newObj[i]);
    } else {
      newObj[i] = old[i];
    }
  }
  return newObj;
}
//深拷贝2
//无法复制函数
//原型链没了，对象就是object，所属的类没了。
function deepCopy2(old) {
  return JSON.parse(JSON.stringify(old));
}

//实现event bus（发布订阅模式）
class EventEmeitter {
  constructor() {
    this._events = this._events || new Map();
    this._maxListeners = this._maxListeners || 10;
  }
  emit(type, ...args) {
    let handler;
    handler = this._events.get(type);
    if (args.length > 0) {
      handler.apply(this, args);
    } else {
      handler.call(this);
    }
    return true;
  }
  addListener(type, fn) {
    if (!this._events.get(type)) {
      this._events.set(type, fn);
    }
  }
}
const emitter = new EventEmeitter();
emitter.addListener("arson", man => {
  console.log(`expel:${man}`);
});
emitter.emit("arson", "low-end");