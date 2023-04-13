const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imagePath = thumbnail.getAttribute('src');
    document.body.style.backgroundImage = `url(${imagePath})`;
  });
});

const imagensDeFundo = [
  'https://static.vecteezy.com/ti/vetor-gratis/p1/9169455-ceu-dourado-por-do-sol-na-costa-natureza-paisagem-vetor.jpg',
  'assets/imgs/imagens-minimalistas/2.png',
  'https://static.vecteezy.com/ti/vetor-gratis/p1/4865260-minimalista-nebuloso-manha-montanha-paisagem-ilustracao-vetor.jpg',
  'assets/imgs/imagens-minimalistas/4.jpeg',
  'assets/imgs/imagens-minimalistas/5.webp',
];

const indiceAleatorio = Math.floor(Math.random() * imagensDeFundo.length);

const pagina = document.getElementById('pagina');
pagina.style.backgroundImage = `url('${imagensDeFundo[indiceAleatorio]}')`;
