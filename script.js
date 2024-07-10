// script.js
document.getElementById('heart').addEventListener('click', function() {
    const music = document.getElementById('music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
