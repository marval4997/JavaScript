'use strict'
//paramestros REST Y SPREAD

function listadoFrutas(fruta1, fruta2,/*rest */...resto_de_frutas){
    console.log("fruta 1: ",fruta1);
    console.log("fruta 2: ",fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("naranja","manzana","sandia","pera","melon","coco");
var fruta=['naranja','manzana'];
listadoFrutas(/*spread */...fruta,"sandia","pera","melon","coco");
