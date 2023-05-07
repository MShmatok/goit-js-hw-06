const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.children.length}`);
console.log('');

Array.from(categories.children).forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);

    console.log(`Elements: ${element.lastElementChild.children.length}`);

    console.log('');
});