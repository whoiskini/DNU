// Attempt to play the music when the user interacts with the page
window.addEventListener('load', function() {
    var audio = document.getElementById('bg-music');
    var invisibleButton = document.getElementById('invisible-button');
    
    // Function to play audio
    function playAudio() {
        audio.play();
        invisibleButton.style.display = 'none'; // Hide the invisible button after interaction
    }

    // Listen for click or touch event on the invisible button
    invisibleButton.addEventListener('click', playAudio);
    invisibleButton.addEventListener('touchstart', playAudio);
});

// Countdown timer logic
var countdownDate = new Date("Oct 11, 2024 00:00:00").getTime();

var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "The Mystery is Revealed!";
    }
}, 1000);
