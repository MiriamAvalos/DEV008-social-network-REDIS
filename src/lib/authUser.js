import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './configFirebase';

export const addNewUser = (email, password) => {
return createUserWithEmailAndPassword(auth, email, password);
};


export const signInUserNew = (email, password) => {
return signInWithEmailAndPassword(auth, email, password);
}



