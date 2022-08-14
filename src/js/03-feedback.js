var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

const STORAGE_KEY = 'feedback-form-state';

const saveValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
//console.log(saveValue);

const FormData = saveValue || {};


refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onDataInput, 500));

populateTextareaInput();

function onFormSabmit(evt) {
    evt.preventDefault();

    console.log(FormData)

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);


    const {
        elements: { email, message }
    } = evt.currentTarget;

    if (email.value === '' || message.value === '') {
        return alert('Пожалуйста, заполните все поля.');
    }
}

function onDataInput(e) {

    FormData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));
}

function populateTextareaInput() {

    if (saveValue) {

        refs.input.value = saveValue.email || '';
        refs.textarea.value = saveValue.message || '';
    }
}
