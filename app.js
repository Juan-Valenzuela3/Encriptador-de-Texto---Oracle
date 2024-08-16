document.getElementById('encriptar').addEventListener('click', encriptar);
document.getElementById('desencriptar').addEventListener('click', desencriptar);
document.getElementById('copy').addEventListener('click', copiarTexto);
document.getElementById('close-overlay').addEventListener('click', cerrarAlerta);
document.getElementById('icon-Theme').addEventListener('click', chageTheme);


document.addEventListener("DOMContentLoaded", function() {
    const root = document.documentElement;

    // Cambia las variables a los valores del tema oscuro
    root.style.setProperty('--primary-colorL', '#0B1E26');
    root.style.setProperty('--secondary-colorL', '#CBF0FF');
    root.style.setProperty('--third-colorL', '#FCFCFC');
    root.style.setProperty('--copy-color', '#0B1E26');
    root.style.setProperty('--efect-buttom', '#6595a8')
});

// Funciones 

function encriptar () {
    let texto = document.getElementById('ingresar-texto').value;
    let textResult = document.getElementById('text-Desencriptado');
    limpiarTextAreaE();

    let regex = /^[a-z\s]+$/;

    if (regex.test(texto)) {

        let newText = texto.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');

        textResult.value = newText;
            
    } else {
        const alert = document.getElementById('ovarlay');
        const textAlert = document.getElementById('text-alert');
           
        textAlert.textContent = '¡Ingrese texto en minúsculas y sin acentos!';
        alert.classList.remove('hidden');
    }
}
    
function desencriptar() {
    let texto = document.getElementById('ingresar-texto').value;
    let textResult = document.getElementById('text-Desencriptado');
    limpiarTextAreaD();

    let regex = /^[a-z\s]+$/;

    if (regex.test(texto)) {

        let newText = texto.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');

        textResult.value = newText;
            
    } else {
        const alert = document.getElementById('ovarlay');
        const textAlert = document.getElementById('text-alert');

        textAlert.textContent = '¡No ha ingresado texto para desencriptar!';
        alert.classList.remove('hidden');
    }
}


function copiarTexto() {
    const textDesencriptar = document.getElementById('text-Desencriptado').value;
    
    navigator.clipboard.writeText(textDesencriptar)
        .then(() => {
            const alert = document.getElementById('ovarlay');
            const textAlert = document.getElementById('text-alert');
            const textCopy = document.getElementById('text-Desencriptado').value.trim();

            if (textCopy === '') {
                textAlert.textContent = '¡Ingrese texto para copiar!';
                alert.classList.remove('hidden');
            } else {
                textAlert.textContent = '¡Texto copiado correctamente!';
                alert.classList.remove('hidden');
            }
            
            
        })
        .catch(err => {
            console.log('Error al copiar texto:', err);            
        })
}

function limpiarTextAreaE () {
    document.getElementById('ingresar-texto').value = '';
}

function limpiarTextAreaD () {
    document.getElementById('text-Desencriptado').value = '';
}

function cerrarAlerta () {
    const alert = document.getElementById('ovarlay');
    alert.classList.add('hidden');
}

function chageTheme () {
    const root = document.documentElement;

    // Obtén el valor actual de la variable --primary-colorL
    const currentPrimaryColor = getComputedStyle(root).getPropertyValue('--primary-colorL').trim();

    // Verifica y cambia el tema según el color actual
    if (currentPrimaryColor === '#F1FFBDB0') {
        // Cambiar a tema oscuro
        root.style.setProperty('--primary-colorL', '#0B1E26');
        root.style.setProperty('--secondary-colorL', '#CBF0FF');
        root.style.setProperty('--third-colorL', '#FCFCFC');
        root.style.setProperty('--copy-color', '#0B1E26');
        root.style.setProperty('--efect-buttom', '#6595a8')
    } else {
        // Cambiar a tema claro
        root.style.setProperty('--primary-colorL', '#F1FFBDB0');
        root.style.setProperty('--secondary-colorL', '#B4C186EF');
        root.style.setProperty('--third-colorL', '#000000');
        root.style.setProperty('--copy-color', '#25291A');
        root.style.setProperty('--efect-buttom', '#99a373ef')
    }
}