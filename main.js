let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contrasena = document.getElementById('contrasena');
let validacionContrasena = document.getElementById('validacion');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const caracteresEspeciales = '!@#$%^&*()_-';
const todosCaracteres = cadenaCaracteres + caracteresEspeciales;

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (isNaN(numeroDigitado) || numeroDigitado < 6) {
        alert("La cantidad de caracteres tiene que ser mayor o igual a 6.");
        return;  
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
    validarContrasena(password); 
}

function limpiar() {
    contrasena.value = '';
    cantidad.value = '';
    validacionContrasena.textContent = ''; 
}

function validarContrasena(password) {
    const tieneLetras = /[a-zA-Z]/.test(password);
    const tieneNumeros = /[0-9]/.test(password);
    const tieneEspeciales = /[!@#$%^&*()_-]/.test(password);

    if (tieneLetras && tieneNumeros && tieneEspeciales) {
        validacionContrasena.textContent = "Contraseña fuerte";
        validacionContrasena.style.color = "green";
    } else if ((tieneLetras && tieneNumeros) || 
               (tieneLetras && tieneEspeciales) || 
               (tieneNumeros && tieneEspeciales)) {
        validacionContrasena.textContent = "Contraseña media";
        validacionContrasena.style.color = "orange";
    } else if ((tieneLetras && !tieneNumeros && !tieneEspeciales) || 
               (!tieneLetras && tieneNumeros && !tieneEspeciales) || 
               (!tieneLetras && !tieneNumeros && tieneEspeciales)) {
        validacionContrasena.textContent = "Contraseña débil";
        validacionContrasena.style.color = "red";
    } else {
        validacionContrasena.textContent = "Contraseña inválida";
        validacionContrasena.style.color = "black";
    }
}