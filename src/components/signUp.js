import { onNavigate } from '../main.js';
export const signUp = () => {
  const singUpDiv = document.createElement('div');

  
const signUpButton = document.createElement('button');
const backToLogin = document.createElement('button');

signUpButton.textContent = 'Crear cuenta';
backToLogin.textContent = 'Inicia sesión';

singUpDiv.appendChild(signUpButton);
singUpDiv.appendChild(backToLogin);

backToLogin.addEventListener('click', () => {
  onNavigate('/');
});

signUpButton.addEventListener('click', () => {
  onNavigate('/wall');
});

return singUpDiv;
  
}