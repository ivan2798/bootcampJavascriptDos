// D.O.M Document Object Model

let div = "resultado";
let divResultado = document.getElementById(div);

//alert(typeof divResultado);

//alert(divResultado.innerHTML);

divResultado.innerHTML = "NO ESTAS NULL";

//OBJETOS EN JS
//variables primitivas no necesitan new
//number
//string
//booblean
//necesitan new
//Date
//propios objetos

let dia = new Date();

let divfecha = document.getElementById('fecha');
divfecha.innerHTML = "<p>Hoy es:</p>";

divfecha.innerHTML = divfecha.innerHTML + '/' + dia.getDate() + '/' + (dia.getMonth()+1) + "/" + dia.getFullYear();


let fecha = dia.getHours() + ":" +  dia.getMinutes() + ":" + dia.getSeconds();

divfecha.innerHTML = divfecha.innerHTML + "," + fecha;

let diaDeHoy = dia.getDay(); //0-6
let diaDeHoyString;
switch (diaDeHoy) {
    case 0:
        diaDeHoyString = "Lunes"
        break;
    case 1:
        diaDeHoyString = "Martes"
        break;
    case 2:
        diaDeHoyString = "Miercoles"
        break;
    case 3:
        diaDeHoyString = "Jueves"
        break;
    case 4:
        diaDeHoyString = "Viernes"
        break;
    case 5:
        diaDeHoyString = "Sabado"
        break;
    case 6:
        diaDeHoyString = "Domingo"
        break;
}
divfecha.innerHTML = divfecha.innerHTML + ' - ' + diaDeHoyString
//month entre 0 y 11
//tiene varios objetos

/**
 * Objetos propios
 */

const alumno = {
    id:1,
    nombre: "John",
    apellido: "Wick"
};


console.log(typeof alumno);
let divAlumno = document.getElementById("alumno");
divAlumno.innerHTML = alumno.nombre;


/**
 * document.querySelector(div)->lista de 0 a n
 */
 console.log('buscando divs');
let divs = document.querySelectorAll('div');
console.log(divs);

//puedo usar for para recorrer la lista de divs
for (let i = 0; i < divs.length; i++) {
    alert(divs[i].innerHTML);
}


