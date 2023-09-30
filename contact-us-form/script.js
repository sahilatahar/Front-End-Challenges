const form = document.getElementById('form');
const main = document.querySelector('main');
const thanksDiv = document.querySelector('.thanks-div');

form.onsubmit = function (e) {
    e.preventDefault();
    console.log('Form submitted');
    main.style.display = 'none';
    thanksDiv.style.display = 'flex';
}