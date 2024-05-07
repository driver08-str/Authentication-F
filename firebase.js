import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { 
    getAuth, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'



const firebaseConfig = {
  apiKey: "AIzaSyDSK1qsE3Vy5kZBWaE7MeC8WuuwmLovRNs",
  authDomain: "recuperar-f5be2.firebaseapp.com",
  projectId: "recuperar-f5be2",
  storageBucket: "recuperar-f5be2.appspot.com",
  messagingSenderId: "479485690082",
  appId: "1:479485690082:web:a08fc423dcefc0a16fdebb",
  measurementId: "G-TJ3CYVH228"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//metodo de autenticacion de usuario
export const loginauth=(email,password)=>
    signInWithEmailAndPassword(auth, email, password)

//cerrar sesion del usuario
export const loginout=()=>
  signOut(auth)

//estado del usuario logeado
export function userstate(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href='/index.html'
    }
  });
}

//Crear cuentas de authenticación
export const registerauth=(email,password)=>
  createUserWithEmailAndPassword(auth, email, password);

//Recuperar contraseña
export const recover=(email)=>
sendPasswordResetEmail(auth, email);
