
 let sum1=0;
for(let i=2;i<=100;i+=2){
     sum1+=i;
 }
 console.log("test case1:sum of all even numbers between 1 and 100 is ${sum1}");
console.log(sum1===2250,'test case 1 failed');
 let sum2=0;
 for(let i=2;i<=50;i+=2){
    sum2+=i;
}
 console.log("test case1:sum of all even numbers between 1 and 50 is ${sum2}");
  console.log(sum2===650,'test case 1 failed');





let number1=5;
let fratorial1=1;
for(let i=1;i<=number1;i++){
    fratorial1*=i;
}
console.log('test case 1:fratorial of $(number1) is ${fratorial1}');
console.log(fratorial1===120,'test case 1 failed');
let number2=3;
let fratorial2=1;
for(let i=1;i<=number2;i++){
    fratorial2*=i;
}
console.log('test case 2:fratorial of $(number2} is $(fratorial2}');
console.log(fratorial2===6,'test case 2 failed');
var distance=15;
var fare;
if(distance<=5){
    fare=5;
}else if(distance<=10){
    fare=10;
}else if(distance<=20){
    fare=20;
}else{
    fare=30+(distance-20)*5;
}
console.log("the fare for a distance of"+distance+"km is $"+fare);






var quantity=15;
var priceunit=100;
var discountpercentage=0;
if (quantity>=1&&quantity<=5){
    discountpercentage=0;
}else if(quantity>6&&quantity<=10){
     discountpercentage=5;
    }else if(quantity>11&&quantity<=20){
        discountpercentage=10;
    }else if(quantity>20){
        discountpercentage=15;
    }
    var totalprice=quantity*priceunit;
    var discountamount=(totalprice*discountpercentage)/100;
    var finalprice=totalprice-discountamount;
    console.log("quantity purchased:"+quantity);
    console.log("priceunit: $" + priceunit);
    console.log("discount percentage:"+discountpercentage+ "%");
    console.log("total price before discount:$"+totalprice);
    console.log("discount amount:$"+discountamount);
    console.log("final price after discount:$"+finalprice);




   let x=123;
   let y=0;
   let z=x;
   if(z===0){
    y=0;
   }else if(z<10){
    y=1;
   }else if(z<100){
    y=2;
   }else if(z<1000){
    y=3;
   }else if(z<10000){
    y=4;
   }else{
    y=5;
   }
   console.log("the number of digits in"+x+"is:"+y);
   let m=4567;
   let o=0;
   let u=m;
   if(z===0){
    o=0;
   }else if(u<10){
    o=1;
   }else if(z<100){
    o=2;
   }else if(z<1000){
    o=3;
   }else if(z<10000){
    o=4;
   }else{
    y=5;
   }
   console.log("the number of digits in"+m+"is:"+o);



   let userselection=2;
   switch(userselection){
    case 1:
    console.log("you selected espresso");
    break;
    case 2:
        console.log("you selected cappuccino");
        break;
    case 3:
        console.log("you selected latte");
        break;
    case 4:
        console.log("you selected mocha");
        break;
    default:
        console.log("invalid selection.please choose a number between 1 and 4");
        break;
   }
   let shippingcostregion=3;
   switch(shippingcostregion){
    case 1:
    console.log("shipping cost on northamerica($10)");
    break;
    case 2:
        console.log("shipping cost on south america($20)");
        break;
    case 3:
        console.log("shipping cost on europe($40)");
        break;
    case 4:
        console.log("shipping cost on asia");
        break;
    case 5:
        console.log("shipping cost on australia");
    break;
    default:
        console.log("invalid selection.please choose a number between 1 and 5");
    break;
   }
