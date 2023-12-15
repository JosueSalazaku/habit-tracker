const section = document.querySelector("#canvas");
const daysOfWeek = ["Sun", "Mo", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const calenderContainer = document.getElementById("calender");
const daysOfWeekRow = document.createElement("div");
section.appendChild(daysOfWeekRow);

console.log(daysOfWeek);
console.log(monthsOfYear);

monthsOfYear.forEach((month) => {
  //get the current year and monthindex
  const currentYear = new Date().getFullYear();
  const monthIndex = monthsOfYear.indexOf(month);

  //Get the first day of the month
  const firstDay = new Date(currentYear, monthIndex, 1);
  //Get the last day of the month
  const lastDay = new Date(currentYear, monthIndex + 1, 0);
  //Calculate the number of days in the month
  const numerOfDays = lastDay.getDate();
  //creat calender for the month
  console.log(`${month} ${currentYear}`);

  for (let day = 1; day <= numerOfDays; day++) {
    console.log(`Week ${Math.ceil((firstDay.getDay() + day) / 7)}, Day ${day}`);
  }
});
