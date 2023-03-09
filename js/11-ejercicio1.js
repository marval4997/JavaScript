'use strict'
/**
 * hacer un programa que pida dos numero y que nos diga cual es el mayor, el menor o si son iguales
 * PLUS: no son un numero no son un mumero o son menores o iguales acero, no los vuelva a pedir
 */

var numero1 = parseInt(prompt("ingresa la catidad 1", 0));
/*if(numero1 == 0 || numero1 != String){
    numero1 = parseInt(prompt("no esta permitido ingresar letras, ingresa un numero mayor a 0 vuelve a ingresar la cantidad 1"))
}*/
var numero2 = parseInt(prompt("ingresa la cantidad 2", 0));

while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
     numero1 = parseInt(prompt("ingresa la catidad 1", 0));
     numero2 = parseInt(prompt("ingresa la cantidad 2", 0));
}

if(numero1 < numero2){
    alert("el numero 1: "+numero1 + " es menor que numero 2: "+ numero2)
}else if(numero1 > numero2){
    alert("el numero 1: "+numero1 + " es mayor que numero 2: "+ numero2)

}else{
    alert("el numero 1: "+numero1 + " es igual que el numero 2: "+ numero2);
}