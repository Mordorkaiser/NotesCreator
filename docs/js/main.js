// Minimal JS for navigation toggle and small enhancements.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }
});
