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