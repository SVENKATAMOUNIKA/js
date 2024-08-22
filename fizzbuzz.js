let a="fizz";
let b="buzz";
for(let num=1;num<=20;num++){
    if(num%2===0&&num%3===0){
        console.log(num+a+b);
    }
    else if(num%2===0){
        console.log(num+b);
    }
    else if(num%3===0){
        console.log(num+a);
    }
    else{
        console.log(num);
    }
}