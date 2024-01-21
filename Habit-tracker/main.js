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
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
  checkBox.checked = true;
}

monthsOfYear.forEach((month) => {
  const currentYear = new Date().getFullYear();
  const monthIndex = monthsOfYear.indexOf(month);

  const firstDayOfMonth = new Date(currentYear, monthIndex, 1);
  const lastDayOfMonth = new Date(currentYear, monthIndex + 1, 0);
  const numerOfDays = lastDayOfMonth.getDate();

  // Create a paragraph for the month
  const displayMonth = document.createElement("h2");
  displayMonth.innerHTML = month;
  calendarContainer.appendChild(displayMonth);

  let weekContainer;

  for (let day = 1; day <= numerOfDays; day++) {
    const currentDayDate = new Date(currentYear, monthIndex, day);
    const dayOfWeek = daysOfWeek[currentDayDate.getDay()];

    // Create a new week container when starting a new week
    if (day % 7 === 1 || day === 1) {
      weekContainer = document.createElement("div");
      weekContainer.classList.add("week-container");
      calendarContainer.appendChild(weekContainer);

      // Display the week number
      const displayWeek = document.createElement("h4");
      displayWeek.classList.add("weeks");
      displayWeek.innerHTML = `Week ${Math.ceil(day / 7)}:`;
      weekContainer.appendChild(displayWeek);
    }

    // Create a span for each day and append it to the current week container
    const displayDay = document.createElement("span");
    displayDay.classList.add("days");
    displayDay.innerHTML = `${dayOfWeek} `;
    weekContainer.appendChild(displayDay);

    const dayInput = document.createElement("input");
    dayInput.type = "checkbox";
    weekContainer.appendChild(dayInput);
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
