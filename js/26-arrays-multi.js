'use strict'

var categorias=['Accion','terror','comedia'];
var peliculas =['la verdad duela','la vida es bella','gran torino'];

peliculas.sort();//ordenar arreglos
console.log(peliculas);

categorias.reverse();
console.log(categorias); //ordenar areglo de manera inversa

var cine=[categorias,peliculas];

//console.log(cine[0][1]);
/*
var elemnto = "";

do{
    var elemnto = prompt("agrega una pelicula","interestelar");
    peliculas.push(elemnto);
}
while(elemnto != "acabar");
peliculas[0]= undefined;
*/

var indice =peliculas.indexOf('gran torino');
console.log(indice);
if(indice > -1){//eliminar un elemento de un array
    peliculas.splice(indice,1);
}

var peliculas_estrig = peliculas.join(); //convertit array a texto

var cadena = "texto1, texto2, texto3";
var cadena_array=cadena.split(", ") //convertir a array

console.log(peliculas);
console.log(peliculas_estrig);
console.log(cadena_array);
