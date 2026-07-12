const pswrdBox = document.querySelector('#password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "#$@!^&*(_+){}[]_-"

const allChars = upperCase + lowerCase + number + symbols;
function createPassword(){
    let password = "";
 
 
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    
    while(length > password.length){
    password+=allChars[Math.floor(Math.random()*allChars.length)];
    
    }

    pswrdBox.value = password;
   



}

// const generatePassword = document.querySelector("#generatePassword")
// generatePassword.addEventListener('click',createPassword);


