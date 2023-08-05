export const register = (onNavigate) => {
  const registerMain = document.createElement('main');
  registerMain.classList.add('MainComponents');

  const imageRegister = document.createElement('img');
  imageRegister.classList.add('imageRegister');
  imageRegister.src = '../image/imageRegister.png';

  const registerTextDiv = document.createElement('div');
  registerTextDiv.classList.add('registerTextDiv');
  const registerText = document.createElement('h3');

  const formRegister = document.createElement('form');
  formRegister.classList.add('formRegister');
  const usersName = document.createElement('input');
  usersName.classList.add('inputRegister');
  const usersEmail = document.createElement('input');
  usersEmail.classList.add('inputRegister');
  const usersPassword = document.createElement('input');
  usersPassword.classList.add('inputRegister');
  const termsDiv = document.createElement('div');
  termsDiv.classList.add('termsDiv');
  const termsCheckbox = document.createElement('input');
  termsCheckbox.classList.add('termsCheckBox');
  const termsText = document.createElement('label');
  termsText.classList.add('pTerms');
  const privacyText = document.createElement('a');
  privacyText.classList.add('privacyText');

  const registerButton = document.createElement('button');
  registerButton.classList.add('registerButton');
  const footerRegister = document.createElement('footer');
  footerRegister.classList.add('footerRegister');
  const doYouHaveAnAccount = document.createElement('p');
  doYouHaveAnAccount.classList.add('pFooter');
  const backToLogin = document.createElement('a');
  backToLogin.classList.add('backToLogin');

  registerText.textContent = '¡Regístrate!';
  usersName.placeholder = 'Nombre y Apellidos';
  usersEmail.placeholder = 'Correo Electrónico';
  usersPassword.placeholder = 'Contraseña';
  termsCheckbox.type = 'checkbox';
  termsText.textContent = 'Acepto los';
  privacyText.textContent = ' Términos, Condiciones y Política de Privacidad.';
  registerButton.textContent = 'Crear cuenta';
  doYouHaveAnAccount.textContent = '¿Ya tienes una cuenta?';
  backToLogin.textContent = ' Inicia sesión';

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
  termsDiv.appendChild(termsCheckbox);
  termsDiv.appendChild(termsText);
  formRegister.appendChild(termsDiv);
  formRegister.appendChild(registerButton);
  termsText.appendChild(privacyText);
  footerRegister.appendChild(doYouHaveAnAccount);
  footerRegister.appendChild(backToLogin);
  registerMain.appendChild(imageRegister);
  registerMain.appendChild(registerTextDiv);
  registerMain.appendChild(formRegister);
  registerMain.appendChild(footerRegister);

  return registerMain;
};
