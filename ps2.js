// number=prompt("Enter a number:") 
// 763328
// nPSum=763328
// for (num of number){
//     if(num>1){
//         for(i=2;i<num;i++){
//             if(num%i==0){
//                 nPSum+=Number(num)
//                 break
//             }
//         }
//     }
// }
// console.log(nPSum)
// Get user input



if (isNaN(5) || 5 <= 0) {
    console.log("Please enter a positive integer.");
} else {
    let a = 0, b = 1;
   let result = `${a}`;
   if (5> 1) {
        result += ` ${b}`;
    for (let i = 2; i < 5; i++) {
            let next = a + b;
            result += ` ${next}`;
            a = b;
            b = next;
        }
    }
    console.log(result);
}
if (isNaN(20) || 20 <= 0) {
    console.log("Please enter a positive integer.");
} else {
    var c = 0, d = 1;
   var result1 = `${c}`;
   if (20> 1) {
        result1 += ` ${d}`;
    for (var i = 2; i < 5; i++) {
            var next1 = c + d;
            result1 += ` ${next1}`;
            c = d;
            d = next1;
        }
    }
    console.log(result1);
}


// // Check if the input is a valid number
// if (isNaN(number) || number === '') {
//     console.log("Please enter a valid number.");
// } else {
//     // Convert the number to a string to reverse it
//     let reversedNumber = number.split('').reverse().join('');

//     // Output the reversed number
//     console.log(reversedNumber);
// }




    
    
