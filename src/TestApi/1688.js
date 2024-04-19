// // 输入:nums = [
// //     {id: 8}
// //     {id: 1}
// //     {id: 2}
// //     {id: 2}
// //     {id: 3}
// // ]
// // 输出: [4, 0, 1, 1, 3];
// // 对于 nums[0]={id:8}存在四个比它小的数组项:(id:1,id:2，id:2 和 id:3)
// // 对于 nums[1]={id:1}不存在比它小的数组项。
// // 对于 nums[2]={id:2} 存在一个比它小的数组项:(id:1)。
// // 对于 nums[3]={id:2}存在一个比它小的数组项:(id:1)
// // 对于 nums[4]={id:3}存在三个比它小的数组项:(id:1, id:2 和 id:2)。
// function countSmallerIds(nums) {
//   // 创建一个数组来存储已经遍历过的id和它们的索引
//   const ids = [];
//   // 创建一个数组来存储结果
//   const result = [];

//   // 遍历输入数组
//   for (let i = 0; i < nums.length; i++) {
//     // 获取当前对象的id
//     const currentId = nums[i].id;

//     // 初始化比当前id小的id的计数为0
//     let count = 0;

//     // 遍历已经存储的id
//     for (let j = 0; j < ids.length; j++) {
//       // 如果存储的id小于当前id，则增加计数
//       if (ids[j] < currentId) {
//         count++;
//       }
//     }

//     // 将当前id添加到数组中
//     ids.push(currentId);

//     // 将计数添加到结果数组中
//     result.push(count);
//   }

//   // 返回结果数组
//   return result;
// }

// // 测试输入
// const nums = [{ id: 8 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }];
// // 输出: [4, 0, 1, 1, 3]
// function fn(arr) {
//   const result = [];
//   let count = 0;
//   arr.forEach((item, idx) => {
//     if (idx < arr.length - 1) return;

//     for (let y = idx + 1; ; ) {
//       if (item[idx]?.id > item[y].id) {
//         result[idx] = count++;
//       }
//     }
//   });
//   return result;
// }

// // console.log(fn(nums));
// // 测试输入
// // const nums = [{ id: 8 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }];
// // 输出: [4, 0, 1, 1, 3]
// function countSmallerIds(arr) {
//   const result = [];
//   const ids = []; // 用于存储已经遍历过的id

//   arr.forEach((item, idx) => {
//     const currentId = item.id;
//     let count = 0;

//     // 遍历已经存储的id数组
//     for (let i = 0; i < ids.length; i++) {
//       if (ids[i] < currentId) {
//         count++;
//       }
//     }

//     // 将当前id添加到id数组中
//     ids.push(currentId);

//     // 将计数添加到结果数组中
//     result.push(count);
//   });

//   return result;
// }

// // 调用函数并打印结果
// console.log(countSmallerIds(nums)); // 输出: [4, 0, 1, 1, 3]
// // 加载10个请求，请求地址已知，但是同时最多加载3个请求
// // 每次有请求加载完后，自动加入新的请求 除了启动时，在未请求接口数量>=3之前，保持同时3个接口在请求
// // 要求记录每个请求的返回状态(成功/失败)
// // 要求用promise实现。
// // 完整的请求示例:https://suggest.taobao.com/sug?code=utf-8&q=1
// // const baseUrl =`https://suggest.taobao.com/sug?code=utf-8&g=`
// // const urls = ['1', '2', '3', '4', '5', 6, '7', '8', '9', '10']

// let arr = [{ id: 8 }, { id: 5 }, { id: 2 }, { id: 2 }, { id: 6 }];

// let count = 0;
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   // 轮
//   for (let j = 0; j < arr.length; j++) {
//     // 次
//     if (arr[i].id > arr[j].id) {
//       count++;
//     }
//     if (arr.length - 1 === j) {
//       result.push(count);
//       count = 0;
//     }
//   }
// }
// console.log(result);

let arr = [{ id: 8 }, { id: 5 }, { id: 2 }, { id: 2 }, { id: 6 }];

// 创建一个数组，用于存储每个id的比较结果
let result = arr.map((item) => 0);

// 遍历数组，对每个元素进行比较
arr.forEach((item) => {
  arr.forEach((compareItem) => {
    if (item.id > compareItem.id) {
      result[arr.indexOf(item)]++; // 如果item.id大于compareItem.id，则增加对应位置的计数
    }
  });
});

console.log(result); // [ 4, 2, 0, 0, 3 ]
