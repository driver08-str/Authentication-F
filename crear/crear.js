import {addviewuser, getUserEmail } from "../firebase.js";

const save_product = document.getElementById('CrearteUser');

async function CrearteUser() {
    try {
        await getUserEmail();
        
        if (window.correcto === true) {
            const Id = document.getElementById("IdUser").value;
            const nombre = document.getElementById("nombre").value;
            const apellido = document.getElementById("apellido").value;
            const email = document.getElementById("exampleInputEmail1").value;
            const contrasena = document.getElementById("exampleInputPassword1").value;
            const confirmarContrasena = document.getElementById("exampleInputConfirmPassword1").value;

            await addProduct(Id, nombre, apellido, email,contrasena,confirmarContrasena);
            alert("El Usuario fue agregado satisfactoriamente.");
            window.location.href ="admin/administrador.html";
        }
    } catch (error) {
        if (error.code === 'permission-denied') {
            alert("No tienes permiso para realizar esta acción.");
        } else if (error.code === 'unavailable') {
            alert("La base de datos no está disponible en este momento. Por favor, inténtalo de nuevo más tarde.");
        } else {
            alert("Hubo un error al agregar el producto. Por favor, inténtalo de nuevo más tarde.");
            console.error(error);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    save_product.addEventListener('click', CrearteUser);
});
