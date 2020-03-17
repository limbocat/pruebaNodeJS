// Operacion Suma
function Sumar(numero1, numero2){
    return numero1 + numero2;
}
console.log(Sumar(6,7));

// Operacion Resta
function resta(numero1,numero2){
    return numero1 - numero2;
}
console.log(resta(2,3));

// Operacion Multiplicacion
function multiplicacion(numero1, numero2){
    return numero1 * numero2;
}
console.log(multiplicacion(2,3));

// Operacion Division
function division(numero1, numero2){
    return numero1/numero2
}
console.log(division(50,5));

//Calculadora Integrada
function calculadora(numero1, numero2, signo){
    if (signo == '+'){
    return numero1 + numero2;
    } else if (signo == '-'){
    return numero1 - numero2;
    } else if (signo == '*'){
    return numero1 * numero2;
    } else if (signo == '/'){
    return numero1 / numero2;
    } else if (signo == '%') {
    return (numero1/100)*numero2;
    }
}

console.log(calculadora(7,7,"+"));
console.log(calculadora(7,7,"-"));
console.log(calculadora(7,7,"*"));
console.log(calculadora(7,7,"/"));
console.log(calculadora(10,100,"%"));

console.log(Sumar(2,3));
