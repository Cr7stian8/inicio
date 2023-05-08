const searchButton = document.querySelector('#barraBusca');
const sessaoLinks = document.querySelector('#sessaoLinks');
const thumb = document.querySelector('.thumbnail-section')
const links = document.querySelector('#outrosProjetos')
const imgGoogle = document.querySelector('#google')

searchButton.addEventListener('focus', () => {
    sessaoLinks.style.display = 'none';
    thumb.style.display = 'none';
    links.style.display = 'none';
    imgGoogle.style.transition = '1000ms';
    imgGoogle.style.transform = 'scale(0.9)';
});
searchButton.addEventListener('blur', () => {
    sessaoLinks.style.display = 'block';
    thumb.style.display = 'inline';
    thumb.style.zIndex = '1';
    links.style.display = 'block';
    imgGoogle.style.transform = 'scale(1)';
    imgGoogle.style.transition = '1000ms';
});

// Verifica se o cookie 'visitas' existe
if (document.cookie.split(';').some((item) => item.trim().startsWith('visitas='))) {
    // Se o cookie existe, recupera seu valor e incrementa
    const visitasAnteriores = parseInt(getCookie('visitas'));
    document.cookie = 'visitas=' + (visitasAnteriores + 1);
  } else {
    // Se o cookie não existe, cria um novo com valor 1
    document.cookie = 'visitas=1';
  }

  // Função para obter o valor de um cookie pelo seu nome
  function getCookie(nome) {
    const valor = `; ${document.cookie}`;
    const partes = valor.split(`; ${nome}=`);
    if (partes.length === 2) return partes.pop().split(';').shift();
  }
  
  const visitas = getCookie('visitas');
  const visitasSpan = document.getElementById('visitas');
  visitasSpan.textContent = visitas;
