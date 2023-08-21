// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3IhFwrjqnUsOsxBIR186nFyDTu1jSnp4',
  authDomain: 'social-redis.firebaseapp.com',
  projectId: 'social-redis',
  storageBucket: 'social-redis.appspot.com',
  messagingSenderId: '94605809294',
  appId: '1:94605809294:web:23cfbd4235b38eea6a5bdf',
  measurementId: 'G-E1M0Z7KDLD',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// se establece la conexión con mi proyecto ( con sus credenciales)

// Autenticación con correo y contraseña

export const auth = getAuth(app);
// se configura el servicio de autenticación para que funcione con base de datos.
// console.log(auth);
