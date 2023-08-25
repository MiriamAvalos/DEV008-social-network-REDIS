import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './configFirebase';

// Autenticación con correo y contraseña

export const addNewUser = (email, password) => {
return createUserWithEmailAndPassword(auth, email, password);
};


export const signInUserNew = (email, password) => {
return signInWithEmailAndPassword(auth, email, password);
}

// Autenticación con google
const provider = new GoogleAuthProvider();
export const singInGoogle = () =>{
return signInWithPopup(auth, provider);

}



