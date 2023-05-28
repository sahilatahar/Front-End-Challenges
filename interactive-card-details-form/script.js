const cardForm = document.querySelector('.card__form');
const holderInput = document.getElementById('card__holder__input');
const nameError = document.querySelector('.name__error__msg');
const cardNumInput = document.getElementById('card__number__input');
const cardNumError = document.querySelector('.number__error__msg');
const expiryMMInput = document.getElementById('expiry__month__input');
const expiryYYInput = document.getElementById('expiry__year__input');
const expiryError = document.querySelector('.expiry__error__msg');
const cvcInput = document.getElementById('cvc__number__input');
const cvcError = document.querySelector('.cvc_number__error__msg');
const cardNumber = document.getElementById('card__number');
const holderName = document.getElementById('holder__name');
const expiryDate = document.getElementById('expiry__date');
const cvcNum = document.getElementById('cvc__number');
const completeContainer = document.querySelector('.complete__container');

// Updating Card Holder Name on Input
holderInput.addEventListener('input', (e) => {
    holderName.textContent = holderInput.value;
});

// Updating Card Number on Input
cardNumInput.addEventListener('input', (e) => {
    let num = '';
    let input = cardNumInput.value;
    let length = input.length;
    for (let i = 0; i < 16; i++) {
        num += typeof input[i] === 'undefined' ? '0' : input[i];
        if ((i + 1) % 4 === 0) {
            num += ' ';
        }
    }
    cardNumber.textContent = num;
});

const onExpiryInput = (e) => {
    expiryDate.textContent = `${expiryMMInput.value}/${expiryYYInput.value}`;
}

// Updating Expiry Date on Input
expiryMMInput.addEventListener('input', onExpiryInput);
expiryYYInput.addEventListener('input', onExpiryInput);

cvcInput.addEventListener('input', (e) => {
    cvcNum.textContent = cvcInput.value;
});

const manageBorder = (e, action) => {
    if (action === 'add') {
        e.style.borderColor = 'var(--red)';
    } else {
        e.style.borderColor = 'var(--light-grayish-violet)';
    }
}

const validateName = (name) => {
    if (name.length <= 0) {
        nameError.textContent = 'Can\'t be blank';
        manageBorder(holderInput, 'add');
        return false;
    } else {
        nameError.textContent = '';
        manageBorder(holderInput, 'remove');
        return true;
    }
}

const validateCardNum = (num) => {
    console.log(typeof num)
    let regex = /^[0-9]+$/;
    if (num.length <= 0) {
        cardNumError.textContent = 'Can\'t be blank';
        manageBorder(cardNumInput, 'add');
        return false;
    }
    if (num.length > 16 || num.length < 16) {
        cardNumError.textContent = 'Can\'t less or more than 16 digits';
        manageBorder(cardNumInput, 'add');
        return false;
    } else if (!regex.test(num)) {
        cardNumError.textContent = 'Wrong format, numbers only';
        manageBorder(cardNumInput, 'add');
        return false;
    } else {
        cardNumError.textContent = '';
        manageBorder(cardNumInput, 'remove');
        return true;
    }
}

const validateExpiry = (MM, YY) => {

    MM.length <= 0 || MM.length > 12 || MM.length > 2 ? manageBorder(expiryMMInput, 'add') : manageBorder(expiryMMInput, 'remove');
    YY.length <= 0 || YY.length > 2 ? manageBorder(expiryYYInput, 'add') : manageBorder(expiryYYInput, 'remove');
    if (MM.length <= 0 || YY.length <= 0) {
        expiryError.textContent = 'Can\'t be blank';
        return false;
    } else if (MM <= 0 || MM > 12 | MM.length > 2 || YY.length > 2) {
        expiryError.textContent = 'Invalid Date';
        return false;
    } else {
        expiryError.textContent = '';
        manageBorder(expiryMMInput, 'remove');
        manageBorder(expiryYYInput, 'remove');
        return true;
    }
}

const validateCVC = (cvcNum) => {
    if (cvcNum.length <= 0) {
        cvcError.textContent = 'Can\'t be blank';
        manageBorder(cvcInput, 'add');
        return false;
    } else if (cvcNum.length > 3) {
        cvcError.textContent = 'Can\'t more than 3 digits';
        manageBorder(cvcInput, 'add');
        return false;
    } else {
        cvcError.textContent = '';
        manageBorder(cvcInput, 'remove');
        return true;
    }
}

cardForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValidate = validateName(holderInput.value) && validateCardNum(cardNumInput.value) && validateExpiry(expiryMMInput.value, expiryYYInput.value) && validateCVC(cvcInput.value);

    if (isFormValidate) {
        cardForm.style.display = 'none';
        completeContainer.style.display = 'flex';
    }
});


