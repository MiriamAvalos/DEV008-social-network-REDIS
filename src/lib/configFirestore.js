import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { auth, app } from './configFirebase';


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Add a new document with a generated id.
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


