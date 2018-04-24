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
