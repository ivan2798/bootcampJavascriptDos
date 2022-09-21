/**
 * x/2 ->0
 * x%2 == 0 par
 * x%2 != 0 impar
 */

let valor;

//para ingresar un valor en js
valor = prompt("Ingrese el valor");

//let esPar = valor % 2 == 0;

if (valor % 2 == 0) {
    alert(valor + ' es par');
} else{
    alert(valor + ' no es par');
}

