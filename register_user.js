import{registerauth} from "/firebase.js"

const save_auth=document.getElementById('btnregister')

async function register(){
    const email = document.getElementById('edtuser').value
    const psw=document.getElementById('edtpassword').value

    const validar = registerauth(email,psw)
    const verificar = await validar

    .then((verificar) => {
        // Signed up 
        alert('El usuario se registro exitosamente..')
        const user = verificar.user;
        window.location.href="register_user.js"
        // ...
      })
      .catch((error) => {
        alert('Error de registro')
        const respuesta = confirm('¿Desea recuperar su contraseña?');
        if (respuesta) {
          window.location.href="recover/recuperar.html"
        } else {
          window.location.href="register_user.js"
        }
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}

window.addEventListener('DOMContentLoaded', async()=>{
    save_auth.addEventListener('click', register)
})