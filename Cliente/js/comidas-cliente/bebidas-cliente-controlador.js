let verMenuBebida = document.getElementById('verMenuBebida');

verMenuBebida.addEventListener('click', viendoMenuBebidas);

function viendoMenuBebidas(){

    const http = new XMLHttpRequest();
    const url = `http://127.0.0.1:3000/bebidas`

    http.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let resMenuBeb = JSON.parse(this.responseText);

            let viendoBebidas = document.getElementById('viendoBebidas');
            viendoBebidas.innerHTML = '';

            for(let i = 0; i < resMenuBeb.length; i++){

                viendoBebidas.innerHTML += `
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <h5 class="tamanio-text">Nombre: ${resMenuBeb[i].nombre}</h5>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <h5 class="tamanio-text">Precio: ${resMenuBeb[i].precio}</h5>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <span class="input-group-text tamanio-text">Cantidad</span>
                                <input class="form-control tamanio-text" type="number">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <label class="tamanio-text" for="${resMenuBeb[i]._id}">Seleccionar Para agregar</label>
                                <input value="${resMenuBeb[i]._id}" class="bebidas-id" type="checkbox">
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                `

            }


        }

    }

    http.open('GET', url);
    http.send();

}


// Guardando los IDS para hacer los pedidos
document.getElementById('send-pedido-bebida').addEventListener('click', function(){

    let checksBebidas = document.querySelectorAll('.bebidas-id');
    let bebidasId = []

    let bandera = false

    checksBebidas.forEach( (e) => {

        if(e.checked == true){
            bebidasId.push(e.value);
        }

    } )

})