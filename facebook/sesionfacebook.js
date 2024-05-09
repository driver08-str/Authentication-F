import {iniciofacebook} from '../firebase.js';

const facebookBtn = document.getElementById('facebookbtn');

facebookBtn.addEventListener('click', () => {
    signInWithPopup(provider) 
        .then((result) => {
            // El usuario ha iniciado sesión correctamente.
            const user = result.user;

            // Esto te da un token de acceso de Facebook. Puedes usarlo para acceder a la API de Facebook.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            iniciofacebook(user);
        })
        .catch((error) => {
            // Maneja los errores aquí.
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });
});

window.addEventListener('DOMContentLoaded', async()=>{
    facebookBtn.addEventListener('click', iniciofacebook)
})