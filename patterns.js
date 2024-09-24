// 1.rows=5
// output:
// 1   5
//  2 4
//   3
//  2  4
// 1    5
rows=+prompt("enter rows:")
for(i=1;i<=rows;i++){
    res=" "
    for(j=1;j<=rows;j++){
        if(j==i){
            res=res+i+" "
        }
        else if(i+j==rows+1){
            res=res+(rows-i+1)+" "
        }
        else{
            res=res+" "
        }
    }
    console.log(res)
}