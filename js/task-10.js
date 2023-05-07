function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const count = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
let output = document.querySelector('#boxes');


function createBoxes(amount) {
  let startSize = 30;
  let accElements = [];
  for (let index = 0; index < amount; index++) {

    const tempElement = document.createElement('div');
    tempElement.style.backgroundColor = getRandomHexColor();
    tempElement.style.height = `${startSize}px`;
    tempElement.style.width = `${startSize}px`;
    accElements.push(tempElement);

    startSize += 10;
  }

  output.append(...accElements)
}

createBtn.addEventListener('click', () => {
  createBoxes(count.value);
})

destroyBtn.addEventListener('click', () => {
  output.innerHTML = '';
})
