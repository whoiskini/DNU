// Attempt to play the music once the page is loaded
window.addEventListener('load', function() {
    var audio = document.getElementById('bg-music');
    
    // Try to play the audio immediately
    var playPromise = audio.play();

    // If the autoplay fails, listen for user interaction to start playback
    if (playPromise !== undefined) {
        playPromise.then(function() {
            // Autoplay started successfully
        }).catch(function() {
            // Autoplay was prevented, so wait for user interaction
            window.addEventListener('click', function() {
                audio.play();
            });
        });
    }
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
