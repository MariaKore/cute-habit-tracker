/* GET THE DATE */
var date = new Date(); // create an instance of a Date object
console.log(date); // print the date to the console

/* EXTRACT THE CURRENT DATE INFO */
var currentMonth = date.getMonth();
var currentDay = date.getDay();
var currentDate = date.getDate();
var currentYear = date.getFullYear ();

console.log("The current month is" + currentMonth); // current month - 1 
console.log("The current weekday is" + currentDay); // day of the week
console.log("The current date is" + currentDate); // current date/number
console.log("The current year is" + currentYear); // current year

/* IMPORTANT DATE INFO */
var months = [
    "January", // 0 
    "February", // 1
    "March", // 2
    "April", // 3 <-- curent
    "May", // 4
    "June", // 5
    "July", // 6
    "August", // 7
    "September", // 8
    "October", // 9
    "November", // 10
    "December" // 11
];

/* SET THE CORRECT MONTH */
var title = document.getElementById("title");
title.innerHTML = "🌸🩷⭐✨" + months[currentMonth] + "✨⭐🩷🌸";

/* UPDATE THE CALENDAR  INFO */
var habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function () {
    let habits = prompt("Whats your habit", habitTitle.innerHTML); 
    if(habits.length == 0){ // if they didn't type anything
        habitTitle.innerHTML = "Click to set your habit";
    } else { // update the habit to show what they typed
            habitTitle.innerHTML = habits;
    }
}

/* SET THE TOTAL DAYS */
var daysInTheMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysInThisMonth = daysInTheMonthList[currentMonth];
// Ex. 5th index => 6th month => June => 30 days

var daysCompleted = 0;
var totalDays = document.getElementById("totalDays");
totalDays.innerHTML = "0/" + daysInThisMonth; // update the fraction 

/* SETUP THE CALENDAR DAYS */
var dayCount = 0;
var days = document.getElementsByClassName("days");

for (var i = 0; i < days.length; i++) {
    var day = days[i].getElementsByClassName("day");

    for (var j = 0; j < day.length; j++) {

        // highlight today's date
        if (dayCount == currentDate - 1) {
            day[j].style.border = "2px solid black";
        }

        // fill in the calendar numbers
        if (dayCount < daysInThisMonth) {
            day[j].innerHTML = dayCount + 1;
            day[j].id = "day" + (dayCount + 1);
            dayCount++;
        } else {
            day[j].innerHTML = "";
            day[j].style.backgroundColor = "white";
        }
    }
}

/* MAKE DAYS CLICKABLE */
for (let d = 1; d <= daysInThisMonth; d++) {
    let box = document.getElementById("day" + d);

    box.onclick = function () {
        if (box.classList.contains("done")) {
            box.classList.remove("done");
            daysCompleted--;
            box.style.backgroundColor = "pink";
        } else {
            box.classList.add("done");
            daysCompleted++;
            box.style.backgroundColor = "lightgreen";
        }

        totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;
    }
}

/* RESET BUTTON */
var resetButton = document.getElementById("resetButton");

resetButton.onclick = function () {
    daysCompleted = 0;
    totalDays.innerHTML = "0/" + daysInThisMonth;

    for (let d = 1; d <= daysInThisMonth; d++) {
        let box = document.getElementById("day" + d);
        box.classList.remove("done");
        box.style.backgroundColor = "pink";
    }
}
