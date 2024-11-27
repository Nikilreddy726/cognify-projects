const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle navigation visibility
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
