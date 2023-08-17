import { signInUserNew } from '../lib/authUser';

export const login = (onNavigate) => {
  const loginMain = document.createElement('main');
  loginMain.classList.add('MainComponents');

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
  emaiLogin.classList.add('emaiLogin');
  const passwordLogin = document.createElement('input');
  passwordLogin.classList.add('inputLogin');
  passwordLogin.classList.add('passwordLogin');
  const loginButton = document.createElement('button');
  loginButton.classList.add('loginButton');
  const googleButton = document.createElement('button');

  googleButton.classList.add('googleButton');
  const imageGoogle = document.createElement('img');
  imageGoogle.classList.add('imageGoogle');
  imageGoogle.src = '../image/google.png';

  const footerLogin = document.createElement('footer');
  footerLogin.classList.add('footerLogin');
  const DontHaveAnAccount = document.createElement('p');
  DontHaveAnAccount.classList.add('pFooterLogin');
  const goToRegister = document.createElement('a');
  goToRegister.classList.add('goToRegister');

  loginText.textContent = '"Únete a nuestra red de apoyo y reduce el derroche alimentario."';
  sentenceLogin.textContent = '¡Donde come uno, comen dos!';
  emaiLogin.placeholder = 'Correo Electrónico';
  passwordLogin.placeholder = 'Contraseña';
  loginButton.textContent = 'Inicia sesión';
  googleButton.textContent = 'Acceder con Google';
  const ErrorLogin = document.createElement('div');
  ErrorLogin.classList.add('ErrorRegisterLogin');
  DontHaveAnAccount.textContent = '¿No tienes una cuenta?';
  goToRegister.textContent = 'Registrate';

  // Reemplazar elementos de contraseña por *
  passwordLogin.addEventListener('keyup', (e) => {
    const valueInputPasswordLogin = e.target.value;
    passwordLogin.value = valueInputPasswordLogin.replace(/\w/g, '•');
  });

  // Se crean los eventos que permitiran la navegación
  goToRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    signInUserNew(emaiLogin.value, passwordLogin.value).then((userCredential) => {
      onNavigate('/wall');
    }).catch((error) => {
      // Eliminar mensaje de error anterior, si existe
      const textErrorRemoveLogin = document.querySelector('.textErrorRegisterLogin');
      if (textErrorRemoveLogin) {
        ErrorLogin.removeChild(textErrorRemoveLogin);
      }

      const textErrorLogin = document.createElement('p');
      textErrorLogin.classList.add('textErrorRegisterLogin');

      if (error.code === 'auth/invalid-email') {
        textErrorLogin.textContent = 'Por favor, ingresa una dirección de correo válida.';
      } else if (error.code === 'auth/wrong-password') {
        textErrorLogin.textContent = 'Contraseña inválida';
      } else if (error.code === 'auth/user-not-found') {
        textErrorLogin.textContent = 'Usuario no encontrado, verifique su correo y contraseña.';
      } else if (error.code === 'auth/missing-password') {
        textErrorLogin.textContent = 'Por favor, ingrese su contraseña.';
      }
      ErrorLogin.appendChild(textErrorLogin);
      // console.log("Error code:", error.code);
    });
  });

  loginTextDiv.appendChild(loginText);
  formLogin.appendChild(emaiLogin);
  formLogin.appendChild(passwordLogin);
  formLogin.appendChild(loginButton);
  formLogin.appendChild(googleButton);
  googleButton.appendChild(imageGoogle);
  // insertar primero icono y despues texto, utilice  flex-direction: row-reverse; en CSS pero insertBefore lo resuelve.
  // googleButton.insertBefore(imageGoogle, googleButton.firstChild);
  footerLogin.appendChild(DontHaveAnAccount);
  footerLogin.appendChild(goToRegister);
  loginMain.appendChild(imageLogin);
  loginMain.appendChild(loginTextDiv);
  loginMain.appendChild(sentenceLogin);
  loginMain.appendChild(formLogin);
  loginMain.appendChild(ErrorLogin);
  loginMain.appendChild(footerLogin);

  return loginMain;
};
