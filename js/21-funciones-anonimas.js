'use strict'
//funciones anonimas
//es una funcion que no tiene nombre

function sumame(numero1,numero2,sumaYmuestras, sumaPorDos){
 var sumar = numero1+numero2;

 sumaYmuestras(sumar);
 sumaPorDos(sumar);
 return sumar;
}

// => funcion de flecha
sumame(5,7,dato=>{
console.log("la sumas es",dato);
},
dato=>{
 console.log("la suma por dos es: ",(dato*2));
})