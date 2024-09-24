// 1.1
//   1 2
//   1   3
//   1     4
//   1 2 3 4 5
rows=+prompt("enter rows:")
    for (let i = 1; i <= rows; i++) {
        let row = "";
        if (i === 1) {
            row += "1";
        } else if (i === rows) {
            for (let j = 1; j <= rows; j++) {
                row += j + " ";
            }
        } else {
            row += "1"; 
            row += " ".repeat((i - 1) * 2 - 1);
           row += i; 
        }

        console.log(row.trim());
    }




    // 2.1 2 3 4 5
    //   2     5
    //   3   5
    //   4 5
    //   5
    rows=+prompt("enter rows:")
    for(i=1;i<=rows;i++){
        res=" "
        for(j=1;j<=rows;j++){
            if(i==1)
                res=res+j+" "
            else if(j==1)
                res=res+i+" "
            else 
            res=res+" "
        }
        console.log(res)
    }