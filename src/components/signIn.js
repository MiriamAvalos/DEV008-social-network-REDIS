// Se crean los elementos de HTML
import { onNavigate } from '../main.js';
export const signIn = () => {

  
const signInDiv = document.createElement('div');

const signUpButton = document.createElement('button');
const signInButton = document.createElement('button');

signUpButton.textContent = 'Registrate';
signInButton.textContent = 'Inicia sesión';

signUpButton.addEventListener('click', () => {
    onNavigate('/signup');
  });

  signInButton.addEventListener('click', () => {
    onNavigate('/wall');
  });

signInDiv.appendChild(signUpButton);
signInDiv.appendChild(signInButton);

return signInDiv;

}