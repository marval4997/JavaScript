'use strict'

// transformacion de textos
var numero1 = 444;
var texto1 = "binvenido al curso de java scrip curso";
var texto2 = "ES MUY BUENO";

var busqueda = texto1.indexOf("curso");
    busqueda = texto1.lastIndexOf("curso");
    busqueda = texto1.search("curso");
    busqueda = texto1.match(/curso/gi);
    busqueda = texto1.substr(13,5);
    busqueda = texto1.charAt(13);
    busqueda = texto1.startsWith("biemvenido");
    busqueda = texto1.includes("java");

console.log(busqueda);

var remplaso = texto1.replace("java scrip","php");
    remplaso = texto1.slice(13);
    remplaso = texto1.trim();
   // remplaso = texto1.split(" ");

console.log(remplaso);