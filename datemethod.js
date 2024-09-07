// Task 1: Get Current Date and Time
const now=new Date();
 now.getFullYear();
 now.getMonth()+1;
 now.getDay();
 now.getHours();
 now.getMinutes();
 now.getSeconds();
console.log(now);



// Task 2: Add Days to Date

// const date=new Date('2020-08-28');
// const daysToAdd=2;
// const currentDate=date.getDate();
// date.setDate(currentDate+daysToAdd);
// console.log(date.toDateString());


const date=new Date('2024-08-28');
const month=date.getMonth()+1;
const day=date.getDate();
const year=date.getFullYear();
const formattedMonth=month.toString().padStart(2,'0');
const formattedDay=day.toString().padStart(2,'0');
const formattedDate=`${formattedMonth}/${formattedMonth}/${year}`;
console.log(formattedDate);

// Task 3: Format Date as MM/DD/YYYY
// - Input: Date string (e.g., "2024-08-28")
// - Output: Formatted date string (e.g., "08/28/2024")
function formatDate(dateString){
    const[year,month,day]=dateString.split('-').map(Number);
    const formattedDate=`${month.toString().padStart(2, '0')}/${day.toString().padStart(2,'0')}/${year}`;
    return formattedDate;
}
const inputDate="2024-08-28";
const formattedDate1=formatDate(inputDate);
console.log(formattedDate1);



// Task 4: Get Number of Days Between Dates

// - Input: Two date strings (e.g., "2024-08-28", "2024-09-01")
// - Output: Number of days between dates (e.g., 4)

function getNumberOfDaysBetweenDates(dateStr1,dateStr2){
    const date1=new Date(dateStr1);
    const date2=new Date(dateStr2);
    const differenceInMilliseconds=Math.abs(date1-date2);
    const millisecondsPerDay=24*60*60*1000;
    const differenceInDays=Math.floor(differenceInMilliseconds/millisecondsPerDay);
    return differenceInDays;
}
const date1="2024-08-28";
const date2="2024-09-01";
const daysBetween=getNumberOfDaysBetweenDates(date1,date2);
console.log(daysBetween);



