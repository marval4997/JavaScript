'use strict'

// transformacion de textos
var numero1=444;
var texto1="binvenido al curso de java scrip";
var texto2="ES MUY BUENO";

var dato = numero1.toString(); //convertir a estring
    dato = texto1.toUpperCase(); //convertir a mayusculas 
    dato = texto2.toLowerCase();
console.log( dato);

// calcular longitud
var nombre ="margarito";
    nombre =['margarito','valdez'];

console.log(nombre.length);

//concatenar - unir textos

//var textoTotal = texto1+" "+texto2;
var textoTotal= texto1.concat(" "+texto2);
console.log(textoTotal);