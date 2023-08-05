export const login = (onNavigate) => {
  const loginMain = document.createElement('main');
  loginMain.classList.add('loginMain');

  const imageLogin = document.createElement('img');
  imageLogin.classList.add('imageLogin');
  imageLogin.src = '../image/login.png';

  const loginTextDiv = document.createElement('div');
  loginTextDiv.classList.add('loginTextDiv');
  const loginText = document.createElement('h1');
  loginText.classList.add('loginText');

  const formLogin = document.createElement('form');
  formLogin.classList.add('formLogin');
  const sentenceLogin = document.createElement('h2');
  sentenceLogin.classList.add('sentence');
  const emaiLogin = document.createElement('input');
  emaiLogin.classList.add('inputLogin');
  const passwordLogin = document.createElement('input');
  passwordLogin.classList.add('inputLogin');
  const loginButton = document.createElement('button');
  loginButton.classList.add('loginButton');
  const googleButton = document.createElement('button');
  googleButton.classList.add('googleButton');

  const footerLogin = document.createElement('footer');
  footerLogin.classList.add('footerLogin');
  const DontHaveAnAccount = document.createElement('p');
  DontHaveAnAccount.classList.add('pFooterLogin');
  const goToRegister = document.createElement('a');
  goToRegister.classList.add('goToRegister');

  loginText.textContent =
    'Únete a nuestra red de apoyo y reduce el derroche alimentario.';
  sentenceLogin.textContent = '¡Donde come uno, comen dos!';
  emaiLogin.placeholder = 'Correo Electrónico';
  passwordLogin.placeholder = 'Contraseña';
  loginButton.textContent = 'Inicia sesión';
  googleButton.textContent = 'Acceder con Google';
  DontHaveAnAccount.textContent = '¿No tienes una cuenta?';
  goToRegister.textContent = 'Registrate';

  // Se crean los eventos que permitiran la navegación

  loginButton.addEventListener('click', () => {
    onNavigate('/wall');
  });

  goToRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  loginTextDiv.appendChild(loginText);
  formLogin.appendChild(emaiLogin);
  formLogin.appendChild(passwordLogin);
  formLogin.appendChild(loginButton);
  formLogin.appendChild(googleButton);
  footerLogin.appendChild(DontHaveAnAccount);
  footerLogin.appendChild(goToRegister);
  loginMain.appendChild(imageLogin);
  loginMain.appendChild(loginTextDiv);
  loginMain.appendChild(formLogin);
  loginMain.appendChild(footerLogin);

  return loginMain;
};
