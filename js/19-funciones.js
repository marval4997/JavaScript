'use strict'

//funcion conjunto de ordenes que se van a ejecutar cunado llamemos a lafuncion

function porConsola(n1, n2){
    console.log("suma"+(n1 +n2));
    console.log("resta"+(n1 -n2));
    console.log("multiplivacion"+(n1 *n2));
    console.log("divicion"+(n1 /n2));
}
function porPantalla(n1,n2){
    document.write("suma"+(n1 +n2)+"<br>");
    document.write("resta"+(n1 -n2)+"<br>");
    document.write("multiplivacion"+(n1 *n2)+"<br>");
    document.write("divicion"+(n1 /n2)+"<br>");
}

function calculadora(n1 , n2, mostrar =false){

    if(mostrar ==false){
      porConsola(n1,n2);
    }else{
    porPantalla(n1,n2);
    }
    
 return true;
 
}

calculadora(2,5,true)
calculadora(2,5)
/*
for(var i= 1; i<=10; i++){
    console.log(i);
    calculadora(i,8);
}
*/

