
const refs = {
    form: document.querySelector('.feedback-form'),
    //input: document.querySelector('input'),
    //textarea: document.querySelector('textarea')
}

//const form = document.querySelector('.feedback-form');

const FormData = {};

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', onTextareaInput);
//refs.textarea.addEventListener('input', onTextareaInput);

function onTextareaInput(evt) {
    const data = evt.target.value;
    //console.log(data);
    //const email = evt.target.value;
    //console.log(email);
    localStorage.setItem('feedback-form-state', data);
}


populateTextarea()

refs.form.addEventListener('input', (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    FormData[e.target.name] = e.target.value;
    //console.log(FormData);
    const objectData = JSON.stringify(FormData);
    localStorage.setItem('feedback-form-state', objectData)
    console.log(localStorage);
    console.log(refs.form.email);

    /*const saveData = localStorage.getItem('feedback-form-state');
    const saveValue = JSON.parse(saveData);

    if (saveValue) {
        console.log(saveValue);

        refs.form.email = saveValue;
        refs.form.message = saveValue;
    }*/
})

function onFormSabmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log('Отправляем форму');
    localStorage.removeItem('feedback-form-state');
}

function populateTextarea() {
    const saveData = localStorage.getItem('feedback-form-state');
    //const saveValue = JSON.parse(saveData);

    if (saveData) {
        console.log(saveData);

        refs.form.value = saveData.email;
        refs.form.value = saveData.message;
    }
}
