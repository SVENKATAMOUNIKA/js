// 1.ABCDEFGFEDCBA
//   ABCDEF FEDCBA
//   ABCDE   EDCBA
//   ABCD     DCBA
//   ABC       CBA
//   AB         BA
//   A           A
rows=+prompt("enter rows:")
for(i=0;i<rows;i++){
    res="",alpha=65
    for(j=1;j<=rows;j++){
        res=res+String.fromCharCode(alpha)
        alpha++
    }
    if(i==0)
        console.log(res+res.slice(0,res.length-1).split(" ").reverse().join(" "))
    else
    console.log(res+"".repeat(2*i-1)+res.split("").reverse().join(""))
}







// 2.        A
//         C B
//       F E D
//    G H  I J
//   O N M L K

rows=prompt("enter rows:")
    let charCode = 65; // ASCII code for 'A'

 
    for (let i = 0; i < rows; i++) {
        let str = '';
        str += ' '.repeat((rows - i - 1) * 2);
        for (let j = 0; j <= i; j++) {
            str += String.fromCharCode(charCode) + ' ';
            charCode++;
        }
        for (let j = i - 1; j >= 0; j--) {
            str += String.fromCharCode(charCode - (i - j)) + ' ';
        }

        console.log(str.trim());
    }
