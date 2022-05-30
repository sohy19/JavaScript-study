// arr.map()
let userList = [
  {name: "Mike", age: 30}, 
  {name: "Tome", age: 10},
  {name: "Jane", age: 27},
];

let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    id : index + 1,
    isAdult : user.age > 19,
  }); 
});

console.log(newUserList);


// join()
let arr = ["안녕", "나는", "철수야"];
let result = arr.join("-");
console.log(result);


// split()
let str = "Hello, My name is Mike.";
const result2 = str.split(",");
console.log(result2)


// Array.isArray()
let user = {
  name: "Mike",
  age: 30,
};

let userList2 = ["Mike", "Tom", "Jane"];

console.log(typeof user);   // object
console.log(typeof userList2);   // object

console.log(Array.isArray(user));   // false
console.log(Array.isArray(userList2));   // true


// sort()
let arr2 = [27, 8, 5, 13];
arr2.sort();
console.log(arr2);   // [13, 27, 5, 8]

arr2.sort((a, b) => {
  return a - b;
});
console.log(arr2);   // [5, 8, 13, 27]


// 배열의 모든 수 합치기
let arr3 = [1, 2, 3, 4, 5];

let result3 = 0
arr3.forEach((num) => {
  return result3 += num;
});
console.log(result3);

const result4 = arr3.reduce((prev, cur) => {
  return prev + cur;
}, 10);   // 초기값
console.log(result4);

// 성인인 사람의 이름
let userList3 = [
  {name: "Mike", age: 30},
  {name: "Tom", age: 10},
  {name: "Jane", age: 27},
  {name: "Sue", age: 26},
  {name: "Harry", age: 42}, 
  {name: "Steve", age: 60}, 
]

let result5 = userList3.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  };
  return prev;
}, []);

console.log(result5);