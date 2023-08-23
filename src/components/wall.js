import { savePosts, getAllPosts } from '../lib/configFirestore';

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
  // se crea elemento para almacenar los post en tiempo real
  const postContainer = document.createElement('div');
  postContainer.classList.add('postContainer');

  //Este texto de cerrar sesión es para el responsive en web
  // const textClose = document.createElement('span');
  // textClose.classList.add = ('textClose');
  const divPost = document.createElement('div');
  divPost.classList.add('divPost');
  const divPostUserData = document.createElement('div');
  divPostUserData.classList.add('divPostUserData');
  const textArea = document.createElement('textarea');
  textArea.classList.add('textArea');
  const postButton = document.createElement('button');
  postButton.classList.add('postButton');

  textArea.placeholder = '¿Qué vas a compartir hoy?';
  textArea.rows = '7';
  textArea.cols = '43';
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
  wallDiv.appendChild(postContainer);

  postButton.addEventListener('click', () => {
    savePosts(textArea.value).then(() => {
      alert('Publicación guardada con éxito');
    }).catch(() => {
      alert('algo salió mal');
    });
  });
  
  
  getAllPosts().then((respuesta) => {
 console.log(respuesta);
 respuesta.forEach((element) =>{
  console.log(element.data());


 });
  });



  signOutButton.addEventListener('click', () => {
    onNavigate('/');
  });

  return wallDiv;
};
