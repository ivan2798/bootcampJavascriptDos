/**
 * x/2 ->0
 * x%2 == 0 par
 * x%2 != 0 impar
 */

//let valor;


/*//para ingresar un valor en js
valor = prompt("Ingrese el valor");

//let esPar = valor % 2 == 0;

if (valor % 2 == 0) {
    alert(valor + ' es par');
} else{
    alert(valor + ' no es par');
}

*/
/**
 * Calcular le promedio de tres notas
 */

/*
let nota1, nota2, nota3, promedio;

nota1 = prompt("Nota 1: ");
nota2 = prompt("Nota 2: ");
nota3 = prompt("Nota 3: ");

promedio = nota1 + nota2+ nota3 / 3;
alert("el promedio es: "+ promedio);

let hola = '10';
let valorTexto = ''+10;



let notas = [nota1,nota2,nota3];
//nombre[indice]
promedio = (notas[0] = notas[1] + notas[2])/3;
*/
/**
 * Ingresar cantidad de notas
 * Ingresar cada nota
 * calcula promeido de dichas notas
 */

let sumaNotas = 0;
let promedio;
let cantidadNotas = prompt("Ingrese la cantidad de notas");

//uso for

for (let i = 0; i < cantidadNotas; i++) {
    let nota = +prompt("Nota: "+i);
    sumaNotas = sumaNotas + nota;
    //sumaNotas += nota;
}

promedio = sumaNotas / cantidadNotas;

alert("Promedio = " + promedio);

/**
 * SWITCH
 * 
 */

let dia = 5; //numerico
let dia2 = "5"; //string
//1 lunes
//7 domingo

console.log(typeof dia);
console.log(typeof dia2);

if (dia == dia2) {
    console.log("== Iguales")
}

if (dia === dia2) {
    console.log("=== Iguales");
}

if (dia == 1) {
    console.log("lunes");
} else if(dia == 2){
    console.log("martes");
} else if(dia == 3){
    console.log("miercoles");
} else if(dia == 4){
    console.log("jueves");
} else if(dia == 5){
    console.log("viernes");
} else if(dia == 6){
    console.log("sabado");
} else if(dia == 7){
    console.log("domingo");
} else{
    console.log("dia invalido");
}

switch (dia) {
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    case 3:
        console.log("miercoles");
        break;
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("sabado");
        break;
    case 7:
        console.log("domingo");
        break;

    default:
        console.log("dia invalido");
        break;
}

let a;
let b;
let operacion;
let r; //nombre de variable
let opcion = prompt("Ingrese opcion s:suma, r:resta, m:multiplicación, d:division");
a = +prompt('a:');
b = +prompt('b:');


switch (opcion) {
    case 's':
        operacion = 'SUMA';
        r = a + b;
        break;
    case 'r':
        operacion = 'RESTA';
        r = a - b;
        break;
    case 'm':
        operacion = 'MULTIPLICACION';
        r = a * b;
        break;
    case 'd':
        operacion = 'DIVISION';
        //validar que b sea dif de 0
        
        if(b != 0){
            r = a/b;
        } else{
            alert("No se puede dividir por 0");
        }
        break;

    default:
        break;
}

if (r !== undefined) {
    document.write('La ' + operacion + 'de ' + a + ' '+b + ' es ' + r);
} else {
    document.write("Math Error");
}
