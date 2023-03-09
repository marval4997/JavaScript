/*
calculadora
-pida los numeros por pantalla
-si metemos uno mal que nos vielva a pedir
-que en el cuerpo de la paguina , en una laerta y consola muestre el resultado de 
sumar, restar, multiplicar i dividir dos sifras
*/

var numero1 = parseInt(prompt("ingresa el valor 1", 1));
var numero2 = parseInt(prompt("ingresa el valor 2", 1));
var operacio = prompt("ingresa la opracin a realiza (+,x,/,-)", null);

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) ||  isNaN(numero2)) {
    numero1 = parseInt(prompt("no se aceptan numeros negativos ni letras ingresa el valor 1", 1));
    numero2 = parent(prompt("no se aceptan numeros negativos ni letras ingresa el valor 2", 1));
    operacio = prompt("ingresa la opracin a realiza (+,x,/,-)", null);
}

switch (operacio) {
    case operacio == "+":
        alert("el resultado de la suma  de " + numero1 +"="+ numero2 + "=" + (numero1 + numero2));
        break;
    case operacio == "-":
        alert("el resultado de la resta  de " + numero1 +"-"+ numero2 + "=" + (numero1 - numero2));
        break;
    case operacio == "x":
        alert("el resultado de la multiplicasion  de " + numero1 +"x"+ numero2 + "=" + (numero1 * numero2));
        break;
    case operacio == "/":
        alert("el resultado de la divicion  de " + numero1 + numero2 + "/" + (numero1 / numero2));
        break;

    default:
        break;
}