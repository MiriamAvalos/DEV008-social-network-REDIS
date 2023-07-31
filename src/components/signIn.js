// Se crean los elementos de HTML
import { onNavigate } from '../main.js';
export const signIn = () => {

// Se crean los elementos de HTML
  
const signInDiv = document.createElement('div');
signInDiv.classList.add('signInDiv');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('imgContainer');
  const imageSignIn = document.createElement('img');
  imageSignIn.classList.add('imageSignIn');
  imageSignIn.src = '../image/imagesignIn.jpg';
  
  const formSignIn = document.createElement('form');
  formSignIn.classList.add('formSignIn');
  const description = document.createElement('h1');
  description.classList.add('description');
  const sentence = document.createElement('h2');
  sentence.classList.add('sentence');

  const email = document.createElement('input');
  email.classList.add('email');
  const password = document.createElement('input');
  password.classList.add('password');
  const signInButton = document.createElement('button');
  const googleButton = document.createElement('button');
  const dontYouHaveAnAccount = document.createElement('p');
  dontYouHaveAnAccount.classList.add('dontYouHaceAnAccount');
  const signUpButton = document.createElement('button');

  // Se inserta el nombre a los elementos creados
  description.textContent =
    'Únete a nuestra red de apoyo y reduce el derroche alimentario.';
  email.placeholder = 'Correo Electrónico';
  password.placeholder = 'Contraseña';
  signInButton.textContent = 'Inicia sesión';
  googleButton.textContent = 'Acceder con Google';
  dontYouHaveAnAccount.textContent = '¿No tienes una cuenta?';
  signUpButton.textContent = 'Registrate';

// Se crean los eventos que permitiran la navegación

signInButton.addEventListener('click', () => {
  onNavigate('/wall');
});

signUpButton.addEventListener('click', () => {
    onNavigate('/signup');
  });


  // Se insertan los hijos
  formSignIn.appendChild(email);
  formSignIn.appendChild(password);
  formSignIn.appendChild(signInButton);
  formSignIn.appendChild(googleButton);
  formSignIn.appendChild(dontYouHaveAnAccount);
  formSignIn.appendChild(signUpButton);
  imgContainer.appendChild(imageSignIn);
  signInDiv.appendChild(imgContainer);
  signInDiv.appendChild(description);
  signInDiv.appendChild(formSignIn);

return signInDiv;

}