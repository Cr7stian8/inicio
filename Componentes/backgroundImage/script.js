const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imagePath = thumbnail.getAttribute('src');
    document.body.style.backgroundImage = `url(${imagePath})`;
  });
});

const imagensDeFundo = [
  'assets/imgs/imagens-minimalistas/1.png',
  'assets/imgs/imagens-minimalistas/2.png',
  'assets/imgs/imagens-minimalistas/3.png',
  'assets/imgs/imagens-minimalistas/4.jpeg',
  'assets/imgs/imagens-minimalistas/5.webp',
];

const indiceAleatorio = Math.floor(Math.random() * imagensDeFundo.length);

const pagina = document.getElementById('pagina');
pagina.style.backgroundImage = `url('${imagensDeFundo[indiceAleatorio]}')`;
