const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const imagePath = thumbnail.getAttribute('src');
    document.body.style.backgroundImage = `url(${imagePath})`;
  });
});

const imagensDeFundo = [
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/78f95dc1-4053-42cc-9fc5-dba395962c2c/dc1k2z5-85fea37a-7222-468d-9da2-8614b2417ac8.png/v1/fill/w_1024,h_577,q_80,strp/cristiano_ronaldo_real_madrid_wallpaper_2018_by_artsgfx99_dc1k2z5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc3IiwicGF0aCI6IlwvZlwvNzhmOTVkYzEtNDA1My00MmNjLTlmYzUtZGJhMzk1OTYyYzJjXC9kYzFrMno1LTg1ZmVhMzdhLTcyMjItNDY4ZC05ZGEyLTg2MTRiMjQxN2FjOC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DxI1Knb8QurlWsxWR70G7-9RuGM6IOlUUE8tJhBdUkM',
  'assets/imgs/imagens-minimalistas/2.png',
  'assets/imgs/imagens-minimalistas/5.webp',
];

const indiceAleatorio = Math.floor(Math.random() * imagensDeFundo.length);

const pagina = document.getElementById('pagina');
pagina.style.backgroundImage = `url('${imagensDeFundo[indiceAleatorio]}')`;
