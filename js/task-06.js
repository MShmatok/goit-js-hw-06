const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
    event.currentTarget.classList.remove('valid', 'invalid');
    if (Number(event.currentTarget.dataset.length) === event.currentTarget.value.length) {
        event.currentTarget.classList.add('valid');
        return;
    };
    event.currentTarget.classList.add('invalid');
    return;
})