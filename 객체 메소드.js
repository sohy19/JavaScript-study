// Computed property
let n = "name";
let a = "age";

const user1 = {
	[n]: "Mike",
	[a]: 30,
	[1 + 4]: 6,
};

console.log(user1); // {5: 6, name: 'Mike', age: 30}

// 어떤 것이 key가 될지 모를 때 유용
function makeObj(key, val) {
	return {
		[key]: val,
	};
}

const obj = makeObj("성별", "male");
console.log(obj);

const user = {
	name: "Mike",
	age: 30,
};

// 객체 복제
const newUser = Object.assign({}, user); // 빈 객체에 user 겍체를 합침
newUser.name = "Tom";

console.log(user.name); // Mike
console.log(newUser.name); // Tom

// 키 배열 반환
const result1 = Object.keys(user);
console.log(result1); // ['name', 'age']

// 값 배열 반환
const result2 = Object.values(user);
console.log(result2); // ['Mike', 30]

// 키/값 배열 반환
const result3 = Object.entries(user);
console.log(result3); // 0: ['name', 'Mike'], 1: ['age', 30]
console.log("hi");

// 키/값 배열을 객체로 반환
let arr = [
	["mon", "월"],
	["tue", "화"],
];

let arr2 = [
	["sat", "토"],
	["sun", "일"],
];
const result4 = Object.fromEntries(arr);
console.log(result4); // {mon: '월', tue: '화'}
