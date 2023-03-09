'use strict'

/**
 * que nos diga si es un numero par
 * ventana prompt
 * si no es valido que nos pida de nuevo el numero
 */

var numero= parseInt(prompt("ingresa un muero",1));

while ( numero <=0 || isNaN(numero)) {
    numero=parseInt(prompt("no se permiten numeros negativos ni letras",1));

   
}

if(numero%2 ==0){
    document.write("<p> el numero "+numero+  " es un numero par </p>");
}else{
    document.write("<p> el numero "+numero+ " no es un numero par </p>");
}



