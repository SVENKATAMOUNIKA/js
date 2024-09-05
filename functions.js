// Implement all the problems which we have done (atleast 5) using named and arrow functions.
// doc on functions and scopes with proper understanding.
// 1.Calculate the sum of all even numbers between 1 and 100

// - Test case 1: Verify that the sum of all even numbers between 1 and 100 is 2550.
// - Test case 2: Verify that the sum of all even numbers between 1 and 50 is 650.

function sumOfEvenNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
const sum1 = sumOfEvenNumbers(1, 100);
console.log(sum1); 

const sum2 = sumOfEvenNumbers(1, 50);
console.log(sum2); 


// 2. Write a program to find the factorial of a given number

// - Test case 1: Input: 5, Expected output: 120
// - Test case 2: Input: 3, Expected output: 6

function factorialIterative(n) {
    if (n < 0) return "Factorial is not defined for negative numbers";
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialIterative(5)); 
console.log(factorialIterative(3)); 


// 3.Determine the number of digits in a given number

// - Test case 1: Input: 123, Expected output: 3
function countDigits(number) {
    const numberStr = Math.abs(number).toString().replace('.', '');
    return numberStr.length;
}
console.log(countDigits(123)); 


// 4. Write a program to determine the fare for a taxi ride based on the distance traveled:
//     - 0-5 km: $5
//     - 5-10 km: $10
//     - 10-20 km: $20
//     - Above 20 km: $30 + $5 for every additional km

function calculateTaxiFare(distance) {
    if (distance < 0) {
        return "Distance cannot be negative";
    }

    let fare;

    if (distance <= 5) {
        fare = 5;
    } else if (distance <= 10) {
        fare = 10;
    } else if (distance <= 20) {
        fare = 20;
    } else {
        fare = 30 + (distance - 20) * 5;
    }

    return fare;
}
console.log(calculateTaxiFare(3));  
console.log(calculateTaxiFare(7)); 

// 5.Write a program to determine the discount on a product based on the quantity purchased:
// - 1-5 units: No discount
// - 6-10 units: 5% discount
// - 11-20 units: 10% discount
// - Above 20 units: 15% discount
function calculateDiscount(quantity, pricePerUnit) {
    if (quantity < 0 || pricePerUnit < 0) {
        return "Quantity and price per unit must be non-negative";
    }

    let discountPercentage;

    if (quantity >= 1 && quantity <= 5) {
        discountPercentage = 0; 
    } else if (quantity >= 6 && quantity <= 10) {
        discountPercentage = 5; 
    } else if (quantity >= 11 && quantity <= 20) {
        discountPercentage = 10;
    } else if (quantity > 20) {
        discountPercentage = 15; 
    }
    const totalPrice = quantity * pricePerUnit;
    const discountAmount = (totalPrice * discountPercentage) / 100;
    const finalPrice = totalPrice - discountAmount;

    return {
        totalPrice: totalPrice,
        discountAmount: discountAmount,
        finalPrice: finalPrice,
        discountPercentage: discountPercentage
    };
}
console.log(calculateDiscount(4, 100));  
console.log(calculateDiscount(8, 50));   
console.log(calculateDiscount(15, 30));  
console.log(calculateDiscount(25, 20));  