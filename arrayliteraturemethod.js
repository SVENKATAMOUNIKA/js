// Double the numbers in an array: [1, 2, 3, 4, 5]
// let numbers=[1, 2, 3, 4, 5]
// let doublednumbers=numbers.map(numbers=>numbers*2);
// console.log(doublednumbers);

// Convert strings to uppercase: ["hello", "world"]
// let str=["hello", "world"]
// let uppercasedstrings=str.map(str=>str.toUpperCase());
// console.log(uppercasedstrings);


//  using filter method
// Get even numbers from an array: [1, 2, 3, 4, 5]
// let numbers=[1, 2, 3, 4, 5]
// let evenNumbers=numbers.filter(num=>num%2===0);
// console.log(evenNumbers);

// Get strings longer than 5 characters: ["hello", "world", "abc"]
// let strings=["hello", "world", "abc"]
// let longstrings=strings.filter(str=>str.length>5);
// console.log(longstrings);

// for each
// Log each number in an array: [1, 2, 3, 4, 5]
// let numbers=[1, 2, 3, 4, 5];
// numbers.forEach(number=> {
//     console.log(number);
// });
// Append "!" to each string in an array: ["hello", "world"]
// let strings=["hello", "world"];
// strings.forEach((string,index,arr)=>{
//     arr[index]=string+"!"
// });
// console.log(strings);


// every
// Check if all numbers in an array are positive: [1, 2, 3, 4, 5]
// let numbers=[1, 2, 3, 4, 5];
// let allPositive=numbers.every(number=>number>0);
// console.log(allPositive);
// Check if all strings in an array are longer than 5 characters: ["hello", "world", "abc"] 
// let str=["hello", "world", "abc"];
// let allLongerThanFive=str.every(str=>str>5);
// console.log(allLongerThanFive);

// some
// Check if any number in an array is even: [1, 2, 3, 4, 5]
// let numbers=[1, 2, 3, 4, 5];
// let hasEvenNumber=numbers.some(num=>num%2===0);
// console.log(hasEvenNumber);
// Check if any string in an array contains "x": ["hello", "world", "max"]
// let strings=["hello", "world", "max"];
// let containsX=strings.some(str=>str.includes('x'));
// console.log(containsX);


// find
// Find the first even number in an array: [1, 2, 3, 4, 5]
// let arr=[1, 2, 3, 4, 5];
// let firstEvenNumber=arr.find(num=>num%2==0);
// console.log(firstEvenNumber);
// Find the first string in an array that contains "x": ["hello", "world", "max"] 
// let strings=["hello", "world", "max"];
// let containsX=strings.find(str=>str.includes('x'));
// console.log(containsX);


// findindex
// Find the index of the first even number in an array: [1, 2, 3, 4, 5]
// let numbers=[1, 2, 3, 4, 5];
// let firstEvenNumber=numbers.findIndex(num=>num%2==0);
// console.log(firstEvenNumber);
// Find the index of the first string in an array that contains "x": ["hello", "world", "max"]
let strings=["hello", "world", "max"];
let containsX=strings.findIndex(str=>str.includes('x'));
console.log(containsX);


