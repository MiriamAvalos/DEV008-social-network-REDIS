import { getFirestore, collection, addDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { auth, app } from './configFirebase';

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Add a new document with a generated id.
//crea el post en consola de firebase
export const savePosts = (text) => {
  return addDoc(collection(db, 'post'), { text, email: auth.currentUser.email });
};

//se obtienen todos los documentos de mi colección
//db = data base
export const getAllPosts = () => {
return getDocs (collection(db, 'post'));
}
console.log('Get Posts');

