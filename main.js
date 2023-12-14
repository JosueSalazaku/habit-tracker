const section = document.querySelector("#canvas");
const daysOfWeek = ["Mo", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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

console.log(daysOfWeek);
console.log(monthsOfYear);

const today = new Date();
const dayOfWeek = daysOfWeek[today.getDay()];
const currentMonth = monthsOfYear[today.getMonth()];

daysOfWeek.forEach((day) => {
  const dayLabel = document.createElement("label");
  const dayInput = document.createElement("input");

  dayLabel.classList.add("mr-10");
  dayInput.classList.add(
    "before:content['']",
    "peer",
    "relative",
    "h-8",
    "w-8",
    "cursor-pointer",
    "appearance-none",
    "rounded-full",
    "border",
    "border-gray-900/20",
    "bg-gray-900/10",
    "transition-all",
    "before:absolute",
    "before:top-2/4",
    "before:left-2/4",
    "before:block",
    "before:h-12",
    "before:w-12",
    "before:-translate-y-2/4",
    "before:-translate-x-2/4",
    "before:rounded-full",
    "before:bg-blue-gray-500",
    "before:opacity-0",
    "before:transition-opacity",
    "checked:border-gray-900",
    "checked:bg-gray-900",
    "checked:before:bg-gray-900",
    "hover:scale-105",
    "hover:before:opacity-0",
    "mr-10"
  );

  // dayInput.classList.add(
  //   "rounded-full",
  //   "appearance-none",
  //   "border-2",
  //   "border-gray-300",
  //   "checked:bg-blue-500",
  //   "checked:border-blue-500",
  //   "p-2"
  // );

  dayInput.type = "checkbox";
  dayLabel.textContent = day;
  dayLabel.appendChild(dayInput);
  section.appendChild(dayLabel);
});

const montDisplay = document.createElement("h1");
montDisplay.innerHTML = currentMonth;
section.appendChild(montDisplay);

const dayDisplay = document.createElement("h3");
dayDisplay.innerHTML = dayOfWeek;
section.appendChild(dayDisplay);

console.log("Today is:", dayOfWeek);
console.log("Current month is:", currentMonth);
