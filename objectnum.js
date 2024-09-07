// 1:
// Use Object.keys() and Object.values() to create a new object with only the keys and values that meet a certain condition.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// Create a new object with only the keys and values where the value is greater than 2
// Output: { c: 3, d: 4 }

const obj={a:1,b:2,c:3,d:4};
const filteredobj=Object.fromEntries(
   Object.entries(obj).filter(([key,value])=>value>2)
);
console.log(filteredobj);



// 2:
// Use Object.assign() to merge two objects and create a new object with the combined properties.
// Example:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// Create a new object with the combined properties of obj1 and obj2
// Output: { a: 1, b: 2, c: 3, d: 4 }

const obj1={a: 1, b: 2};
const obj2={c: 3, d: 4};
const mergeObj=Object.assign({},obj1,obj2);
console.log(mergeObj);


// 3:
// Use Array.reduce() to sum up the values of an object's properties.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// Sum up the values of obj's properties using reduce();
// Output: 10

const obj3={ a: 1, b: 2, c: 3, d: 4 };
const sum=Object.values(obj).reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
console.log(sum);


// 4. scenario explained for array of objects using hasownproperty.
const users=[
    {name:'monu',email:'suremounika9@gmail.com',age:20},
    {name:'meena',age:19},
    {name:'myra',email:'myra11@gmail.com',age:21}
];
const propertyToCheck='email';
const results=users.map(user=>({
    name:user.name,
    hasEmail:user.hasOwnProperty(propertyToCheck)
}));
console.log(results);