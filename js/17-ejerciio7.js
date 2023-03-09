//tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("de que numero quieres la tabla",1));
 
document.write("<h1> tabla del numero"+numero+"</h1>");
for(var i= 0; i <=10; i++){
    var tabla= numero*i;
    document.write("<p>"+numero+" x "+i+" = "+tabla+"</p>");
}


// todas las tablas
document.write("<h1> tablas de multiplicar del 1 al 10</h1>");
for(var numero1 =0; numero1 <=10; numero1++){
    document.write("<h1> tabla del numero "+numero1+"</h1>");
    for(var j= 0; j<=10; j++){
        var multipicacion= numero1*j;
        document.write("<p>"+numero1+" x "+j+" = "+multipicacion+"</p>");
    }
}
