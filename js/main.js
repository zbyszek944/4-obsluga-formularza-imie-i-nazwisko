console.log('WARSZTAT OBSŁUGA FORMULARZA IMIE I NAZWISKO');

const submitForm = (event) => {
    event.preventDefault();

    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');
    console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);
}


let form = document.getElementById('form');

form.addEventListener('submit', submitForm);
console.log(form);