'use strict'

/**
 * hacer un programa que pida 6 numeros por pantalla
 * mostar el array entetro en el cuerpo de la paguina y la consola
 * sacar la matris ordenada
 * invertir el orden de la matris y mostarlo
 * mostar cuentos elementos tiene el array
 * busqueda de un valor introcisido por el usuario y que nos diga si esta en el arra y su indice
 */
function mostar_areglo(arreglo){
    for(var indice= 0; indice < arreglo.length; indice++){
        document.write("elemento "+indice+": "+arreglo[indice]+"<br>");
    }
}

var array_numeros=[];
for(var i=0; i<6 ;i++){
    var numeros = parseInt(prompt("ingresa un numero"));
    array_numeros.push(numeros); 
}
document.write("<h1>matris principal</h1>");
mostar_areglo(array_numeros);
console.log(array_numeros);

document.write("<h1>matris ordenada</h1>");
mostar_areglo(array_numeros.sort());

document.write("<h1>matris inversa</h1>");
mostar_areglo(array_numeros.reverse());



document.write("<h1>matris numero de elementos</h1>");
document.write("numeros de elementos del array es: "+array_numeros.length+"<br>");

var buacar= parseInt(prompt("ingres un numero a buscar"));
var busqueda = array_numeros.find(numero=>numero == buacar);
console.log(busqueda);

//////
var index = array_numeros.findIndex(numero=>numero == buacar);
console.log(index)
document.write("<h1>elemento buscado</h1>");
document.write("el elemnto "+buacar+" este en el indice "+indice);
