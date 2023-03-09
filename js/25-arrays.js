'use stricy'
//areglos matrices
//colecciones de datos 

var nombre= "margarito";
var nombres=["margarito","juan","jose","victor"];
var lenguajes = new Array("php","js","java","c#","c++","ts");

//console.log(nombres[0]);
//console.log(lenguajes);
//console.log(nombres.length);
/*
var elemnto = parseInt(prompt("que elemto quieres?",0));

if(elemnto >= nombres.length){
alert("introduce el numero corecto nemor qeu"+ nombres.length);
}else{
alert("el usuario selccionado es: "+nombres[elemnto]);
}
*/

document.write("<h1>lenguajes de programacion del 2018</h1>");
/*
for(var i=0 ; i < leguajes.length; i++){
    document.write(leguajes[i]+"<br>");
}
*/
/*
leguajes.forEach((elemnto, index,data)=>{
    document.write(index+" "+elemnto+"<br>");
});
*/
for(let lenguaje in lenguajes){
    document.write(lenguajes[lenguaje]+" <br>");
}

//busqudas
var presios=[10,20,12,34,40];
var busqueda =lenguajes.find(lenguaje => lenguaje =="php");//buesca si existe dentro del arreglo
var busqueda =lenguajes.findIndex(lenguaje => lenguaje =="php");//encuentra el indice

var busqueda = presios.some(precio =>precio >=20);//buscar que cunpla una condicion si al elementos mayores a un numero o menores o iguales



console.log(busqueda);