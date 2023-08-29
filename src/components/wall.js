import {
  savePosts, getAllPosts, deletePost, getCurrentUser,
} from '../lib/configFirestore';

import { signOutGoogle } from '../lib/authUser';

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

  // Este texto de cerrar sesión es para el responsive en web
  // const textClose = document.createElement('span');
  // textClose.classList.add = ('textClose');
  const divPost = document.createElement('div');
  divPost.classList.add('divPost');
  /* const divPostUserData = document.createElement('div');
  divPostUserData.classList.add('divPostUserData'); */
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
  // divPost.appendChild(divPostUserData);
  divPost.appendChild(textArea);
  divPost.appendChild(postButton);
  wallDiv.appendChild(wallHeader);
  wallDiv.appendChild(divPost);
  wallDiv.appendChild(postContainer);

  postButton.addEventListener('click', () => {
    savePosts(textArea.value).then(() => {
      location.reload();
      // alert('Publicación guardada con éxito');
    }).catch(() => {
      alert('algo salió mal');
    });
  });

  postContainer.innerHTML = ' ';
  getAllPosts().then((respuesta) => {
    // console.log(respuesta);
    respuesta.forEach((element) => {
      // console.log(element.data());
      const dataPost = element.data();
      console.log(dataPost);
      // se crean tarjetas de post
      const cardPost = document.createElement('div');
      cardPost.classList.add('divPostUsers');
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('divPostUserData');
      const emailUser = document.createElement('p');
      emailUser.textContent = dataPost.email;
      emailUser.classList.add('emailUser');
      const photoUserAuth = document.createElement('img');
      photoUserAuth.src = dataPost.img;
      
      photoUserAuth.classList.add('photoUserAuth');
      const contentPost = document.createElement('div');
      contentPost.classList.add('contenPost');

      const postContentText = document.createElement('p');
      postContentText.textContent = dataPost.text;

      const currentUser = getCurrentUser();
      console.log(currentUser);

      if (element.data().email === currentUser) {
        const deletePostButton = document.createElement('button');
        deletePostButton.classList.add('deletePostButton');
        deletePostButton.textContent = 'Eliminar';
        cardDiv.appendChild(deletePostButton);

        deletePostButton.addEventListener('click', () => {
          deletePost(element.id).then(() => {
            console.log('elemento eliminado: ', element.id);
            alert('Publicación eliminda');
            location.reload();
          // postContainer.innerHTML = " "
          }).catch(() => {
            alert('algo salió mal');
          });

          // console.log(deletePost());

        // alert(element.id);
        });

      }
      cardDiv.appendChild(photoUserAuth);
      cardDiv.appendChild(emailUser);
      contentPost.appendChild(postContentText);
      cardPost.appendChild(cardDiv);
      cardPost.appendChild(contentPost);
      postContainer.appendChild(cardPost);
    });
  });



  // Función para eliminar cookies manualmente
function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

  //cerrar sesión y eliminar cookies manualmente
  signOutButton.addEventListener('click', () => {
    signOutGoogle().then(() => {
      deleteAllCookies(); // Eliminar cookies manualmente
      alert("sesión cerrada")
      onNavigate('/');
    }).catch((error) => {
      alert("error:" + error)
      
    });

   
  });

  

  return wallDiv;
};
