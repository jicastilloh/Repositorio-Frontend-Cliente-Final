// Creando un arreglo vacio de clientes
const clientes = [];

// Generando 10 clientes utilizando un ciclo "for"
function generarclientes(){

    for(let i = 0; i < 10; i++){
        let nuevocliente = {
            id: i,
            usuario:  `cUsuario${i.toString()}`,
            clave: `cPass${i.toString()}`
        }
        clientes.push(nuevocliente);
    }

    console.log(clientes);
}

// Llamando nuestra funcion
generarclientes();