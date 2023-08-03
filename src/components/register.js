
export const register = (onNavigate) => {
const registerMain = document.createElement('main'); //div padre



const imageRegister = document.createElement('img');
imageRegister.classList.add('imageRegister'); //imagen que se inserta en main
imageRegister.src = '../image/imageRegister.jpg';

const registerTextDiv = document.createElement('div'); //div h2
const registerText = document.createElement('h3'); //texto de registrate para header

const formRegister = document.createElement('form');
formRegister.classList.add('formRegister');
const usersName = document.createElement('input'); //nombre usuario
const usersEmail = document.createElement('input'); //correo
const usersPassword = document.createElement('input'); //contraseña
const termsCheckbox = document.createElement('input');  //cuadrito de selección
const termsText = document.createElement('p');   //acepto terminos y condiciones
const registerButton = document.createElement('button');  //crear cuenta

const footerRegister = document.createElement('footer');
const doYouHaveAnAccount = document.createElement('p'); //ya tienes una cuenta?
const backToLogin = document.createElement('button');  //ir de nuevo a iniciar sesión

registerText.textContent = '¡Regístrate!';
usersName.placeholder = 'Nombre y Apellidos';
usersEmail.placeholder = 'Correo Electrónico';
usersPassword.placeholder = 'Contraseña';
termsCheckbox.type = 'checkbox';
termsText.textContent = 'Acepto Términos, Condiciones y política de Privacidad';
registerButton.textContent = 'Crear cuenta';
doYouHaveAnAccount.textContent = '¿Ya tienes una cuenta?';
backToLogin.textContent = 'Inicia sesión';


backToLogin.addEventListener('click', () => {
  onNavigate('/');
});

registerButton.addEventListener('click', () => {
  onNavigate('/wall');
});

registerTextDiv.appendChild(registerText);
formRegister.appendChild(usersName);
formRegister.appendChild(usersEmail);
formRegister.appendChild(usersPassword);
formRegister.appendChild(termsCheckbox);
formRegister.appendChild(termsText);
formRegister.appendChild(registerButton);
footerRegister.appendChild(doYouHaveAnAccount);
footerRegister.appendChild(backToLogin);
registerMain.appendChild(imageRegister);
registerMain.appendChild(registerTextDiv);
registerMain.appendChild(formRegister);
registerMain.appendChild(footerRegister);

return registerMain;

}