// 1) input: [23, 33, 200, 785]
// output:  30
arr=[23, 33, 200, 785]
result=[]
for(i of arr){
    istr=string(i)
    emp=[]
    for(j of istr){
        if(!emp.includes(j)){
            emp.push(j)
        }
    }
    result.push(istr.length==emp.length)
}
console.log(result)




// 2) input: [ 538, 111, 200, 652]
// output:   [ false, false, false, true]
arr= [538, 111, 200, 652]
res=[]
for(i of arr){
    istr=string(i)
    c=0
    for(j=0;j<=istr.length-1;j++){
        if(istr[j+1]>istr[j]){
            c++
        }
    }
    res.push(istr.length-1==c)
}
console.log(res)





// 3) WAP to print uniques and duplicates without using includes method
// input: 112
// output: 
// Uniques: 2
// Duplicates: 1
arr=prompt("enter a number:").split("").map(Number)
// console.(arr)
emp=[],uni=" ",dup=" "
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
console.log(emp)
for(i of emp){
    c=0
    for(j of arr){
        if(i==j){
            c++
        }
    }
    if(c==1){
        uni=uni+i+" "
    }
    else{
        dup+=i+""
    }
}
console.log("uniques are:"+uni)
console.log("duplicates are:"+dup)






// 4) WAP to print first missing fibonnacci umber
// input: 10 1 0 5 7
// output: 2
num=prompt("enter numbers:").split("").map(Number)
function primeCheck(n1){
    if(n1>1){
        for(i=2;i<n1;i++){
            if(n1%i==0){
                return false
            }
        }
        return true
    }
    return false
}
prime=2
while(true){
    if(primeCheck(prime)){
        if(!num.includes(prime)){
            console.log(prime)
            break
        }
    }
}