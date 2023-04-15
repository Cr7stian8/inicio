var menuIcon = document.querySelector('.menu-icon');
var nav = document.querySelector('nav');

menuIcon.addEventListener('click', function () {
  nav.classList.toggle('show');
});


const icone = document.querySelector('.menu-icon');
icone.addEventListener('click', function () {
  // Adicione ou remova a classe 'girado' do elemento
  if (icone.classList.contains('girando')) {
    icone.classList.remove('girando');
  } else {
    icone.classList.add('girando');
  }
});
