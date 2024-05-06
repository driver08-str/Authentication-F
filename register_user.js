import{registerauth} from "../Controllers/firebase.js"

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
        window.location.href="../Templates/registers_users.html"
        // ...
      })
      .catch((error) => {
        alert('no sucessfull')
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}

window.addEventListener('DOMContentLoaded', async()=>{
    save_auth.addEventListener('click', register)
})