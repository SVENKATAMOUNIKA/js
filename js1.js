for (let i=1;i<=10;i++){
let square=i*i;
console.log(`the square of ${i} is ${square}`);
}
let sum=0;
for (let i=1;i<=20;i++){
    if(i%3===0){
        sum +=i;
    }
}
console.log("the sum of numbers from 1 to 20 that are divisible by 3 is:",sum);
for (let i=1;i<=15;i++){
let cube=i*i*i;
console.log(`the cube of ${i} is ${cube}`);
}
let num=10;
do {
    console.log(num);
    num--;
}while (num>=1);
let product=1;
let numb=1;
do{
    product*=numb;
    numb++;
}while (numb<=12);
console.log(product);
let number=20;
do{
    console.log(number);
    number-=2;
}while (number>=1);
let m=1;
while(m<=20){
    if(m%5!==0){
        console.log(m);
    }
    m++;
}
let sum1=0;
let number1=1;
while(number1<=30){
    if (number1%4 === 0){
        sum1+=number1;
    }
    number1++;
}
console.log("the sum of all numbers from 1 to 30 that are divisible by 4 is:"+sum1);
let mm=50;
while (mm>=1){
    if(mm%3===0){
        console.log(mm);
    }
    mm--;
}