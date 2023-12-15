const calendarContainer = document.getElementById("calendar");

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
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function calculateWeekNumber(firstDay, currentDay) {
  return Math.ceil((firstDay.getDay() + currentDay) / 7);
}

monthsOfYear.forEach((month) => {
  const currentYear = new Date().getFullYear();
  const monthIndex = monthsOfYear.indexOf(month);

  const firstDayOfMonth = new Date(currentYear, monthIndex, 1);
  const lastDayOfMonth = new Date(currentYear, monthIndex + 1, 0);
  const numerOfDays = lastDayOfMonth.getDate();

  // Create a paragraph for the month
  const displayMonth = document.createElement("h4");
  displayMonth.innerHTML = month;
  calendarContainer.appendChild(displayMonth);

  // Create calendar for the month
  for (let day = 1; day <= numerOfDays; day++) {
    const currentDayDate = new Date(currentYear, monthIndex, day);
    const dayOfWeek = daysOfWeek[currentDayDate.getDay()];

    // Calculate week for each day
    const week = calculateWeekNumber(firstDayOfMonth, day);

    // Create a paragraph for each day
    const displayDay = document.createElement("p");
    displayDay.innerHTML = `Week ${week}, Day ${day}: ${dayOfWeek}`;
    calendarContainer.appendChild(displayDay);
  }

  // Add a newline for better readability
  const newline = document.createElement("br");
  calendarContainer.appendChild(newline);
});
