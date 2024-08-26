// 1:
// Use Object.keys() and Object.values() to create a new object with only the keys and values that meet a certain condition.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// Create a new object with only the keys and values where the value is greater than 2
let obj={a:1,b:2,c:3,d:4};
let filteredObj=Object.fromentries(
    Object.entries.obj.filter(([key,value])value=>2)
);
console.log(filteredObj);

// 2:
// Use Object.assign() to merge two objects and create a new object with the combined properties.
// Example:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// Create a new object with the combined properties of obj1 and obj2
let obj1={a:1,b:2};
let obj2={c:3,d:4};
let combinedObj={...obj1,...obj2};
console.log(combinedObj);

