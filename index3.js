//rem布局  根据浏览器大小动态设置fontSize
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);

//判断字符串里每个字符出现的次数
function itmes(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] += 1;
    }
  }
  return obj;
}

//判断ie浏览器版本
function IEVersion() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6; //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge'; //edge
  } else if (isIE11) {
    return 11; //IE11  
  } else {
    return -1; //不是ie浏览器
  }
}

//判断一个数字在数组中出现次数超过数组的一半
function MoreThanHalfNum_Solution(numbers) {
  // write code here
  let obj = {};
  for (let i = 0; i < numbers.length; i++) {
    if (!obj[numbers[i]]) {
      obj[numbers[i]] = 1;
    } else {
      obj[numbers[i]] += 1;
    }
  }
  for (item in obj) {
    if (obj[item] > Math.floor(numbers.length / 2)) {
      return item;
    }
  }
  return 0;
}

// 一群猴子排成一圈，按 1，2，...，n 依次编号。然后从第 1 只开始数，数到第 m 只,把它踢出圈，
//从它后面再开始数，再数到第 m 只，在把它踢出去...，如此不停的进行下去，直到最后只剩下一只猴子为止，
//那只猴子就叫做大王。要求编程模拟此过程，输入 m、n，输出最后那个大王的编号。
function daWang(n, m) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  while (arr.length > 1) {
    for (let j = 0; j < m - 1; j++) {
      arr.push(arr.shift());
    }
    arr.shift();
  }
  return arr[0];
}

// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
function GetLeastNumbers_Solution(input, k) {
  // write code here
  let temp = input.sort((a, b) => {
    return a - b;
  });
  let result = [];
  if (k <= temp.length) {
    for (let i = 0; i < k; i++) {
      result.push(temp[i]);
    }
    return result;
  } else {
    return [];
  }
}

//二分法查找目标
function find(arr, target, low, high) {
  if (low > high) {
    return -1;
  }
  let mid = parseInt((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    high = mid - 1;
    return find(arr, target, low, high);
  } else if (arr[mid] < target) {
    low = mid + 1;
    return find(arr, target, low, high);
  }
}
let arr1 = [1, 2, 3, 4, 5];
find(arr1, 2, 0, arr1.length - 1);

//八皇后问题
var n = 8;
var arr = [];
function queen(index) {
  if (index === n) {
    console.log(arr); //每次完成一种情况，输出数组；
  } else {
    for (var i = 0; i < n; ++i) {
      arr[index] = i; //为第一行的皇后寻找位置，从0开始，直到7
      var flag = true; //这里主要是为判定可攻击性提供一个开关，如果在攻击范围内
      // 则不进入下一列，继续向下寻找，如果找到了合适的位置，则进入下一行
      for (var j = 0; j < index; ++j) {
        //这里是为了判定攻击范围，把所有已经放置的皇后与当前放置的皇后做位置计算，如果在攻击范围内，flag为false，不在所有已经放置的皇后的攻击范围内，则不改变flag的属性：true
        if (
          arr[index] === arr[j] ||
          arr[index] - arr[j] === index - j ||
          arr[index] - arr[j] === j - index
        ) {
          flag = false;
          break;
        }
      }
      if (flag) {
        //这里是根据flag的属性判定是否进入下一行的循环；
        queen(index + 1);
      }
    }
  }
}
queen(0); //从第0行进行试探

//判断是否是闰年
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  printf("%s\n", "今年是闰年");
}
else {
  printf("%s\n", "今年是平年");
}

//给定两个字符串形式的非负整数 a b ，计算它们的和
function sumStrings(a, b) {
  let result = [];
  let temp = 0;
  let arr1 = a.split("");
  let arr2 = b.split("");
  if (arr1.length > arr2.length) {
    let len = arr1.length - arr2.length
    for (let i = 0; i < len; i++) {
      arr2.unshift("0");
    }
  } else if (arr1.length < arr2.length) {
    let len = arr2.length - arr1.length
    for (let i = 0; i < len; i++) {
      arr1.unshift("0");
    }
  }
  for (let i = arr1.length - 1; i >= 0; i--) {
    if (parseInt(arr1[i]) + parseInt(arr2[i]) >= 10) {
      if (i == 0) {
        result.push((parseInt(arr1[i]) + parseInt(arr2[i])) % 10);
        result[result.length - 1] += temp;
        result.push(1);
      } else {
        result.push((parseInt(arr1[i]) + parseInt(arr2[i])) % 10);
        result[result.length - 1] += temp;
        temp = 1;
      }
    } else {
      result.push(parseInt(arr1[i]) + parseInt(arr2[i]));
      result[result.length - 1] += temp;
      temp = 0;
      console.log(result)
    }
  }
  console.log("result:", result.reverse().join(""));
  return result.reverse().join("");
}