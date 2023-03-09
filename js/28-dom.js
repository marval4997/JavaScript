
//DOM DOCUMENT OBJECT MODEL

function cambiaColor(color){
    caja.style.background = color;


}
//conseguir elemtos con un id concreto
//var caja= document.getElementById("micaja");
var caja= document.querySelector("#micaja");
caja.innerHTML ="texto en la caja desde js";
caja.style.background="red";
caja.style.padding="20px"
caja.style.color="white";
caja.className="hola hola2";


//conseguir elementos por su etiqueta
var todosLosDiv =document.getElementsByTagName("div");
//var contenido=todosLosDiv[2].textContent;
//todosLosDiv.forEach((valor, indice) => {

console.log(todosLosDiv);
var valor;
for(valor in todosLosDiv){

    if(typeof todosLosDiv[valor].textContent == "string"){
        var parrafo=  document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);

    }
 
}
//});
//console.log(contenido);

//conseguir elemetos por su clase
var divamarillos=document.getElementsByClassName("amarillo");
divamarillos[0].style.backgroundColor="yellow";

var divrojo=document.getElementsByClassName("rojo");

var div;
for( div in divrojo){
    if(divrojo[div].className=="rojo"){
        divrojo[div].style.background="red";
    }
    
}

console.log(divrojo)

//querySelector
var id = document.querySelector("#micaja");
console.log(id);