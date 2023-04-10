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
];

const indiceAleatorio = Math.floor(Math.random() * imagensDeFundo.length);

const pagina = document.getElementById('pagina');
pagina.style.backgroundImage = `url('${imagensDeFundo[indiceAleatorio]}')`;
pagina.style.backgroundSize = 'cover'; // exemplo
pagina.style.backgroundRepeat = 'no-repeat'; // exemplo
pagina.style.backgroundPosition = 'center center'; // exemplo
// 