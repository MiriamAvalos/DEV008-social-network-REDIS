import {
  savePosts,
  getAllPosts,
  deletePost,
  getCurrentUser,
  updatePostInFirestore,
} from "../lib/configFirestore";
import { signOutGoogle } from "../lib/authUser";
import { auth } from "../lib/configFirebase";

export const wall = (onNavigate) => {
  const wallDiv = document.createElement("div");
  wallDiv.classList.add("wallDiv");
  const wallHeader = document.createElement("header");
  wallHeader.classList.add("wallHeader");

  const imageLogoHeader = document.createElement("img");
  imageLogoHeader.classList.add("imageLogoHeader");
  imageLogoHeader.src = "../image/logoWall.png";
  const signOutButton = document.createElement("div");
  signOutButton.classList.add("signOutButton");
  const imageClose = document.createElement("img");
  imageClose.classList.add("imageClose");
  imageClose.src = "../image/log-out.png";
  // se crea elemento para almacenar los post en tiempo real
  const postContainer = document.createElement("div");

  // Este texto de cerrar sesión es para el responsive en web
  // const textClose = document.createElement('span');
  // textClose.classList.add = ('textClose');
  const divPost = document.createElement("div");
  divPost.classList.add("divPost");
  /* const divPostUserData = document.createElement('div');
  divPostUserData.classList.add('divPostUserData'); */
  const textArea = document.createElement("textarea");
  textArea.classList.add("textArea");
  const postButton = document.createElement("button");
  postButton.classList.add("postButton");

  textArea.placeholder = "¿Qué vas a compartir hoy?";
  textArea.rows = "7";
  textArea.cols = "43";
  // textClose.textContent = 'Cerrar Sesión';
  postButton.textContent = "Publicar";

  wallHeader.appendChild(imageLogoHeader);
  signOutButton.appendChild(imageClose);
  // signOutButton.appendChild(textClose);
  wallHeader.appendChild(signOutButton);
  // divPost.appendChild(divPostUserData);

  // Se añade imagen y email de usuarios registrados en Header

  const divProfile = document.createElement("div");
  divProfile.classList.add("divProfile");

  const imageUserLoginHeader = document.createElement("img");
  imageUserLoginHeader.classList.add("imageUserLoginHeader");
  imageUserLoginHeader.src = auth.currentUser.photoURL;

  const nameUserLoginHeader = document.createElement("p");
  nameUserLoginHeader.classList.add("nameUserLoginHeader");
  nameUserLoginHeader.textContent = auth.currentUser.displayName;

  wallDiv.appendChild(wallHeader);
  divProfile.appendChild(imageUserLoginHeader);
  divProfile.appendChild(nameUserLoginHeader);
  divPost.appendChild(divProfile);
  divPost.appendChild(textArea);
  divPost.appendChild(postButton);
  wallDiv.appendChild(divPost);
  wallDiv.appendChild(postContainer);

  // condición si no existe en usuario
  if (auth.currentUser.photoURL === null) {
    const imageUserLoginHeaderRegister = document.createElement("img");
    imageUserLoginHeaderRegister.classList.add("imageUserLoginHeader");
    imageUserLoginHeaderRegister.classList.add("overlay-image");
    imageUserLoginHeaderRegister.src = "../image/profile.png";
    divProfile.removeChild(imageUserLoginHeader);
    divProfile.appendChild(imageUserLoginHeaderRegister);
  }

  //si el usuario tiene un nombre nullo, se inserta su correo
  if (auth.currentUser.displayName === null) {
    const emailUserLoginHeaderRegister = document.createElement("p");

    emailUserLoginHeaderRegister.classList.add("emailUserLoginHeaderRegister");
    emailUserLoginHeaderRegister.classList.add("overlay-image2");
    emailUserLoginHeaderRegister.textContent = auth.currentUser.email;
    divProfile.removeChild(nameUserLoginHeader);
    divProfile.appendChild(emailUserLoginHeaderRegister);
  }

  postButton.addEventListener("click", () => {
    savePosts(textArea.value)
      .then(() => {
        onNavigate("/wall");
        // alert('Publicación guardada con éxito');
      })
      .catch(() => {
        alert("algo salió mal");
      });
  });

  const currentUser = getCurrentUser();
  // console.log(currentUser);

  postContainer.innerHTML = " ";
  getAllPosts().then((respuesta) => {
    // console.log(respuesta);
    respuesta.forEach((element) => {
      // console.log(element.data());
      const postId = element.id; //obtiene el ID único del documento (post)
      //console.log(postId, "id")
      const dataPost = element.data();
      console.log(dataPost);

      // se crean tarjetas de post
      const cardPost = document.createElement("div");
      cardPost.classList.add("divPostUsers");
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("divPostUserData");
      const emailUser = document.createElement("p");
      emailUser.textContent = dataPost.email;
      emailUser.classList.add("emailUser");
      const photoUserAuth = document.createElement("img");
      photoUserAuth.src = dataPost.img;
      // console.log(photoUserAuth);
      photoUserAuth.classList.add("photoUserAuth");

      const contenedorLikes = document.createElement("div");
      contenedorLikes.classList.add("contenedorLikes");
     

      const contentPost = document.createElement("div");
      contentPost.classList.add("contenPost");
      const postContentText = document.createElement("p");
      postContentText.textContent = dataPost.text;
      // console.log(dataPost.img);
       //agregar like
 const likePost = document.createElement("i");
 likePost.classList.add("fa-regular", "fa-heart");
 likePost.classList.add("likePost");
 const numLikes = document.createElement("span");
numLikes.textContent = ("post.likes");
//numLikes.textContent = post.likes;
 numLikes.classList.add("numLikes");
  
contenedorLikes.addEventListener("click", () =>
  handleEditClickLike(postId, likePost, numLikes)
);
 

      if(element.data().email === currentUser) {
        // Botón de editar post solo para usuario que escribió

        const editPostButton = document.createElement("i");
        editPostButton.classList.add("fa-solid", "fa-pen-to-square");
        editPostButton.classList.add("editPostButton");
        cardDiv.appendChild(editPostButton);
  
        editPostButton.addEventListener("click", () =>
          handleEditClick(postId, postContentText)
        );

        // Manejar clic en el botón de editar
        function handleEditClick(postId, postContentText) {
          const textAreaEditar = document.createElement("textarea");
          textAreaEditar.classList.add("editPost");
          textAreaEditar.textContent = dataPost.text;

          cardDiv.removeChild(deletePostButton);
          contentPost.removeChild(postContentText);
          contentPost.appendChild(textAreaEditar);
          const contenedorButtonsEditar = document.createElement("div");
          contenedorButtonsEditar.classList.add("contenedorButtonsEditar");

          const guardarPostButton = document.createElement("button");
          guardarPostButton.textContent = "Guardar";
          guardarPostButton.classList.add("guardarPostButton");
          const cancelarPostButton = document.createElement("button");
          cancelarPostButton.textContent = "Cancelar";
          cancelarPostButton.classList.add("cancelarPostButton");

          cardDiv.removeChild(editPostButton);
          contenedorButtonsEditar.appendChild(cancelarPostButton);
          contenedorButtonsEditar.appendChild(guardarPostButton);

          contentPost.appendChild(contenedorButtonsEditar);

          cancelarPostButton.addEventListener("click", () => {
            onNavigate("/wall");
          });

          guardarPostButton.addEventListener("click", () =>
            guardarPost(postId, postContentText)
          );
          function guardarPost() {
            updatePostInFirestore(postId, textAreaEditar.value)
              .then(() => {
                onNavigate("/wall");
              })
              .catch((error) => {
                console.error("Error al actualizar publicación:", error);
              });
          }
        }

        // boton abrir modal de eliminar post

        const deletePostButton = document.createElement("i");
        deletePostButton.classList.add("fa-solid", "fa-trash-can");
        deletePostButton.classList.add("deletePostButton");

        cardDiv.appendChild(deletePostButton);

        // se crea el modal con su contenido
        // Agregar el diálogo al DOM
        const modalDocument = document.createElement("dialog");
        modalDocument.classList.add("dialogModal");
        // se inserta el Modal al documento
        document.body.appendChild(modalDocument);
        // contenedor padre de modal
        const divModal = document.createElement("div");
        divModal.classList.add("divModal");
        // pregunta
        const questionDelete = document.createElement("p");
        questionDelete.classList.add("questionDelete");
        questionDelete.textContent =
          "¿Seguro que deseas eliminar esta publicación?";
        // confirmación en este tiene que ir la funcion de eliminar
        const finallyDelete = document.createElement("button");
        finallyDelete.classList.add("finallyDelete");
        finallyDelete.textContent = "Eliminar";

        const cancelDelete = document.createElement("button");
        cancelDelete.classList.add("cancelDelete");
        cancelDelete.textContent = "Cancelar";

        divModal.appendChild(questionDelete);
        divModal.appendChild(cancelDelete);
        divModal.appendChild(finallyDelete);
        modalDocument.appendChild(divModal);

        deletePostButton.addEventListener("click", () => {
          modalDocument.showModal();
        });

        cancelDelete.addEventListener("click", () => {
          modalDocument.close();
        });

        finallyDelete.addEventListener("click", () => {
          deletePost(element.id)
            .then(() => {
              modalDocument.close();
              onNavigate("/wall");
              // console.log('elemento eliminado: ', element.id);
              // alert('Publicación eliminada');
              // location.reload();

              // postContainer.innerHTML = " "
            })
            .catch(() => {
              alert("algo salió mal");
            });

          // console.log(deletePost());

          // alert(element.id);
        });

        finallyDelete.addEventListener("click", () => {
          modalDocument.showModal();
        });
      }

      cardDiv.appendChild(photoUserAuth);
      cardDiv.appendChild(emailUser);
      contentPost.appendChild(postContentText);
      cardPost.appendChild(cardDiv);
      
 contenedorLikes.appendChild(likePost);
 contenedorLikes.appendChild(numLikes);
      contentPost.appendChild(contenedorLikes);
      cardPost.appendChild(contentPost);
      postContainer.appendChild(cardPost);

      // se añade una imagen de perfil por default a usuarios que no se autenticaron con gmail
      if (dataPost.img === null) {
        // console.log("estoy adentro del if");

        const photoUserAuthNull = document.createElement("img");
        photoUserAuthNull.src = "../image/profile.png";
        photoUserAuthNull.classList.add("photoUserAuthNull");
        cardDiv.removeChild(photoUserAuth);
        cardDiv.appendChild(photoUserAuthNull);
      }

      // si el nombre existe en gmail lo muestra
      console.log(dataPost.name);
      if (dataPost.name !== undefined && dataPost.name !== null) {
        const nameUserAuthGmail = document.createElement("p");
        nameUserAuthGmail.textContent = dataPost.name;
        nameUserAuthGmail.classList.add("nameUserAuthGmail");
        cardDiv.removeChild(emailUser);
        cardDiv.appendChild(nameUserAuthGmail);
      }
    });
  });

  // cerrar sesión
  signOutButton.addEventListener("click", () => {
    signOutGoogle()
      .then(() => {
        // alert('sesión cerrada');
        onNavigate("/");
      })
      .catch((error) => {
        alert(`error:${error}`);
      });
  });

  return wallDiv;
};
