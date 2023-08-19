export const wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  wallDiv.classList.add('wallDiv');
  const wallHeader = document.createElement('header');
  wallHeader.classList.add('wallHeader');
  const imageLogoHeader = document.createElement('img');
  imageLogoHeader.classList.add('imageLogoHeader');
  imageLogoHeader.src = '../image/logoWall.png';
  const signOutButton = document.createElement('div');
  signOutButton.classList.add('signOutButton');
  const imageClose = document.createElement('img');
  imageClose.classList.add('imageClose');
  imageClose.src = '../image/log-out.png';
  // const textClose = document.createElement('span');
  // textClose.classList.add = ('textClose');
  const divPost = document.createElement('div');
  divPost.classList.add('divPost');
  const divPostUserData = document.createElement('div');
  divPostUserData.classList.add('divPostUserData');
  const textArea = document.createElement('textarea');
  textArea.classList.add('textArea');
  const postButton = document.createElement('button');

  textArea.placeholder = '¿Qué quieres compartir?';
  textArea.rows = '7';
  textArea.cols = '42';
  // textClose.textContent = 'Cerrar Sesión';
  postButton.textContent = 'Publicar';

  wallHeader.appendChild(imageLogoHeader);
  signOutButton.appendChild(imageClose);
  // signOutButton.appendChild(textClose);
  wallHeader.appendChild(signOutButton);
  divPost.appendChild(divPostUserData);
  divPost.appendChild(textArea);
  divPost.appendChild(postButton);
  wallDiv.appendChild(wallHeader);
  wallDiv.appendChild(divPost);

  signOutButton.addEventListener('click', () => {
    onNavigate('/');
  });

  return wallDiv;
};
