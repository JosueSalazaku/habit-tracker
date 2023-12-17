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
  const monthContainer = document.createElement("div");
  calendarContainer.appendChild(monthContainer);

  // Declare weekContainer outside the loop
  let weekContainer;

  // Create calendar for the month
  for (let day = 1; day <= numerOfDays; day++) {
    const currentDayDate = new Date(currentYear, monthIndex, day);
    const dayOfWeek = daysOfWeek[currentDayDate.getDay()];
    const week = calculateWeekNumber(firstDayOfMonth, day);

    // Check if a new week is starting
    if (day === 1 || week !== calculateWeekNumber(firstDayOfMonth, day - 1)) {
      // Create a new week container
      weekContainer = document.createElement("div");
      monthContainer.appendChild(weekContainer);

      // Display the week number
      const displayWeek = document.createElement("h4");
      displayWeek.innerHTML = `Week ${week}`;
      weekContainer.appendChild(displayWeek);
    }

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
