const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imagePath = thumbnail.getAttribute('src');
    document.body.style.backgroundImage = `url(${imagePath})`;
  });
});

const imagensDeFundo = [
  'assets/imagensBackground/1.png',
  'assets/imagensBackground/2.png',
  'assets/imagensBackground/3.wepb',
];

const indiceAleatorio = Math.floor(Math.random() * imagensDeFundo.length);

const pagina = document.getElementById('pagina');
pagina.style.backgroundImage = `url('${imagensDeFundo[indiceAleatorio]}')`;