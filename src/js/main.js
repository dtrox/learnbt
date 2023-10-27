import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './../scss/custom-theme.scss'
import './../scss/style.scss'



document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const target = document.querySelector(navbarToggler.getAttribute('data-target'));

  navbarToggler.addEventListener('click', () => {
    if (target.classList.contains('show')) {
      target.classList.remove('show'); // Mobile Navigation schließen
    } else {
      target.classList.add('show'); // Mobile Navigation öffnen
    }
  });
});
