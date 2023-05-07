const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені');
        return;
    }

    const resultObj = {
        [email.name]: email.value,
        [password.name]: password.value,
    }

    console.dir(resultObj);

    event.currentTarget.reset();
    return;


}
