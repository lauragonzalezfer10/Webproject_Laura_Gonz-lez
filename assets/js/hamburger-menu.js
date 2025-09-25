// Hamburger menu toggle for nav

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', function() {
    nav.classList.toggle('nav-open');
    hamburger.classList.toggle('is-active');
  });

  // Optional: close menu when clicking a link (for single page UX)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      hamburger.classList.remove('is-active');
    });
  });
});
