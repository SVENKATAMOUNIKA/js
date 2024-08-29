!

num=prompt("enter a number:")
rev=" ",str=" "
if(num[0]=="-"){
    for(i=num.length-1;i>1;i--){
        rev=rev+num[i]
    }
    rev="-"+rev
    console.log(Number(rev))
} 
else{
    for(i=num.length-1;i>=0;i--){
        rev=rev+num[i]
    }
    console.log(Number(rev))
}
 
 
 
