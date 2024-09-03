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
const formattedDte=`${formattedMonth}/${formattedMonth}/${year}`;
console.log(formattedDate);

// // Create a Date object for the given date
// const date = new Date('2024-09-01'); // Example date: September 1, 2024

// // Get the month (0-based index, so January is 0 and December is 11)
// const month = date.getMonth() + 1; // Adding 1 to get the 1-based month

// // Get the day of the month
// const day = date.getDate();

// // Get the full year
// const year = date.getFullYear();

// // Format month and day with leading zeros if needed
// const formattedMonth = month.toString().padStart(2, '0');
// const formattedDay = day.toString().padStart(2, '0');

// // Construct the formatted date string
// const formattedDate = `${formattedMonth}/${formattedDay}/${year}`;

// console.log(formattedDate); // Output: 09/01/2024
