// Declare global variables.

const hourHand = document.querySelector("#hour_hand");
const hourSpan = document.querySelector("#hour_hand .current_time");
const minuteHand = document.querySelector("#minute_hand");
const minuteSpan = document.querySelector("#minute_hand .current_time");
const secondHand = document.querySelector("#second_hand");
const secondSpan = document.querySelector("#second_hand .current_time");

// Declare functions.

function setDate() {
  // Create a new Date object with the current date & time.
  const currentTime = new Date();
  // Increment clock's second hand.
  const second = currentTime.getSeconds();
  const secondDegrees = (second / 60) * 360 + 90;
  if (secondDegrees === 90) {
    secondHand.style.transition = "none";
    secondHand.setAttribute("title", `${second}`);
    secondHand.dataset.second = second;
    secondSpan.innerHTML = second;
    console.log("Removed transition at top of clock.");
  } else {
    secondHand.style.transition =
      "rotate 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    secondHand.setAttribute("title", `${second}`);
    secondHand.dataset.second = second;
    secondSpan.innerHTML = second;
  }
  // Increment clock's minute hand.
  const minute = currentTime.getMinutes();
  const minuteDegrees = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  minuteHand.setAttribute("title", `${minute}`);
  minuteHand.dataset.minute = minute;
  minuteSpan.innerHTML = minute;
  // Increment clock's hour hand.
  const hour = currentTime.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  // De-militarize hour hand.
  if (hour > 12) {
    hourHand.setAttribute("title", `${hour}` - 12);
    hourHand.dataset.hour = hour - 12;
    hourSpan.innerHTML = hour - 12;
  } else {
    hourHand.setAttribute("title", `${hour}`);
    hourHand.dataset.hour = hour;
    hourSpan.innerHTML = hour;
  }
}

// Use setInterval to run setDate() every 1 seconds.

setInterval(setDate, 1000);
