let verMenuAlmuerzo = document.getElementById('verMenuAlmuerzo');

verMenuAlmuerzo.addEventListener('click', viendoMenuAlmuerzos);

function viendoMenuAlmuerzos(){

    const http = new XMLHttpRequest();
    const url = `http://127.0.0.1:3000/almuerzos`

    http.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let resMenuAlm = JSON.parse(this.responseText);

            let viendoAlmuerzos = document.getElementById('viendoAlmuerzos');
            viendoAlmuerzos.innerHTML = '';

            for(let i = 0; i < resMenuAlm.length; i++){

                viendoAlmuerzos.innerHTML += `
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <h5 class="tamanio-text">Nombre: ${resMenuAlm[i].nombre}</h5>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <h5 class="tamanio-text">Precio: ${resMenuAlm[i].precio}</h5>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <span class="input-group-text tamanio-text">Cantidad</span>
                                <input class="form-control tamanio-text" type="number">
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