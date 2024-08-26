// let str1=["hello","world","abc"]
// let str2=["xyz","abc","def"];
// a=str1.map(f=>{
//     return f.toUpperCase()
// });
// b=str2.map(f=>{
//     return f.toUpperCase()
// });
// console.log(a,b);

// let str1=["hello","world","abc"]
// let str2=["xyz","abcdef"];
// a=str1.map(f=>{
//     return f.substring(0,3)
// });
// b=str2.map(f=>{
//     return f.substring(0,3)
// });
// console.log(a,b);
// let str1=["hello","world","abc"]
// let str2=["xyz","foo","bar"]
// a=str1.map(f=>{
//     return f.replace("o","0")
// });
// b=str2.map(f=>{
//     return f.replace("o","0")
// });
// console.log(a,b);
// let str1=["hello-world","abc-def"]
// let str2=["xyz-abc-def"]
// a=str1.map(f=>{
//     return f.split("-")
// });
// b=str2.map(f=>{
//     return f.split("-")
// });
// console.log(a,b);
let str1=["hello","world","abc","defghi"]
let str2=["xyz","foo","bar"]
a=str1.map(f=>{
    return f.join(",")
})
b=str2.map(f=>{
    return f.join(",")
})

