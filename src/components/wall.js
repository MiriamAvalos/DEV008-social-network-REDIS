import { onNavigate } from '../main.js';
export const wall = () => {

const wallDiv = document.createElement('div');
const signOutButton = document.createElement('button');
const postButton = document.createElement('button');
  
postButton.textContent = 'Publicar';
signOutButton.textContent = 'Cerrar sesión';



  wallDiv.appendChild(signOutButton);
  wallDiv.appendChild(postButton);

  signOutButton.addEventListener('click', () => {
    onNavigate('/');
  });

  return wallDiv;

  }
  
   



  