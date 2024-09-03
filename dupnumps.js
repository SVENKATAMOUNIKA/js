// 1. INPUT: 1214
// OUTPUT:
// Uniques are: 2 4
// Dublicate is : 1
arr=prompt("enter a number:").split(" ").map(Number)
console.log(arr)
emp=[],uni="",dup=""
for(i of arr){
    if(!emp.includes(i)){
        emp.push(i)
    }
}
console.log(emp)
for(i of emp){
    c=0
    for(j of arr)
    if(i==j){
        c++
    }
}
if(c==1){
    uni=uni+i+""
}
else{
    dup+=i+""
}
if(uni.length==2){
    console.log("uniques is:+uniq")
}
else{
    console.log("uniques are:+uniq")
}
if(dup.length==2){
    console.log("duplicate is:"+dup)
}
else{
    console.log("duplicate are:"+dup)
}
