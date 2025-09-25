// Hide header on scroll down, show on scroll up
let lastScrollY = window.scrollY;
const header = document.querySelector('header');
let ticking = false;

function onScroll() {
  if (!header) return;
  if (window.scrollY > lastScrollY && window.scrollY > 80) {
    // Scrolling down
    header.style.transform = 'translateY(-120%)';
    header.style.transition = 'transform 0.35s cubic-bezier(.4,0,.2,1)';
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
    header.style.transition = 'transform 0.35s cubic-bezier(.4,0,.2,1)';
  }
  lastScrollY = window.scrollY;
  ticking = false;
}

window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(onScroll);
    ticking = true;
  }
});

// Ensure header is visible on page load
if (header) {
  header.style.transform = 'translateY(0)';
}
