var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
}

const STORAGE_KEY = 'feedback-form-state';

const FormData = {};

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onDataInput, 500));

populateTextareaInput();

function onFormSabmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();

    console.log('Отправляем форму');

    localStorage.removeItem(STORAGE_KEY);
}

function onDataInput(e) {

    FormData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));
}

function populateTextareaInput() {

    const saveValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(saveValue);

    if (saveValue) {

        refs.form.email.value = saveValue.email;
        refs.form.message.value = saveValue.message;
    }
}
