// condicional if
// si A es igual a B entonces as algo
// operadores relacionales
/**
 * operadores relacionales
 * mayor: >
 * menor: <
 * mayor o igual: >=
 * menor o igual: <=
 * igual: ==
 * distinto: !=
 */

////////////////ejemplo 1////////////////////////////
var edad1=30;
var edad2=12;


if(edad1 > edad2){
console.log("edad uno es mayor que edad 2");
}else{
    console.log("la edad 1 es inferior");
}

//////////////////////ejemplo2//////////////////
var edad =45;
var nombre='margarito';

if(edad >= 18){
   console.log(nombre + "tiene"+ edad +"anios, es mayor de edad");

   if(edad <=33){
    console.log('todavia eres milenial');
   }else if(edad >=70){
    console.log('eres anciano');
   }else{
    console.log('ya no eres milenial');
   }
}else{
    console.log(nombre + "tiene" + edad + "anios. es menor de edad");
}
////////////////////////////ejejmplo3//////////////////

/**
 * operadores logicos
 * AND(Y): &&
 * OR(O): ||
 * NEGACION: !
 */

//////////NEGACION

var year =2018;
if(year != 2016){
    console.log("el anio no es 2016"+ year);
}
// AND
if(year >= 2000 && year <= 2020){
    console.log("estamos en la era actual");
}else{
    console.log("estamos en la era post moderna");
}

// OR

if(year ==2008 || (year >= 2018 && year == 2028)){
    console.log("el anio acaba en 8");
}else{
    console.log('anio no esta registrado')
}