let arr=["hello", "world", "this", "is", "a", "test"];
for(i=0;i<arr.length;i++){
    if(arr[i].startsWith("h")){
        arr[i]=arr[i];
    }
}
console.log(arr);