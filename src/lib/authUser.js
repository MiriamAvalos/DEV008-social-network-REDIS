import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './configFirebase';

export const addNewUser = (email, password) => {
return createUserWithEmailAndPassword(auth, email, password);
};
