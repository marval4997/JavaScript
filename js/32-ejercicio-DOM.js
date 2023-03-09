var boton = document.getElementById('enviar')
var formulario=document.getElementById('formulario')


formulario.addEventListener("submit" ,function enviar(e){
e.preventDefault()

var nombre=formulario.nombre.value
var apellido=formulario.apellido.value
var edad = formulario.edad.value

console.log("evento submit")
alert("nombre: " +nombre+ " apellido:"+ apellido+ " edad:"+ edad)

boton.addEventListener("click", function enviar(){
    
    var datos=`<p>Nombre: ${nombre}</p>
    <p>Apellido: ${apellido}</p>
    <p>Edad: ${edad}</p>`

    document.getElementById('datos').innerHTML=datos

  
})
})



