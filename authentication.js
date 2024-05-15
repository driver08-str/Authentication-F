import{loginauth} from "/firebase.js"
const recibir = document.getElementById("loginbtn");

async function validar() {
    const email = document.getElementById('edtuser').value;
    const password = document.getElementById('edtpassword').value;

    // Obtén la URL de la página actual
    var currentPageUrl = window.location.href;

    // Verifica si la página actual es adminLogin.html
    if (currentPageUrl.includes("adminLogin.html")) {
        // Lógica de autenticación de administrador
        if (email == "drivere53@gmail.com" && password == "12345dre") {
            alert("Inicio de sesión exitoso " + email);
            window.location.href = "admin/administrador.html"
        } else {
            alert("Error de usuario verifique usuario y/o contraseña");
            console.log("Sesion " + email + " not validation");
        }
    } else {
        // Lógica de autenticación de usuario
        const verificar = loginauth(email, password);
        const validation = await verificar;

        if (validation != null) {
            alert("User authentication succesfull " + email);
            window.location.href = "/home.html";
        } else {
            alert("Error de usuario verifique usuario y/o contraseña");
            console.log("Sesion " + email + " not validation");
        }
    }
}

window.addEventListener('DOMContentLoaded', async()=>{
    recibir.addEventListener('click', validar)
})