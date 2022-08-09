
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
    console.log(data);
    //const email = evt.target.value;
    //console.log(email);
    localStorage.setItem('feedback-form-state', data);
}


populateTextareaInput()

refs.form.addEventListener('input', (e) => {
    //console.log(e.currentTarget.name);
    //console.log(e.target.value);
    FormData[e.target.name] = e.target.value;
    //console.log(FormData);
    const objectData = JSON.stringify(FormData);
    localStorage.setItem('feedback-form-state', objectData)
    console.log(localStorage);
    //console.log(refs.form.email);

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

function populateTextareaInput() {
    const saveData = localStorage.getItem('feedback-form-state');
    //const saveValue = JSON.stringify(saveData);
    const saveValue = JSON.parse(saveData);
    console.log(saveValue);

    if (saveValue) {

        refs.form.email.value = saveValue.email;
        refs.form.message.value = saveValue.message;
        //console.log(refs.form.email);
        //console.log(saveData);
        //console.log(saveData);
        //console.log(refs.textarea);
    }
}
