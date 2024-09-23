// 1.rows=4
// output:
// 1
// 2 1
// 3 2 1
// 4 3 2 1
rows=+prompt("enter rows:")
for(i=1;i<=rows;i++){
    row='';
    for(j=i;j>=1;j--){
        row+=j+' ';
    }
    console.log(row.trim());
}




// 2.rows=4
// output:
// 2
// 4 10
// 6 12 16
// 8 14 18 20
rows=+prompt("enter rows:")
    let currentNumber = 2; 
    for (let i = 1; i <= rows; i++) {
        let row = '';
 for (let j = 0; j < i; j++) {
            row += currentNumber + ' ';
            currentNumber += 2; 
        }
console.log(row.trim());  
    }