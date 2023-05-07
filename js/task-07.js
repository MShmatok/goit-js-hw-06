const controlBtn = document.querySelector('#font-size-control')
const text = document.querySelector('#text');
text.style.fontSize = `${controlBtn.value}px`;

controlBtn.addEventListener('input', (event) => {

    text.style.fontSize = `${event.currentTarget.value}px`;

})
