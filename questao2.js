function pertenceSequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (b <= numero) {
        if (b === numero) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}

let numeroInformado = 13;
if (pertenceSequenciaFibonacci(numeroInformado)) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}
