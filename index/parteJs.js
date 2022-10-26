const precioFinal= ()=>{

    //aca valido mail con expresion regular 
   const valido= validar()

    if(!valido){

        return alert("Email incorrecto")
    }
   
    
//aca valido nombre con atributo pattern
    const inputNombre = document.getElementById('txtNombre');
    const inputApellido = document.getElementById('txtApellido');


   if(!inputNombre.checkValidity()) {
      return alert('El campo Nombre no es válido, recorda solo usar letras.');
    }

    
      if(!inputApellido.checkValidity()) {
       return alert('El campo Apellido no es válido, recorda solo usar letras.');
      }
//aca hago la cuenta
      else{

    

let cantidadEntradas=  parseInt( document.getElementById("txtCantidad").value)

let categoria= document.getElementById("categoria").value

if (categoria=="est"){

let precio=cantidadEntradas*40





return document.getElementById("txtTotalAPagar").value="total a pagar:"+precio+"$"



}

if (categoria=="tra"){

    let precio=cantidadEntradas*100
   
   return document.getElementById("txtTotalAPagar").value="total a pagar:"+precio+"$"

   


}

if (categoria=="jun"){

    let precio=cantidadEntradas*170

    alert("h")
    
   return document.getElementById("txtTotalAPagar").value="total a pagar:"+precio+"$"

    
    
}
      }

}

const borrar=()=>{

document.getElementById("txtNombre").value=""
document.getElementById("txtApellido").value=""
document.getElementById("txtCorreo").value=""
document.getElementById("txtCantidad").value=""
document.getElementById("txtTotalAPagar").value="total a pagar:$"




}

/*const validar=()=> {

    const inputNombre = document.getElementById('txtNombre');
    const inputApellido = document.getElementById('txtApellido');
   if(!inputNombre.checkValidity()) {
       alert('El campo Nombre no es válido, recorda solo usar letras.');
    }

    
      if(!inputApellido.checkValidity()) {
        alert('El campo Apellido no es válido, recorda solo usar letras.');
      }

    

}*/
/*var valor=document.getElementById("txtCorreo").value
function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     alert("La dirección de email " + valor + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }*/


  function validar() {
   
    let isValid = false;

   
    const input = document.getElementById("txtCorreo");

   
    const message = document.getElementById('message');

    input.willValidate = false;

   
    const pattern = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ );

    
    if(!input.value) {
      isValid = false;
    } else {
      
        if(!pattern.test(input.value)){ 
       
          isValid = false;
        } else {
        
          isValid = true;
        }
      }
    

    
    if(!isValid) {
     
      input.style.borderColor = 'salmon'; 
      message.hidden = false;
    } else {
      
      input.style.borderColor = 'palegreen'; 
      message.hidden = true;
    }

   
    return isValid;

}
  

 