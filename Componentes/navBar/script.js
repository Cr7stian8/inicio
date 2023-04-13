var menuIcon = document.querySelector('.menu-icon');
var nav = document.querySelector('nav');

menuIcon.addEventListener('click', function() {
  nav.classList.toggle('show');
});
