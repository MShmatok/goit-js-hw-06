const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

function counter(event) {
    if (event.currentTarget.dataset.action === 'increment') {
        counterValue += 1;
        value.textContent = counterValue;
        return;
    };
    counterValue -= 1;
    value.textContent = counterValue;
}

incrementBtn.addEventListener('click', counter);
decrementBtn.addEventListener('click', counter);

