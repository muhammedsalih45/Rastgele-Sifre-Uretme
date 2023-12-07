const passwordButton = document.querySelector('.passButton');
const input = document.querySelector('input');
const copy = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alertContainer');


passwordButton.addEventListener('click',createPassword);

copy.addEventListener('click', copyPassword);

function createPassword() {
  const passwordLength = 14;
  const characters =
    '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   console.log(characters[13]);
  let password = '';
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    password += characters[randomNum];
  }
  input.value = password;
  //   console.log(password);
}


function copyPassword() {
  if (input.value) {
    input.select();
    navigator.clipboard.writeText(input.value);
    alertContainer.classList.remove('active');
    setTimeout(()=>{
      alertContainer.classList.add('active');
    },2000)
  }
}