let enviar = document.querySelector("#cEnviar");
let resultado;

enviar.addEventListener("click", validator);


function validator(){
    let obtenerUsuario = document.querySelector("#cUsuario").value;
    let obtenerClave = document.querySelector("#cClave").value;

    let valorDeUsuario;
    let valorDeClave;

    for(let i = 0; i < clientes.length; i++){
        
        valorDeUsuario = clientes[i].usuario;
        valorDeClave = clientes[i].clave;
        
        if(valorDeUsuario == obtenerUsuario && valorDeClave == obtenerClave){
            console.log("Correcto");
            resultado = true;
            break;
        }else{
            resultado = false
        }
    }

    if(resultado == false){
        console.log("NO registrado");
    }

}
