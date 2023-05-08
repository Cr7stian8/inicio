var menuIcon = document.querySelector('.menu-icon');
var nav = document.querySelector('nav');

menuIcon.addEventListener('mouseenter', function () {
  nav.classList.toggle('show');
});


const icone = document.querySelector('.menu-icon');
icone.addEventListener('mouseenter', function () {
  if (icone.classList.contains('girando')) {
    icone.classList.remove('girando');
  } else {
    icone.classList.add('girando');
  }
});
