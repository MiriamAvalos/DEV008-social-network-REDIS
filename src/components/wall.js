import {
 savePosts, getAllPosts, deletePost, getCurrentUser,
} from '../lib/configFirestore';

import { signOutGoogle } from '../lib/authUser';
import { auth } from '../lib/configFirebase';


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

    //Se añade imagen y email de usuarios registrados en Header
 
    const divProfile = document.createElement('div');
    divProfile.classList.add('divProfile');

    const imageProfileUser = document.createElement('img');
    imageProfileUser.classList.add('imageProfileUser');
    imageProfileUser.src = '../image/profileUser.jpg';

    const imageUserLoginHeader = document.createElement('img');
    imageUserLoginHeader.classList.add('imageUserLoginHeader');
    imageUserLoginHeader.classList.add('overlay-image');
    imageUserLoginHeader.src = auth.currentUser.photoURL;

    const nameUserLoginHeader = document.createElement('p');
    nameUserLoginHeader.classList.add('nameUserLoginHeader');
    nameUserLoginHeader.classList.add('overlay-image');
    nameUserLoginHeader.textContent = auth.currentUser.displayName;


    wallDiv.appendChild(wallHeader);
    divProfile.appendChild(imageProfileUser);
    divProfile.appendChild(imageUserLoginHeader);
    divProfile.appendChild(nameUserLoginHeader);
    wallDiv.appendChild(divProfile);
    wallDiv.appendChild(nameUserLoginHeader);
  divPost.appendChild(textArea);
  divPost.appendChild(postButton);
wallDiv.appendChild(divPost);
  wallDiv.appendChild(postContainer);


  //condición si no existe imagen en usuario en usuario, se inserta una por default
  if (auth.currentUser.photoURL === null) {
    const imageUserLoginHeaderRegister = document.createElement('img');
    imageUserLoginHeaderRegister.classList.add('imageUserLoginHeader');
    imageUserLoginHeaderRegister.classList.add('overlay-image');
    imageUserLoginHeaderRegister.src = '../image/profile.png';
    divProfile.removeChild(imageUserLoginHeader);
    divProfile.appendChild(imageUserLoginHeaderRegister);
   };

  const currentUser = getCurrentUser();
  
  //console.log(currentUser);


  postButton.addEventListener('click', () => {
    savePosts(textArea.value).then(() => {
      onNavigate('/wall');
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

      // console.log(photoUserAuth);

      photoUserAuth.classList.add('photoUserAuth');
      const contentPost = document.createElement('div');
      contentPost.classList.add('contenPost');

      const postContentText = document.createElement('p');
      postContentText.textContent = dataPost.text;

   
      

      // console.log(dataPost.img);

      if (element.data().email === currentUser) {
        // boton abrir modal

        const deletePostButton = document.createElement('img');
        deletePostButton.src = '../image/delete.png';
        deletePostButton.classList.add('deletePostButton');

        cardDiv.appendChild(deletePostButton);

        // se crea el modal con su contenido

        // Agregar el diálogo al DOM

        const modalDocument = document.createElement('dialog');
        modalDocument.classList.add('dialogModal');
        // se inserta el Modal al documento
        document.body.appendChild(modalDocument);

        // contenedor padre de modal
        const divModal = document.createElement('div');
        divModal.classList.add('divModal');

        // pregunta

        const questionDelete = document.createElement('p');
        questionDelete.classList.add('questionDelete');
        questionDelete.textContent = '¿Seguro que deseas eliminar esta publicación?';

        // confirmación en este tiene que ir la funcion de eliminar

        const finallyDelete = document.createElement('button');
        finallyDelete.classList.add('finallyDelete');
        finallyDelete.textContent = 'Eliminar';

        const cancelDelete = document.createElement('button');
        cancelDelete.classList.add('cancelDelete');
        cancelDelete.textContent = 'Cancelar';

        divModal.appendChild(questionDelete);
        divModal.appendChild(cancelDelete);
        divModal.appendChild(finallyDelete);
        modalDocument.appendChild(divModal);

        deletePostButton.addEventListener('click', () => {
          modalDocument.showModal();
        });

        cancelDelete.addEventListener('click', () => {
          modalDocument.close();
        });

        finallyDelete.addEventListener('click', () => {
          deletePost(element.id).then(() => {
            modalDocument.close();
            onNavigate('/wall');
            //console.log('elemento eliminado: ', element.id);
            // alert('Publicación eliminada');
            //location.reload(); 
            
            
          // postContainer.innerHTML = " "
          }).catch(() => {
            alert('algo salió mal');
          });

          // console.log(deletePost());

        // alert(element.id);
        });

        finallyDelete.addEventListener('click', () => {
          modalDocument.showModal();
        });
      }

 
      cardDiv.appendChild(photoUserAuth);
      cardDiv.appendChild(emailUser);
      contentPost.appendChild(postContentText);
      cardPost.appendChild(cardDiv);
      cardPost.appendChild(contentPost);
      postContainer.appendChild(cardPost);


  
   

      // se añade una imagen de perfil por default a usuarios que no se autenticaron con gmail
      if (dataPost.img === null) {
        // console.log("estoy adentro del if");

        const photoUserAuthNull = document.createElement('img');
        photoUserAuthNull.src = '../image/profile.png';
        photoUserAuthNull.classList.add('photoUserAuthNull');
        cardDiv.removeChild(photoUserAuth);
        cardDiv.appendChild(photoUserAuthNull);
      }

      // si el nombre existe en gmail lo muestra
      console.log(dataPost.name);
      if (dataPost.name !== undefined && dataPost.name !== null) {
        const nameUserAuthGmail = document.createElement('p');
        nameUserAuthGmail.textContent = dataPost.name;
        nameUserAuthGmail.classList.add('nameUserAuthGmail');
        cardDiv.removeChild(emailUser);
        cardDiv.appendChild(nameUserAuthGmail);
      }
    });
  });

  // cerrar sesión
  signOutButton.addEventListener('click', () => {
    signOutGoogle().then(() => {
      //alert('sesión cerrada');
      onNavigate('/');
    }).catch((error) => {
      alert(`error:${error}`);
    });
  });

  return wallDiv;
};
