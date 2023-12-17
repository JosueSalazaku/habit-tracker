const calendarContainer = document.getElementById("calendar");
const body = document.body;
const checkBox = document.getElementById("checkbox");

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

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
  checkBox.checked = true;
}

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

  // Create a new week container for each month
  const weekContainer = document.createElement("div");
  calendarContainer.appendChild(weekContainer);

  // Display the week number
  const displayWeek = document.createElement("p");
  displayWeek.innerHTML = `Week 1`; // assuming all days are in the same week
  weekContainer.appendChild(displayWeek);

  // Create calendar for the month
  for (let day = 0; day < 7; day++) {
    const currentDayDate = new Date(currentYear, monthIndex, day + 1);
    const dayOfWeek = daysOfWeek[currentDayDate.getDay()];

    // Create a paragraph for each day and append it to the week container
    const displayDay = document.createElement("p");
    displayDay.innerHTML = `${dayOfWeek}`;
    weekContainer.appendChild(displayDay);
  }

  // Add a newline for better readability
  const newline = document.createElement("br");
  calendarContainer.appendChild(newline);
});

checkBox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.removeItem("darkMode");
  }
});
