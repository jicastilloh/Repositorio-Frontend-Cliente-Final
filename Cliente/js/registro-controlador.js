

let guardarCliente = document.getElementById('enviar-datos-cliente');
guardarCliente.addEventListener('click', function(){
    
    // console.log('Registrando');
    // console.log(document.getElementById('nuevoNombre').value);
    
    
    const http = new XMLHttpRequest();
    const url = `http://127.0.0.1:3000/clientes/`;
    
    let data = `nombre=${document.getElementById('nuevoNombre').value}&apellido=${document.getElementById('newApellido').value}&email=${document.getElementById('nuevoEmail').value}&nameUser=${document.getElementById('nuevoUser').value}&pass=${document.getElementById('nuevaPass').value}`;
    
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            let respuestaCreando = JSON.parse(this.responseText);
            console.log(respuestaCreando);

            if(respuestaCreando.nombre != null){
                alert('Se registró correctamente');
                window.location.href = '../paginas/inicio.html'
            }
        }
    }
    
    http.open('POST', url);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    http.send(data);
    
})