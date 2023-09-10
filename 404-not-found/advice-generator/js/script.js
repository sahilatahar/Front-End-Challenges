const title = document.querySelector('.container__title');
const advice = document.querySelector('.container__advice');
const button = document.querySelector('.container__button');

let loading = false;

const fetchAdvice = () => {
    if (loading) return;
    loading = true;
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            title.textContent = `Advice #${data.slip.id}`;
            advice.textContent = `❝ ${data.slip.advice} ❞`;
        })
        .catch(error => {
            console.log(error);
        })
    loading = false;
}

button.addEventListener('click', fetchAdvice);

fetchAdvice();