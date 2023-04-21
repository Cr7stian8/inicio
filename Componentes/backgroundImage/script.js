const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imagePath = thumbnail.getAttribute('src');
    document.body.style.backgroundImage = `url(${imagePath})`;
  });
});

const imagensDeFundo = [
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f198cb1-b792-4fe7-b6bb-b3ad50b2e75f/dfsi669-924c478e-be14-4d87-bf5e-2fc1bd11f4b3.png/v1/fill/w_1194,h_669,q_70,strp/f2u_image_530_by_flyingcarpets_dfsi669-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE2IiwicGF0aCI6IlwvZlwvMGYxOThjYjEtYjc5Mi00ZmU3LWI2YmItYjNhZDUwYjJlNzVmXC9kZnNpNjY5LTkyNGM0NzhlLWJlMTQtNGQ4Ny1iZjVlLTJmYzFiZDExZjRiMy5wbmciLCJ3aWR0aCI6Ijw9MTQ1NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MKDEg5t6ou8VbNhlJaiWtggoFudIVq4IL_9UEQE2gBM',
  'assets/imgs/imagens-minimalistas/2.png',
  'assets/imgs/imagens-minimalistas/5.webp',
];

const indiceAleatorio = Math.floor(Math.random() * imagensDeFundo.length);

const pagina = document.getElementById('pagina');
pagina.style.backgroundImage = `url('${imagensDeFundo[indiceAleatorio]}')`;
