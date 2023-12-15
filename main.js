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

const daysOfWeekRow = document.createElement("div");
section.appendChild(daysOfWeekRow);

console.log(daysOfWeek);
console.log(monthsOfYear);

// const today = new Date();
// const dayOfWeek = daysOfWeek[today.getDay()];
// const currentMonth = monthsOfYear[today.getMonth()];

function generateMiniCalendar(year, month) {
  const dayInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDate();

  const calenderContainer = document.getElementById("calender");
  calenderContainer.innerHTML = "";

  //creather header
  const header = document.createElement("div");
  header.textContent = `${new Date(year, month).toLocaleString("default", {
    month: "long",
  })} ${year}`;
  header.classList.add("calendar-header");
  calenderContainer.appendChild(header);

  //create labels
}

daysOfWeek.forEach((day) => {
  const dayLabel = document.createElement("label");
  const dayInput = document.createElement("input");
  dayInput.classList.add("form-radio");
  dayInput.type = "checkbox";
  dayLabel.textContent = day;
  daysOfWeekRow.appendChild(dayLabel);
  daysOfWeekRow.append(dayInput);
});
