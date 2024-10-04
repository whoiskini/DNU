// Set the date of the event
const releaseDate = new Date("October 11, 2024 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = releaseDate - now;

  // Time calculations
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result in the corresponding elements
  document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

  // If the countdown is over
  if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "The Mystery is Revealed!";
  }
}

// Update countdown every second
const x = setInterval(updateCountdown, 1000);


