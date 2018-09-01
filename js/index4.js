//实现数据劫持监听
function observe(data) {
  if (!data || typeof data !== "object") {
    return;
  }
  Object.keys(data).forEach(key => {
    defineActive(data, key, data[key]);
  });
}
//监听数据变化
function defineActive(data, key, val) {
  observe(val);
  Object.defineProperty(data, key, {
    enumerable: true, //可以被遍历
    configurable: false, //不能被修改
    get() {
      return val;
    },
    set(newVal) {
      console.log(val + "--" + newVal);
      val = newVal;
      dep.notify();
    }
  });
}

//订阅者
function Dep() {
  this.subs = [];
}
Dep.prototype = {
  addSub(val) {
    this.subs.push(val);
  },
  removeSub(val) {
    let index = this.subs.indexOf(val);
    if (index !== -1) {
      this.subs.splice(index, 1);
    }
  },
  notify() {
    this.subs.forEach(item => {
      console.log("update");
    });
  }
};

let data = { name: "name" };
observe(data);
data.name = "newName";

let dep = new Dep();
dep.addSub(1);
