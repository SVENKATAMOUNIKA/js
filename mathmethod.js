// [12.345, 67.890, 34.567], // Round each element to 2 decimal places using toFixed()
const numbers = [12.345, 67.890, 34.567];
const roundedNumbers = numbers.map(num => parseFloat(num.toFixed(2)));
console.log(roundedNumbers);


// ['123abc', '456def', '789ghi'], Convert each element to an integer using parseInt()
const array=['123abc', '456def', '789ghi'];
const convertedArray=array.map(item=>parseInt(item,10));
console.log(array);


// [12, 34.56, 78, 90.12], Check if each element is an integer using isInteger()
const array1=[12, 34.56, 78, 90.12];
const results=array.map(item=>Number.isInteger(item));
console.log(results);

// ['abc', 123, 'def', 456], Check if each element is NaN (Not a Number) using isNaN()
const array2=['abc', 123, 'def', 456];
const results1=array2.map(item => isNaN(item));
console.log(results1);


// [123.456, 789.012, 345.678] Format each element to have a precision of 4 significant digits using toPrecision()
const array3=[123.456, 789.012, 345.678];
const formattedArray=array3.map(item=>item.toPrecision(4));
console.log(formattedArray);


// generate random otp 5 digit num using math.random
function getRandomIntInclusive(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
