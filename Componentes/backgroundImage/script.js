const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imagePath = thumbnail.getAttribute('src');
    document.body.style.backgroundImage = `url(${imagePath})`;
  });
});

const imagensDeFundo = [
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cfdd8d93-55a1-4533-992c-6ce766867e07/dfu8rcp-f505075b-c574-4e04-bcac-e16320a1411f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmZGQ4ZDkzLTU1YTEtNDUzMy05OTJjLTZjZTc2Njg2N2UwN1wvZGZ1OHJjcC1mNTA1MDc1Yi1jNTc0LTRlMDQtYmNhYy1lMTYzMjBhMTQxMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.25exC-q1jW0Mgj11cDCd9ocpD_N9lPBqDyy6kIS1jN8.MKDEg5t6ou8VbNhlJaiWtggoFudIVq4IL_9UEQE2gBM',
  'assets/imgs/imagens-minimalistas/2.png',
  'assets/imgs/imagens-minimalistas/5.webp',
];

const indiceAleatorio = Math.floor(Math.random() * imagensDeFundo.length);

const pagina = document.getElementById('pagina');
pagina.style.backgroundImage = `url('${imagensDeFundo[indiceAleatorio]}')`;
