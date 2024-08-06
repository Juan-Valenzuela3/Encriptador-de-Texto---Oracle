/*

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

function encriptar (texto) {
    let regex = /^[a-z]+$/;

    if (regex.test(texto)) {
        console.log('Texto ingresado correctamente');
    } else {
        console.log('No cumple con la validación');
        
    }
    
    
}

encriptar('texto8')

// solo acepta minúsculas, pero no he revisado los espacios y otros caracteres