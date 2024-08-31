
    arr=[ 538, 111, 200, 652];
        result=[]
        for(i of arr){
            istr=string(i)
            emp=[]
            for(j of istr){
                if(!emp.includes(j)){
                    emp.push(j)
                }
            }
        }
        result.push(istr.length==emp.length)
  