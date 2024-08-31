// 1) WAP to print the non fib numbers by using while loop.

// Input: Enter a number: 5

// Output: 4 6 7 9 10
num=+prompt("enter a number:")
a=0,b=1,nonfib=0
while(nonfib!=num){
    for(i=a+1;i<b;i++){
        console.log(i)
        nonfib++
        if(nonfib==num)
            break
    }
    c=a+b
    a=b
    b=c
}


// 2) WAP to print nth non-fib number.

// Input: Enter a number: 10
// Output: 16
num=+prompt("enter fib poistion:")
function pos(num){
    a=0,b=1,i=1
    while(i<=num){
        if(i==num){
            return a
        }
        c=a+b
        a=b
        i++
    }
}
console.log(pos(num))


// 3) WAP to print the below series based on the input
// input: Enter a number: 13
// output: 4 6 7 9 10 11 12.7
num=+prompt("enter a number:")
a=0,b=1,nonfib=0
while(nonfib!=num){
    for(i=a+1;i<b;i++){
        console.log(i)
        nonfib++
        if(nonfib==num)
        break 
    }
    c=a+b
    a=b
    b=c
}

