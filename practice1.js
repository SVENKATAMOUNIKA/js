rows
for(i=1;i<=rows;i++){
    res=" "
    for(k=1;k<=i-1;i++){
        res=res+" "
    }
    for(j=1;j<=rows-i+1;j++){
        if(i==1||j==1||i+j==rows+1)
        res=res+"* "
        else
        res=res+"  "
    }
    console.log(res)
}