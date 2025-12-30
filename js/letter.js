/* =====================================
   LETTER & ENVELOPE INTERACTION
===================================== */

const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

// Track letter state
let isLetterOpen = false;

/* =====================================
   OPEN / CLOSE LETTER
===================================== */
function openLetter() {

    // Paper rustle sound
    const paperSound = new Audio('assets/soundeffects/paperrustle.aiff');
    paperSound.volume = 0.5;
    paperSound.play();

    if (!isLetterOpen) {
        // OPEN LETTER
        envelope.classList.add('open');
        letter.classList.add('show');
        isLetterOpen = true;
    } else {
        // CLOSE LETTER
        envelope.classList.remove('open');
        letter.classList.remove('show');
        isLetterOpen = false;
    }
}
