var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
}

const STORAGE_KEY = 'feedback-form-state';

const FormData = {};

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onDataInput, 500));


refs.form.addEventListener('input', (e) => {
    //console.log(e.currentTarget.name);
    //console.log(e.target.value);
    FormData[e.target.name] = e.target.value;

    const objectData = JSON.stringify(FormData);
    localStorage.setItem(STORAGE_KEY, objectData)

    console.log(FormData);
})

populateTextareaInput();

function onFormSabmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log('Отправляем форму');
    localStorage.removeItem(STORAGE_KEY);
}

function onDataInput(evt) {
    const data = evt.target.value;
    console.log(data);
    localStorage.setItem(STORAGE_KEY, data);
    console.log(localStorage);
}


function populateTextareaInput() {
    const savedDAta = localStorage.getItem(STORAGE_KEY);
    console.log(savedDAta);
    const saveValue = JSON.parse(savedDAta);
    console.log(saveValue);

    /*if (saveValue) {

        refs.form.email.value = saveValue.email;
        refs.form.message.value = saveValue.message;
    }*/
}