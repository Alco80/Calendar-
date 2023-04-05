//alert("connected")

const updatDate = new Date;

const currentDay = updatDate.getDay();
const currentDate = updatDate.getDate();
const currentMonth = updatDate.getMonth();
const currentYear = updatDate.getFullYear();
const currentHour = updatDate.getHours();
const currentMinutes = updatDate.getMinutes();


const months = ["January", " February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(months[currentMonth]);
console.log(week[currentDay]);
console.log(currentDate);

const calendar = `${week[currentDay]} ${months[currentMonth]} ${currentDate}, ${currentYear}.`
document.getElementById("time").innerHTML = calendar;

const timeFrame = `${currentHour}:${currentMinutes}`
document.getElementById("hours").innerHTML = timeFrame;


