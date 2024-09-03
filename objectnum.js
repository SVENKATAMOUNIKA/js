const obj={a:1,b:2,c:3,d:4};
const filteredobj=object.keys(obj).reduce((acc,key)=>{
    if(obj[key]>2){
        acc[key]=[obj.key];
    }
return acc;
}, {});
console.log(filteredobj);

