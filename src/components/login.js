// Se crean los elementos de HTML

export const login = (onNavigate) => {

// Se crean los elementos de HTML
  
const loginDiv = document.createElement('div');
loginDiv.classList.add('signInDiv');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('imgContainer');
  const imageLogin = document.createElement('img');
  imageLogin.classList.add('imageSignIn');
  imageLogin.src = '../image/imagesignIn.jpg';
  
  const formLogin = document.createElement('form');
  formLogin.classList.add('formSignIn');
  const description = document.createElement('h1');
  description.classList.add('description');
  const sentence = document.createElement('h2');
  sentence.classList.add('sentence');

  const email = document.createElement('input');
  email.classList.add('email');
  const password = document.createElement('input');
  password.classList.add('password');
  const loginButton = document.createElement('button');
  const googleButton = document.createElement('button');
  const dontYouHaveAnAccount = document.createElement('p');
  dontYouHaveAnAccount.classList.add('dontYouHaceAnAccount');
  const signUpButton = document.createElement('button');

  // Se inserta el nombre a los elementos creados
  description.textContent =
    'Únete a nuestra red de apoyo y reduce el derroche alimentario.';
  email.placeholder = 'Correo Electrónico';
  password.placeholder = 'Contraseña';
  loginButton.textContent = 'Inicia sesión';
  googleButton.textContent = 'Acceder con Google';
  dontYouHaveAnAccount.textContent = '¿No tienes una cuenta?';
  signUpButton.textContent = 'Registrate';

// Se crean los eventos que permitiran la navegación

loginButton.addEventListener('click', () => {
  onNavigate('/wall');
});

signUpButton.addEventListener('click', () => {
    onNavigate('/register');
  });


  // Se insertan los hijos
  formLogin.appendChild(email);
  formLogin.appendChild(password);
  formLogin.appendChild(loginButton);
  formLogin.appendChild(googleButton);
  formLogin.appendChild(dontYouHaveAnAccount);
  formLogin.appendChild(signUpButton);
  imgContainer.appendChild(imageLogin);
  loginDiv.appendChild(imgContainer);
  loginDiv.appendChild(description);
  loginDiv.appendChild(formLogin);

return loginDiv;

}