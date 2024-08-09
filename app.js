document.getElementById('encriptar').addEventListener('click', encriptar);
document.getElementById('desencriptar').addEventListener('click', desencriptar);
document.getElementById('copy').addEventListener('click', copiarTexto);

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
        console.log('No cumple con la validación');
        
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
        console.log('No cumple con la validación');
        
    }
}


function copiarTexto() {
    const textDesencriptar = document.getElementById('text-Desencriptado').value;
    
    navigator.clipboard.writeText(textDesencriptar)
        .then(() => {
            alert("Texto copiado al portapapeles");
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