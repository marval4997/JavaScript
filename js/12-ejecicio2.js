/*
utilizando un bucle, mostrar la suma y la media de los numero introducidos por el usuario
asta introducir un numero negativo
*/


var suma= 0;
var contador = 0;
do {
    var numero = parseInt(prompt("ingresa un muero negativo",0));
    
    if(isNaN(numero)){
        numero=0;
    }else if(numero >=0){
      suma = suma+ numero

      contador++;
    }

    console.log(suma);
    console.log(contador);
} while (numero >=0 );

alert("la suma de todos los numeros es:"+suma);
alert("la media de todos los numeros es:"+(suma/contador));