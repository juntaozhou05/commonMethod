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

//阶乘
function factrol(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factrol(n - 1);
  }
}
