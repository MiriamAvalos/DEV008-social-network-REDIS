import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, query, orderBy, serverTimestamp, updateDoc } from 'firebase/firestore';
import { auth, app } from './configFirebase';


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


//crea el post en consola de firebase


export const savePosts = (text) => {
  return addDoc(collection(db, 'post'), { text, email:auth.currentUser.email, img:auth.currentUser.photoURL, name:auth.currentUser.displayName, timestamp: serverTimestamp() });
  
};

//se obtienen todos los documentos de mi colección
//db = data base;
export const getAllPosts = () => {
//return getDocs (collection(db, 'post'));       esta función solamente muestra los post sin ordenar
return getDocs (orderPost);
}
console.log('Get Posts');



export const getCurrentUser = () => {
  return auth.currentUser.email
};

//borrar datos 
export const deletePost = (id) => {    
const docRef = doc(db, "post", id)
return  deleteDoc(docRef);

}

//Ordenar los post
const orderPost = query(collection(db, 'post'), orderBy("timestamp", "desc"));



// Define una función para actualizar una publicación en Firestore
export const updatePostInFirestore = (postId, updatedText) => {
  const postRef = doc(db, 'post', postId); // Utiliza doc para obtener una referencia al documento
  return updateDoc(postRef, { text: updatedText }); // Actualiza el campo 'text' con el nuevo contenido
};