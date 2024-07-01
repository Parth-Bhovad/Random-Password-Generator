const passwordBox = document.querySelector('#password');
const btn = document.querySelector('button');
const imageCopy = document.querySelector('#imageCopy');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "@#$%^&*()_+~|{}[]<>/-=";
const allChars = upperCase + lowerCase + number + symbol;
let pass = '';



const createPassword = () => {

    const lenght = 12;
    for (let i = 0; i < lenght; i++) {
        pass += allChars[Math.floor(Math.random() * allChars.length)]
    }
    return pass
}



const displayPass = () => {
    passwordBox.value = createPassword();
    pass = '';
}

btn.addEventListener('click', () => {
    displayPass();

});