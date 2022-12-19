//1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//i. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
const present = new Date();
const year = present.getFullYear();
const month = present.getMonth();
const date = present.getDate();
const hour = present.getHours();
const minute = present.getMinutes();

let hr = hour < 10 ? console.log(`0${hour}`) : console.log(`${hour}`);
let min = minute < 10 ? console.log(`0${minute}`) : console.log(`${minute}`);

console.log(`${year}-${month}-${date} ${hr}:${min}`);
