'use strict';

var numero1= parseInt(prompt("ingresa el valor 1",0));
var numero2= parseInt(prompt("ingresa el valor 2",0));

document.write("<h1>de"+numero1+" a "+ numero2+ "estan estas numero:</h1>")
for (var i =numero1 ; i <= numero2; i++ ) {
    if(i%2 != 0){
         document.write("<p>"+i+"</p>")
    }
    
}