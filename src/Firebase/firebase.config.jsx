// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAQKHi0Ox7CHHAGrAUwdQlb7oD4L_rejtw",
//     authDomain: "b7a10-sultantable.firebaseapp.com",
//     projectId: "b7a10-sultantable",
//     storageBucket: "b7a10-sultantable.appspot.com",
//     messagingSenderId: "287220072980",
//     appId: "1:287220072980:web:3d2c4ad0c5a79268be1d01"
// };
console.log(import.meta.env.VITE_AUTHDOMAIN);
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;