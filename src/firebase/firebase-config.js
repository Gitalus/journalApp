// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDpKETIcpqtqxDgcyz61ib2bEFL11ZUKOg',
    authDomain: 'react-app-cursos-a00a4.firebaseapp.com',
    projectId: 'react-app-cursos-a00a4',
    storageBucket: 'react-app-cursos-a00a4.appspot.com',
    messagingSenderId: '1015923805939',
    appId: '1:1015923805939:web:0396d7cf67fb5f1f367186'
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
};