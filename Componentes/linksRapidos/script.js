// Obtém o link e o modal
var link = document.getElementById('link');
var modal = document.getElementById('myModal');

// Quando o link é clicado, mostra o modal
link.onclick = function() {
  modal.style.display = 'block';
};

// Quando o botão de enviar é clicado, verifica a senha
var submit = document.getElementById('submit');
submit.onclick = function() {
  var password = document.getElementById('password').value;
  if (password === '0000') {
    window.location.href = 'https://contastp.vercel.app/';
    modal.style.display = 'none';
  } else {
    alert('Errou ... !');
  }
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
