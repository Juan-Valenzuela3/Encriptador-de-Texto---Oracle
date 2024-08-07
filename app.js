document.getElementById('encriptar').addEventListener('click', encriptar);
document.getElementById('desencriptar').addEventListener('click', desencriptar);


// Funciones

function encriptar () {
    let texto = document.getElementById('ingresar-texto').value;
    let textResult = document.getElementById('text-Desencriptado');
    limpiarTextArea();

    let regex = /^[a-z\s]+$/;

    if (regex.test(texto)) {

        let newText = texto.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');

        textResult.textContent = newText;
            
    } else {
        console.log('No cumple con la validación');
        
    }
}
    
function desencriptar() {
    let texto = document.getElementById('ingresar-texto').value;
    let textResult = document.getElementById('text-Desencriptado');
    let regex = /^[a-z\s]+$/;

    if (regex.test(texto)) {

        let newText = texto.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');

        textResult.textContent = newText;
            
    } else {
        console.log('No cumple con la validación');
        
    }
}

function limpiarTextArea () {
    document.getElementById('ingresar-texto').value = '';
}