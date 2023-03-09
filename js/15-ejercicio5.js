/**
 * hacer un programa que muestre todos los numero divisores de un numero que introduce en prompt
 */

var numero = parseInt(prompt("ingresa un numero",0));

for(var i =1 ; i <=numero; i++){
    if(numero%i ==0){
      document.write("<p>"+i+"</p>")
    }
}