/* =====================================
   PHOTO GALLERY INTERACTION
===================================== */

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-grid img');

// Create fullscreen overlay
const overlay = document.createElement('div');
overlay.id = 'gallery-overlay';
document.body.appendChild(overlay);

// Style overlay (JS-injected so you don’t edit CSS)
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'rgba(0, 0, 0, 0.8)';
overlay.style.display = 'none';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.zIndex = '999';

// Fullscreen image
const fullImg = document.createElement('img');
overlay.appendChild(fullImg);

fullImg.style.maxWidth = '90%';
fullImg.style.maxHeight = '90%';
fullImg.style.borderRadius = '20px';
fullImg.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';

/* =====================================
   OPEN IMAGE FULLSCREEN
===================================== */

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        fullImg.src = img.src;
        overlay.style.display = 'flex';
    });
});

/* =====================================
   CLOSE ON TAP
===================================== */

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});
