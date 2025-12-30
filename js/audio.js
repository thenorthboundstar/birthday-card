/* =====================================
   GLOBAL MUSIC CONTROLLER
   - Plays selected song
   - Persists across all screens
   - Updates timer on card
===================================== */

// Get the audio element
const audio = document.getElementById('bg-music');

// Keep track of which song is playing
let currentSong = null;
let timerInterval = null;

/* =====================================
   PLAY SONG FUNCTION
===================================== */
function playSong(songFile) {

    // If a song is already playing, stop timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Set audio source
    audio.src = `assets/music/${songFile}`;
    audio.loop = true;
    audio.volume = 0.8;

    // Play music
    audio.play();

    // Save song choice so it persists
    localStorage.setItem('selectedSong', songFile);

    // Update currently playing song
    currentSong = songFile;

    // Start timer update
    startTimer(songFile);
}

/* =====================================
   TIMER DISPLAY ON MUSIC CARD
===================================== */
function startTimer(songFile) {

    const cards = document.querySelectorAll('.music-card');

    timerInterval = setInterval(() => {
        cards.forEach(card => {
            const timer = card.querySelector('.timer');
            const cardSong = card.getAttribute('onclick');

            if (cardSong && cardSong.includes(songFile)) {
                timer.textContent = formatTime(audio.currentTime);
            }
        });
    }, 500);
}

/* =====================================
   FORMAT TIME (mm:ss)
===================================== */
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/* =====================================
   RESTORE MUSIC ON PAGE RELOAD
===================================== */
window.addEventListener('load', () => {
    const savedSong = localStorage.getItem('selectedSong');

    if (savedSong) {
        audio.src = `assets/music/${savedSong}`;
        audio.loop = true;
        audio.volume = 0.8;
        audio.play();
        startTimer(savedSong);
    }
});
