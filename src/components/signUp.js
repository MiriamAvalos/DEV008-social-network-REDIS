
export const signUp = (onNavigate) => {
const signUpDiv = document.createElement('div');
const imgContainerSignUp = document.createElement('div');
imgContainerSignUp.classList.add('imgContainer');
const imageSignUp = document.createElement('img');
imageSignUp.classList.add('imageSignUp');
imageSignUp.src = '../image/signUp.jpg';
const signUpText = document.createElement('h3');


const usersName = document.createElement('input');
const usersEmail = document.createElement('input');
const usersPassword = document.createElement('input');
const termsCheckbox = document.createElement('input');
const termsText = document.createElement('p');
const doYouHaveAnAccount = document.createElement('p');
const signUpButton = document.createElement('button');
const backToLogin = document.createElement('button');

signUpText.textContent = '¡Regístrate!';
termsText.textContent = 'Acepto Términos, Condiciones y política de Privacidad';
termsCheckbox.type = 'checkbox';
doYouHaveAnAccount.textContent = '¿Ya tienes una cuenta?';

usersName.placeholder = 'Nombre y Apellidos';
usersEmail.placeholder = 'Correo Electrónico';
usersPassword.placeholder = 'Contraseña';
signUpButton.textContent = 'Crear cuenta';
backToLogin.textContent = 'Inicia sesión';



backToLogin.addEventListener('click', () => {
  onNavigate('/');
});

signUpButton.addEventListener('click', () => {
  onNavigate('/wall');
});

imgContainerSignUp.appendChild(imageSignUp);
signUpDiv.appendChild(imgContainerSignUp);
signUpDiv.appendChild(signUpText);
signUpDiv.appendChild(usersName);
signUpDiv.appendChild(usersEmail);
signUpDiv.appendChild(usersPassword);
signUpDiv.appendChild(termsCheckbox);
signUpDiv.appendChild(termsText);
signUpDiv.appendChild(signUpButton);
signUpDiv.appendChild(doYouHaveAnAccount);
signUpDiv.appendChild(backToLogin);
return signUpDiv;



}