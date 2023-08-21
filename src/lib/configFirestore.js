import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { auth } from './configFirebase';

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Add a new document with a generated id.
export const savePosts = (text) => {
  return addDoc(collection(db, 'post'), { text, email: auth.currentUser.email });
};
export const getPosts = () => console.log('Get Posts');
