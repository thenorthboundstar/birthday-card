/* =====================================
   APP NAVIGATION LOGIC
   Controls which screen is visible
===================================== */

// Get all screens
const screens = document.querySelectorAll('.screen');

// Track current screen index
let currentScreen = 0;

// Show the first screen on load
screens[currentScreen].classList.add('active');

/* =====================================
   GO TO NEXT SCREEN
===================================== */
function goNextScreen() {
    // Hide current screen
    screens[currentScreen].classList.remove('active');

    // Move to next screen
    currentScreen++;

    // Safety check (don’t go out of bounds)
    if (currentScreen >= screens.length) {
        currentScreen = screens.length - 1;
    }

    // Show next screen
    screens[currentScreen].classList.add('active');
}

/* =====================================
   FINAL DATE DISPLAY
===================================== */
function showFinalDate() {
    const dateElement = document.getElementById('final-date');

    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    dateElement.textContent = today.toLocaleDateString(undefined, options);
}

// Automatically show date when reaching last screen
const observer = new MutationObserver(() => {
    if (screens[currentScreen].id === 'screen-end') {
        showFinalDate();
    }
});

observer.observe(document.body, { childList: true, subtree: true });
