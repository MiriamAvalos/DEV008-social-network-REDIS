
export const wall = (onNavigate) => {

const wallDiv = document.createElement('div');
wallDiv.classList.add('wallDiv');
const wallNav = document.createElement('nav');
wallNav.classList.add('wallNav');
const imageLogoNav = document.createElement('img');
imageLogoNav.classList.add('imageLogoNav');
imageLogoNav.src = '../image/logoWall.png';
const signOutButton = document.createElement('div');
signOutButton.classList.add('signOutButton');
const imageClose = document.createElement('img');
imageClose.classList.add('imageClose');
imageClose.src = '../image/log-out.png';
const textClose = document.createElement('span')
textClose.classList.add=('signOutButton');
const divPost = document.createElement('div');
divPost.classList.add('divPost');
const divPostUserData = document.createElement('div');
divPostUserData.classList.add('divPostUserData')
const textArea = document.createElement('textarea');
textArea.classList.add('textArea');
const postButton = document.createElement('button');


textClose.textContent = 'Cerrar sesión';
postButton.textContent = 'Publicar';

wallNav.appendChild(imageLogoNav);
signOutButton.appendChild(imageClose);
signOutButton.appendChild(textClose);
wallNav.appendChild(signOutButton);
divPost.appendChild(divPostUserData);
divPost.appendChild(textArea);
divPost.appendChild(postButton);
wallDiv.appendChild(wallNav);
wallDiv.appendChild(divPost);


/*const signOutButton = document.createElement('button');
const postButton = document.createElement('button');
  
postButton.textContent = 'Publicar';
signOutButton.textContent = 'Cerrar sesión';



  wallDiv.appendChild(signOutButton);
  wallDiv.appendChild(postButton);*/

  textClose.addEventListener('click', () => {
    onNavigate('/');
  });

  return wallDiv;

  }
  
   



  