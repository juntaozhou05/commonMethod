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
