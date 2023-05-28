const emailInput = document.getElementById('email__input');
const subscribeForm = document.querySelector('.subscribe__form');
const signUpCard = document.querySelector('.signup__card');
const successCard = document.querySelector('.success__card');
const errorMsg = document.querySelector('.email__error__msg');
const email = document.getElementById('email');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateEmail(emailInput.value)) {
        signUpCard.style.display = 'none';
        email.textContent = emailInput.value;
        successCard.style.display = 'flex';
    } else {
        errorMsg.textContent = 'Valid email required';
        emailInput.style.borderColor = 'var(--clr-tomato)';
        emailInput.parentNode.children[0].style.color = 'var(--clr-tomato)';
    }
});